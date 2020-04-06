'use strict';

const child_process = require('child_process');

exports.buildType = process.features.debug ? 'Debug' : 'Release';

exports.createBenchmark = function(fn, configs, options) {
  return new Benchmark(fn, configs, options);
};

class Benchmark {
  constructor(fn, configs, options) {
    // Use the file name as the name of the benchmark
    this.name = process.mainModule.filename.slice(__dirname.length + 1);
    // Parse job-specific configuration from the command line arguments
    const parsed_args = this._parseArgs(process.argv.slice(2), configs);
    this.options = parsed_args.cli;
    this.extra_options = parsed_args.extra;
    // The configuration list as a queue of jobs
    this.queue = this._queue(this.options);
    // The configuration of the current job, head of the queue
    this.config = this.queue[0];
    // Execution arguments i.e. flags used to run the jobs
    this.flags = [];
    if (options && options.flags) {
      this.flags = this.flags.concat(options.flags);
    }
    if (process.env.NODE_BENCHMARK_FLAGS) {
      const flags = process.env.NODE_BENCHMARK_FLAGS.split(/\s+/);
      this.flags = this.flags.concat(flags);
    }
    // Used to make sure a benchmark only start a timer once
    this._started = false;
    // The number of started samples
    this._sample = 0;

    // this._run will use fork() to create a new process for each configuration
    // combination.
    if (process.env.hasOwnProperty('NODE_RUN_BENCHMARK_FN')) {
      let runner = fn;
      if (typeof fn === 'function') {
        runner = { run: fn }
      }
      process.nextTick(() => this._run(runner));
    } else {
      process.nextTick(() => this._runAllConfigs());
    }
  }

  _parseArgs(argv, configs) {
    const cliOptions = {};
    const extraOptions = {};
    const validArgRE = /^(.+?)=([\s\S]*)$/;
    // Parse configuration arguments
    for (const arg of argv) {
      const match = arg.match(validArgRE);
      if (!match) {
        console.error(`bad argument: ${arg}`);
        process.exit(1);
      }
      const config = match[1];

      if (configs[config]) {
        // Infer the type from the config object and parse accordingly
        const isNumber = typeof configs[config][0] === 'number';
        const value = isNumber ? +match[2] : match[2];
        if (!cliOptions[config])
          cliOptions[config] = [];
        cliOptions[config].push(value);
      } else {
        extraOptions[config] = match[2];
      }
    }
    return { cli: Object.assign({}, configs, cliOptions), extra: extraOptions };
  };

  _queue(options) {
    const queue = [];
    const keys = Object.keys(options);

    // Perform a depth-first walk though all options to generate a
    // configuration list that contains all combinations.
    function recursive(keyIndex, prevConfig) {
      const key = keys[keyIndex];
      const values = options[key];
      const type = typeof values[0];

      for (const value of values) {
        if (typeof value !== 'number' && typeof value !== 'string') {
          throw new TypeError(`configuration "${key}" had type ${typeof value}`);
        }
        if (typeof value !== type) {
          // This is a requirement for being able to consistently and predictably
          // parse CLI provided configuration values.
          throw new TypeError(`configuration "${key}" has mixed types`);
        }

        const currConfig = Object.assign({ [key]: value }, prevConfig);

        if (keyIndex + 1 < keys.length) {
          recursive(keyIndex + 1, currConfig);
        } else {
          queue.push(currConfig);
        }
      }
    }

    if (keys.length > 0) {
      recursive(0, {});
    } else {
      queue.push({});
    }

    return queue;
  };

  _run(runner, times = 100) {
    if (runner.setup) runner.setup(this.config);
    for (let i = 0; i < times; i++) {
      runner.run(this.config);
    }
    if (runner.teardown) runner.teardown(this.config);
  }

  _runAllConfigs() {
    const self = this;

    (function recursive(queueIndex) {
      const config = self.queue[queueIndex];

      // Set NODE_RUN_BENCHMARK_FN to indicate that the child shouldn't construct
      // a configuration queue, but just execute the benchmark function.
      const childEnv = Object.assign({}, process.env);
      childEnv.NODE_RUN_BENCHMARK_FN = '';

      // Create configuration arguments
      const childArgs = [];
      for (const key of Object.keys(config)) {
        childArgs.push(`${key}=${config[key]}`);
      }
      for (const key of Object.keys(self.extra_options)) {
        childArgs.push(`${key}=${self.extra_options[key]}`);
      }

      const child = child_process.fork(process.mainModule.filename, childArgs, {
        env: childEnv,
        execArgv: self.flags.concat(process.execArgv),
      });
      child.on('message', sendResult);
      child.on('close', (code) => {
        if (code) {
          process.exit(code);
        }

        if (queueIndex + 1 < self.queue.length) {
          recursive(queueIndex + 1);
        }
      });
    })(0);
  };

  start() {
    if (this._started) {
      throw new Error('Called start more than once without calling end first');
    }
    this._sample++;
    this._started = true;
    this._startTime = process.hrtime.bigint();
  };

  end(operations = 1) {
    // Get elapsed time now and do error checking later for accuracy.
    const end = process.hrtime.bigint();
    let elapsed = Number(end - this._startTime);

    if (!this._started) {
      throw new Error('called end without start');
    }
    if (!process.env.NODEJS_BENCHMARK_ZERO_ALLOWED && operations <= 0) {
      throw new Error('called end() with operation count <= 0');
    }
    if (elapsed === 0) {
      if (!process.env.NODEJS_BENCHMARK_ZERO_ALLOWED)
        throw new Error('insufficient clock precision for short benchmark');
      // Avoid dividing by zero
      elapsed = 0;
    }

    this._started = false;

    const time = elapsed / 1e9;
    const rate = operations / time;
    this.report(rate, elapsed);
  };

  
  report(rate, elapsed) {
    sendResult({
      name: this.name,
      conf: this.config,
      sample: this._sample,
      rate: rate,
      time: elapsed,
      type: 'report',
    });
  };
}

function formatResult(data) {
  // Construct configuration string, " A=a, B=b, ..."
  let conf = '';
  for (const key of Object.keys(data.conf)) {
    conf += ` ${key}=${JSON.stringify(data.conf[key])}`;
  }

  var rate = data.rate.toString().split('.');
  rate[0] = rate[0].replace(/(\d)(?=(?:\d\d\d)+(?!\d))/g, '$1,');
  rate = (rate[1] ? rate.join('.') : rate[0]);
  return `${data.name}${conf}: ${rate}`;
}

function sendResult(data) {
  if (process.send) {
    // If forked, report by process send
    process.send(data);
  } else {
    // Otherwise report by stdout
    console.log(formatResult(data));
  }
}

exports.sendResult = sendResult;