"use strict"

import yargs from 'yargs';
import fs from 'fs-extra';
import pathLib from 'path';
import { fileURLToPath } from 'url';
import { fork } from 'child_process';
import rollup from 'rollup';
import rollupPluginNodeResolve from 'rollup-plugin-node-resolve';
import rollupPluginCommonJS from 'rollup-plugin-commonjs';
import builtins from 'builtin-modules';
import babel from 'babel-core';
import terminalLink from 'terminal-link';
import logSymbols from 'log-symbols';
import chalk from 'chalk';
import cliProgress from 'cli-progress';

const __filename = fileURLToPath(import.meta.url);
const __dirname = pathLib.dirname(__filename);

const srcDir = pathLib.join(__dirname, './src');
const destDir = pathLib.join(__dirname, './build');
const depsDir = pathLib.join(__dirname, './deps'); //TODO
const resultsDir = pathLib.join(__dirname, './results');
const configsPath = pathLib.join(__dirname, './configs.mjs');

yargs
  .scriptName('bench')
  .usage('$0 <command> [<args>]')
  .options({
    'v': {
      alias: 'verbose',
      describe: 'verbosity level (0 = default, 1 = error output, 2 = logging)',
      type: 'count',
    }
  })
  .command('run [filters..]', 'Execute the benchmarks', yargs => {
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
        'build': {
          describe: 'build benchmarks before running',
          boolean: true,
          default: false,
        },
        'b': {
          alias: 'benchmarks',
          describe: 'directory path containing built benchmarks',
          type: 'string',
          default: destDir,
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
  }, run)
  .command('build [filters..]', 'Build the benchmarks', yargs => {
    yargs
      .positional('filters', {
        describe: 'filter available benchmarks (e.g. `rewriting interpretation.maintain-aspect-ratio` will select only benchmarks including either `rewriting` or both `interpretation` and `maintain-aspect-ratio`',
        coerce: parseFilters,
      })
      .options({
        's': {
          alias: 'source',
          describe: 'source directory containing all benchmark sources',
          type: 'string',
          default: srcDir,
        },
        'd': {
          alias: 'destination',
          describe: 'directory to put bundled benchmarks into',
          type: 'string',
          default: destDir,
        }
      })
  }, build)
  .command('cleanup', 'Remove created artifacts', yargs => {
    
  }, cleanup)
  // .command('view', 'Start serving a viewer of benchmark results', yargs => {

  // }, view)
  .command(['list [filters..]', 'ls'], 'List available benchmarks', yargs => {
    yargs
      .positional('filters', {
        describe: 'filter available benchmarks (e.g. `rewriting interpretation.maintain-aspect-ratio` will select only benchmarks including either `rewriting` or both `interpretation` and `maintain-aspect-ratio`',
        coerce: parseFilters,
      })
      .options({
        'p': {
          alias: 'path',
          describe: 'path to query for available benchmarks',
          type: 'string',
          default: srcDir,
        }
      })
  }, list)
  .parserConfiguration({
    "unknown-options-as-args": true, //otherwise negative filters are parsed as options
  })
  .demandCommand(1, "")
  .strictCommands()
  .help()
  .version(false)
  .argv

function parseFilters(filters) {
  const result = {
    positive: [],
    negative: [],
  }

  for (const filter of filters) {
    let filterList = result.positive;
    let actualFilter = filter;
    if (filter.startsWith('-')) {
      filterList = result.negative;
      actualFilter = filter.slice(1);
    }
    const tags = actualFilter.split('.');
    tags.forEach(tag => console.assert(isTagName(tag)));
    filterList.push(tags);
  }

  return result;
}

function isTagName(tag) {
  return tag.length
          && !tag.startsWith('_')
          && !tag.includes('.')
          && !tag.startsWith('-');
}
  
async function collectFilteredBenchmarks(directory, filters, verbose) {
  const benchmarks = await collectAvailableBenchmarks(directory);
  return filterBenchmarks(benchmarks, filters);

  async function collectAvailableBenchmarks(directory) {
    const benchmarks = [];
    try {
      const files = await fs.readdir(directory, { withFileTypes: true });
      for (const file of files) {
        const filePath = pathLib.join(directory, file.name);
        if (file.isDirectory()) {
          if (!isTagName(file.name)) continue;
          const children = await collectAvailableBenchmarks(filePath);
          for (const { path, tags } of children) {
            benchmarks.push({
              path: path,
              tags: [file.name, ...tags],
            });
          }
        } else {
          const basename = pathLib.basename(file.name, '.js');
          if (!isTagName(basename)) continue;
          benchmarks.push({
            path: filePath,
            tags: [basename],
          });
        }
      }
    } catch (err) {
      console.log(`Could not collect available benchmarks: ${chalk.red(err.message)}`);
      if (verbose) console.error(err);
      process.exit(1);
    }
    return benchmarks;
  }

  function filterBenchmarks(benchmarks, filters) {
    const notExcludedBenchmarks = benchmarks.filter(({ path, tags }) => {
      return !filters.negative.some(filterTags => {
        return filterTags.every(filterTag => tags.includes(filterTag));
      })
    })
    
    if (!filters.positive.length) return notExcludedBenchmarks;
    return notExcludedBenchmarks.filter(({ path, tags }) => {
      return filters.positive.some(filterTags => {
        return filterTags.every(filterTag => tags.includes(filterTag));
      });
    })
  }
}

function noLogDuring(fn) {
  const originalLog = console.log;
  try {
    console.log = (...msgs) => {};
    return fn(originalLog);
  } finally {
    console.log = originalLog;
  }
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

async function run({
                filters,
                executions,
                iterations,
                verbose,
                node,
                configs: configsPath,
                format,
                benchmarks: benchmarksDirectory,
                results: resultsDirectory,
                build: buildFirst,
              }) {
  if (buildFirst) await build({source: srcDir, destination: benchmarksDirectory, filters, verbose});

  const benchmarks = await collectFilteredBenchmarks(benchmarksDirectory, filters, verbose);
  const { default: configs } = await import(configsPath);
  
  const benchmarkResultsDir = pathLib.join(resultsDirectory, dateToFolderName(new Date()));
  if (await fs.pathExists(benchmarkResultsDir)) {
    console.error(`Benchmark results output directory (${benchmarkResultsDir}) already exists`)
    process.exit(1);
  } else {
    await fs.emptyDir(benchmarkResultsDir);
  }

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

  (async function runBenchmark(benchmarkIndex) {
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
    
    (function runConfigVariation(variationIndex) {
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
      
      (function runExecution(execution) {
        const iterationResults = [];
        const executionResult = {
          execution: execution,
          startDate: new Date(),
          iterations: iterationResults,
        };
        executionResults.push(executionResult);
        executionProgress.update(execution);
        const iterationProgress = progressBars.create(iterations, 0, {kind: 'I'});
        
        const child = fork(path, childArgs, {
          cwd: childDir,
          execPath: node,
          execArgv: [],
        });

        child.on('message', data => {
          if (data.type === 'iteration') {
            iterationProgress.update(data.iteration);
            iterationResults.push({
              iteration: data.iteration,
              startDate: data.startDate,
              elapsed: data.elapsed,
            })
          } else if (data.type === 'error') {
            benchmarkResult.error = data.error;
          }
        });

        child.once('close', code => {
          if (code !== 0) {
            benchmarkResult.failed = true;
            endConfigVariation();
          } else {
            //TODO
            endExecution();
          }
        })

        function endExecution() {
          progressBars.remove(iterationProgress);
          if (execution < executions) {
            runExecution(execution + 1);
          } else {
            endConfigVariation();
          }
        }

      })(1)

      function endConfigVariation() {
        progressBars.remove(executionProgress);
        if (variationIndex + 1 < numParameterVariations) {
          runConfigVariation(variationIndex + 1);
        } else {
          endBenchmark();
        }
      }

    })(0)

    async function endBenchmark() {
      const benchmarkResultsFile = pathLib.join(benchmarkResultsDir, benchmarkName + '.json');
      await fs.outputJSON(benchmarkResultsFile, benchmarkResults, {
        spaces: '\t',
        EOL: '\n',
      });

      if (benchmarkIndex + 1 < benchmarks.length) {
        runBenchmark(benchmarkIndex + 1);
      } else {
        endRun();
      }
    }

  })(0)

  function endRun() {
    progressBars.stop();
  }
}

async function build({source, destination, filters, verbose}) {
  if (verbose >= 2) console.log('== build ==');
  const benchmarks = await collectFilteredBenchmarks(source, filters, verbose);

  benchmarks.forEach(benchmark => {
    buildBenchmark(benchmark);
  });

  async function buildBenchmark({ path, tags }) {
    const name = tags.join('.');
    const relativePath = pathLib.relative(source, path);

    const inFile = path;
    const tmpFile = pathLib.join(pathLib.dirname(inFile), pathLib.basename(inFile) + '.tmp');
    const outFile = pathLib.join(destination, relativePath);

    try {
      await firstBundle(inFile, tmpFile);

      if (tags.includes("rewriting")) {
        await applyBabelPlugin(tmpFile, {
          plugins: ["babel-plugin-aexpr-source-transformation"],
          presets: ["stage-0"],
        });
      } else if (tags.includes("interpretation")) {
        await applyBabelPlugin(tmpFile, {
          plugins: ["babel-plugin-locals"],
          presets: ["stage-0", ["es2015", { modules: false }]],
        });
      }

      await secondBundle(tmpFile, outFile);

      console.log(`${terminalLink(logSymbols.success, `file://${outFile}`)} ${terminalLink(name, `file://${inFile}`)}`);
    } catch (err) {
      console.log(`${logSymbols.error} ${terminalLink(name, `file://${inFile}`)} (${chalk.red(err.message)})`);
      if (verbose) console.error(err);
    } finally {
      await fs.remove(tmpFile);
    }
  }

  async function applyBabelPlugin(file, babelOpts) {
    const source = await fs.readFile(file);
    const transpiledSource = transpile(source, babelOpts);
    return fs.outputFile(file, transpiledSource);
  }

  function transpile(code, optsOverride) {
    const opts = {
      ast: false,
      compact: false,
      sourceType: "module",
    };
    Object.assign(opts, optsOverride);

    return noLogDuring(() => {
      return babel.transform(code, opts).code
    });
  }

  async function firstBundle(inFile, outFile) {
    const options = {
      input: inFile,
      external: [
        'yargs',
        'is-ci',
        'random-seed',
        'aexpr-ticking',
        'aexpr-source-transformation-propagation',
        'aexpr-interpretation',
        pathLib.resolve(__dirname, './deps/benchmark-runner.js'),
        pathLib.resolve(__dirname, './deps/utils.js'),
      ],
    };
    const bundle = await rollup.rollup(options);
    
    return await bundle.write({
      file: outFile,
      format: 'esm'
    });
  }

  async function secondBundle(inFile, outFile) {
    const options = {
      input: inFile,
      external: builtins,
      plugins: [
        rollupPluginNodeResolve({
          preferBuiltins: true,
          mainFields: ['jsnext:main', 'jsnext', 'module', 'main'],
        }),
        rollupPluginCommonJS(),
      ]
    };
    const bundle = await rollup.rollup(options);
    
    return await bundle.write({
      file: outFile,
      format: 'cjs'
    });
  }
}

async function cleanup(argv) {
  fs.emptyDir(destDir);
  fs.emptyDir(resultsDir);
}

function view(argv) {

}

async function list({path, filters, verbose}) {
  const benchmarks = await collectFilteredBenchmarks(path, filters, verbose);
  benchmarks.forEach(({ path, tags }) => {
    const name = tags.join('.');
    const url = `file://${path}`;
    console.log(terminalLink(name, url));
  })
}