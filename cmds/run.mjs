import fs from 'fs-extra';
import pathLib from 'path';
import { fork } from 'child_process';
import cliProgress from 'cli-progress';

import { parseFilters, collectFilteredBenchmarks } from './shared/filters.mjs'

import { buildDir, resultsDir, configsPath } from './shared/constants.mjs';

export let command = 'run [filters..]';

export let describe = 'Execute the benchmarks';

export let builder = yargs => {
  yargs
    .positional('filters', {
      describe: 'filter available benchmarks (e.g. `rewriting interpretation.maintain-aspect-ratio` will select only benchmarks including either `rewriting` or both `interpretation` and `maintain-aspect-ratio`',
      coerce: parseFilters,
    })
    .options({
      'e': {
        alias: 'executions',
        describe: 'number of process executions (separate VMs), each with the same amount of iterations',
        type: 'number',
        default: 1,
      },
      'i': {
        alias: 'iterations',
        describe: 'number of iterations per execution',
        type: 'number',
        default: 1,
      },
      'f': {
        alias: 'format',
        describe: 'output format of benchmark results',
        choices: ['csv', 'json', 'terminal'],
        default: 'terminal',
      },
      'b': {
        alias: 'benchmarks',
        describe: 'directory path containing built benchmarks',
        type: 'string',
        default: buildDir,
      },
      'r': {
        alias: 'results',
        describe: 'directory to place benchmarking results in',
        type: 'string',
        default: resultsDir,
      },
      'c': {
        alias: 'configs',
        describe: 'path to benchmark configs',
        type: 'string',
        default: configsPath,
      },
      'n': {
        alias: 'node',
        describe: 'node.js executable to use for benchmark executions',
        type: 'string',
        default: process.execPath,
      }
    })
}

export let handler = async function ({
                                      filters,
                                      executions,
                                      iterations,
                                      verbose,
                                      node,
                                      configs: configsPath,
                                      benchmarks: benchmarksDirectory,
                                      results: resultsDirectory,
                                    }) {
  if (verbose >= 2) console.log('== run ==');

  const benchmarks = await collectFilteredBenchmarks(benchmarksDirectory, filters);
  if (verbose >= 2) console.log('benchmarks collected');

  const { default: configs } = await import(configsPath);
  if (verbose >= 2) console.log('configs imported');
  
  const benchmarkResultsDir = pathLib.join(resultsDirectory, dateToFolderName(new Date()));
  if (await fs.pathExists(benchmarkResultsDir)) {
    console.error(`Benchmark results output directory (${benchmarkResultsDir}) already exists`)
    process.exit(1);
  } else {
    await fs.emptyDir(benchmarkResultsDir);
  }
  if (verbose >= 2) console.log(`writing results to ${benchmarkResultsDir}`);

  const progressBars = new cliProgress.MultiBar({
    format: '{kind}: [{bar}] {value}/{total}',
    barsize: 60,
    stopOnComplete: true,
    clearOnComplete: true,
  });
  const runProgress = progressBars.create(benchmarks.length, 0, { name: '' });
  runProgress.options = Object.assign({}, runProgress.options, {
    format: 'Elapsed: {duration_formatted} | Benchmark {value}/{total}: {name}',
  });
  const variationProgress = progressBars.create(getTotalNumVariations(), 0, {kind: 'V'});
  
  try {
    await runBenchmarks();
  } finally {
    progressBars.stop();
  }
  
  async function runBenchmarks() {
    for (let benchmarkIndex = 0; benchmarkIndex < benchmarks.length; benchmarkIndex++) {
      const { path, tags } = benchmarks[benchmarkIndex];
      const benchmarkName = tags.join('.');
      const childDir = pathLib.dirname(path);
      const config = getConfig(tags);
      const numParameterVariations = getNumVariations(config);
      const benchmarkResults = {
        file: path,
        name: benchmarkName,
        tags: tags,
        config: config,
        variations: [],
      };

      runProgress.update(benchmarkIndex+1, {
        name: benchmarkName,
      });
      
      for (let variationIndex = 0; variationIndex < numParameterVariations; variationIndex++) {
        const parameters = getVariation(config, variationIndex);
        const childArgs = [iterations, JSON.stringify(parameters)];
        const executionResults = [];
        const benchmarkResult = {
          failed: false,
          error: null,
          parameters: parameters,
          executions: executionResults,
        };
        benchmarkResults.variations.push(benchmarkResult);
        variationProgress.increment();
        const executionProgress = progressBars.create(executions, 0, {kind: 'E'});
        
        for (let execution = 1; execution <= executions; execution++) {
          const iterationResults = [];
          const executionResult = {
            execution: execution,
            startDate: new Date(),
            iterations: iterationResults,
          };
          executionResults.push(executionResult);
          executionProgress.increment();
          const iterationProgress = progressBars.create(iterations, 1, {kind: 'I'});
          
          const executionPromise = new Promise((resolve, reject) => {
            const child = fork(path, childArgs, {
              cwd: childDir,
              execPath: node,
              execArgv: [],
            });

            child.on('message', data => {
              if (data.type === 'iteration') {
                iterationProgress.increment();
                iterationResults.push({
                  iteration: data.iteration,
                  startDate: data.startDate,
                  elapsed: data.elapsed,
                })
              } else if (data.type === 'error') {
                benchmarkResult.error = data.error;
              }
            });
    
            child.on('error', reject);
            child.on('exit', code => {
              if (code !== 0) {
                reject();
              } else {
                resolve();
              }
            });
          });

          try {
            await executionPromise;
          } catch {
            benchmarkResult.failed = true;
          }

          progressBars.remove(iterationProgress);
        }
        progressBars.remove(executionProgress);
      }

      const benchmarkResultsFile = pathLib.join(benchmarkResultsDir, benchmarkName + '.json');
      await fs.outputJSON(benchmarkResultsFile, benchmarkResults, {
        spaces: '\t',
        EOL: '\n',
      });
    }
  }
  
  function getTotalNumVariations() {
    return benchmarks.reduce((n, benchmark) => {
      return n + getNumVariations(getConfig(benchmark.tags));
    }, 0)
  }
  
  function getNumVariations(config) {
    let size = 1;
    for (const values of Object.values(config)) {
      if (!Array.isArray(values) || !values.length) continue;
      size *= values.length;
    }
    return size;
  }
  
  function getVariation(config, i) {
    let cycle = 1;
    let result = {};
    for (const [property, values] of Object.entries(config)) {
      if (!Array.isArray(values) || !values.length) continue;
      result[property] = values[Math.trunc(i/cycle) % values.length];
      cycle *= values.length;
    }
    return result;
  }

  function getConfig(tags) {
    const key = Object.keys(configs).find(filter => tags.includes(filter));
    return key ? configs[key] : {};
  }


  function dateToFolderName(date) {
    function pad(n) {
      return n.toString().padStart(2, '0');
    }
  
    // even after searching for quite a while i was unable to find a better solution :/
    const localDate = new Date(date.getTime() - 60000 * date.getTimezoneOffset());
  
    const YYYY = localDate.getUTCFullYear();
    const MM = pad(localDate.getUTCMonth() + 1);
    const DD = pad(localDate.getUTCDate());
    const hh = pad(localDate.getUTCHours());
    const mm = pad(localDate.getUTCMinutes());
    const ss = pad(localDate.getUTCSeconds());
    return `${YYYY}-${MM}-${DD}_${hh}-${mm}-${ss}`;
  }
}