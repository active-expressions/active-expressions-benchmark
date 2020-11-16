'use strict';

const help = `${__filename} <iterations> [parameters]

run the benchmark for a set number of iterations

Positionals:
  iterations  number of in-process repitions of the main benchmark function
                                                                        [number]
  parameters  JSON description of the object to be passed to the main benchmark
              function. Remember to escape the object correctly (which might
              also depend on the shell you're using)

Examples:
  ${__filename} 100 '{"n": 10, "mode": "fast"}'`

export default class BenchmarkRunner {
  constructor(main, setup, teardown) {
    this._parseArgs();
    this.isRunning = false;
    this.currentIteration = 0;

    this.main = main;
    this.setup = setup;
    this.teardown = teardown;

    process.nextTick(() => this.run());
  }

  displayHelp() {
    console.log(help);
    process.exit(1);
  }

  _parseArgs() {
    const args = process.argv.slice(2);
    if (args.length < 1) {
      console.log('Not enough arguments');
      this.displayHelp();
    }
    if (args.length >= 1) {
      this.iterations = Number(args[0]);
      if (!this.iterations) {
        console.log(`${args[0]} is not a number`);
        this.displayHelp();
      }
    }
    if (args.length >= 2) {
      try {
        this.parameters = JSON.parse(args[1]);
      } catch (err) {
        console.log(`${args[1]} is not valid JSON`);
        this.displayHelp();
      }
    }

    // yargs
    //   .command(
    //     '$0 <iterations> [parameters]',
    //     'run the benchmark for a set number of iterations',
    //     yargs => {
    //       yargs
    //         .positional('iterations', {
    //           describe: 'number of in-process repitions of the main benchmark function',
    //           type: 'number',
    //         })
    //         .positional('parameters', {
    //           describe: `JSON description of the object to be passed to the main benchmark function. Remember to escape the object correctly (which might also depend on the shell you're using)`,
    //           coerce: json => JSON.parse(json),
    //         })
    //         .example(`$0 100 '{"n": 10, "mode": "fast"}'`)
    //     })
    //   .help()
    // 
    // return yargs.argv;
  };
  
  run() {
    try {
      if (this.setup) this.setup(this.parameters);
  
      for (let i = 0; i < this.iterations; i++) {
        this.main(this.parameters);
      }
  
      if (this.teardown) this.teardown(this.parameters);
    } catch (err) {
      this.fail(err);
    }
  }

  start() {
    if (this.isRunning) {
      throw new Error('Called start more than once without calling end first');
    }
    this.currentIteration++;
    this.isRunning = true;
    this._startDate = new Date();
    this._startClock = process.hrtime.bigint();
  };

  stop() {
    // Get elapsed time now and do error checking later for accuracy.
    const stopClock = process.hrtime.bigint();
    
    if (!this.isRunning) {
      throw new Error('called stop() without start()');
    }

    let elapsed = Number(stopClock - this._startClock);
    if (elapsed === 0) {
      throw new Error('insufficient clock precision for short benchmark');
    }

    this.isRunning = false;

    this.reportIteration(this._startDate, elapsed);
  };

  assert(bool) {
    if (!bool) throw new Error('assertion failed');
  }

  fail(err) {
    this.reportError(err);
    process.exit(1);
  }
  
  reportIteration(startDate, elapsedTime) {
    if (process.send) {
      process.send({
        iteration: this.currentIteration,
        startDate: startDate,
        elapsed: elapsedTime, //nanoseconds
        type: 'iteration',
      });
    } else {
      const padding = this.iterations.toString().length;
      const iteration = this.currentIteration.toString().padStart(padding, " ");
      const time = startDate.toLocaleTimeString();
      const duration = Intl.NumberFormat(undefined, { style: 'unit', unit: 'millisecond' }).format(elapsedTime / 1e6);
      console.log(`[${iteration} - ${time}] ${duration}`);
    }
  }

  reportError(error) {
    if (process.send) {
      process.send({
        error: error.toString(),
        type: 'error',
      });
    } else {
      console.error(error);
    }
  }
}