#!/usr/bin/env node
'use strict';

const fork = require('child_process').fork;
const path = require('path');
const CLI = require('./_cli.js');

//
// Parse arguments
//
const cli = CLI(`usage: ./node run.js [options] [--] <category> ...
  Run each benchmark in the <category> directory a single time, more than one
  <category> directory can be specified.

  --runs 1                  number of samples
  --all                     run all benchmarks, ignoring the given categories
                            (filter & exclude still applies)
  --node ./node-binary      node binary to run the benchmarks with
  --filter   pattern        includes only benchmark scripts matching <pattern>
                            (can be repeated)
  --exclude  pattern        excludes scripts matching <pattern> (can be
                            repeated)
  --set    variable=value   set benchmark variable (can be repeated)
  --format [simple|csv]     optional value that specifies the output format
`, { arrayArgs: ['set', 'filter', 'exclude'], boolArgs: ['all'] });

const benchmarks = cli.optional.all ? cli.allBenchmarks() : cli.benchmarks();

if (benchmarks.length === 0) {
  console.error('No benchmarks found');
  process.exitCode = 1;
  return;
}

const validFormats = ['csv', 'simple'];
const format = cli.optional.format || 'simple';
if (!validFormats.includes(format)) {
  console.error('Invalid format detected');
  process.exitCode = 1;
  return;
}

if (format === 'csv') {
  console.log('"filename", "configuration", "rate", "time"');
}

const runs = cli.optional.runs ? parseInt(cli.optional.runs, 10) : 1;

(function runBenchmark(i) {
  const filename = benchmarks[i];
  (function runSample(j) {
    const child = fork(path.resolve(__dirname, filename), cli.optional.set, {
      execPath: cli.optional.node || process.execPath
    });

    if (format !== 'csv') {
      console.log();
      console.log(filename);
    }

    child.on('message', (data) => {
      if (data.type !== 'report') {
        return;
      }

      // Construct configuration string, " A=a, B=b, ..."
      let conf = '';
      for (const key of Object.keys(data.conf)) {
        conf += ` ${key}=${JSON.stringify(data.conf[key])}`;
      }
      // Delete first space of the configuration
      conf = conf.slice(1);

      if (format === 'csv') {
        // Escape quotes (") for correct csv formatting
        conf = conf.replace(/"/g, '""');
        console.log(`"${data.name}", "${conf}", ${data.rate}, ${data.time}`);
      } else {
        var rate = data.rate.toString().split('.');
        rate[0] = rate[0].replace(/(\d)(?=(?:\d\d\d)+(?!\d))/g, '$1,');
        rate = (rate[1] ? rate.join('.') : rate[0]);
        console.log(`${data.name} ${conf}: ${rate}`);
      }
    });

    child.once('close', (code) => {
      if (code) {
        process.exit(code);
        j = Infinity;
      }

      // If there are more benchmarks execute the next
      if (j + 1 < runs) {
        runSample(j + 1);
      } else if (i + 1 < benchmarks.length) {
        runBenchmark(i + 1);
      }
    });
  })(0);
})(0);
