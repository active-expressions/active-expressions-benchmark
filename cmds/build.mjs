import fs from 'fs-extra';
import pathLib from 'path';
import logSymbols from 'log-symbols';
import realTerminalLink from 'terminal-link';

function terminalLink(text, url, options = { fallback: false }) {
  return realTerminalLink(text, url, options);
}

import rollup from 'rollup';
import rollupPluginNodeResolve from 'rollup-plugin-node-resolve';
import rollupPluginCommonJS from 'rollup-plugin-commonjs';
import builtins from 'builtin-modules';
import babel from 'babel-core';

import { parseFilters, collectFilteredBenchmarks } from './shared/filters.mjs'
import { srcDir, buildDir, babelOptionsPath, excludeFromBundlePath } from './shared/constants.mjs';

export let command = 'build [filters..]';

export let describe = 'Build the benchmarks';

export let builder = yargs => {
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
        default: buildDir,
      }
    })
}

export let handler = async function ({source, destination, filters, verbose}) {
  if (verbose >= 2) console.log('== build ==');
  
  const benchmarks = await collectFilteredBenchmarks(source, filters);
  if (verbose >= 2) console.log('benchmarks collected');

  const { default: babelOptions } = await import(babelOptionsPath);
  if (verbose >= 2) console.log('babel options imported');

  const { default: excludeFromBundle } = await import(excludeFromBundlePath);
  if (verbose >= 2) console.log('exclusions from bundle imported');
  
  benchmarks.forEach(benchmark => {
    buildBenchmark(benchmark);
  });

  async function buildBenchmark({ path, tags }) {
    const name = tags.join('.');
    const relativePath = pathLib.relative(source, path);
    if (verbose >= 2) console.log(`started: ${relativePath}`);

    const inFile = path;
    const tmpFile = pathLib.join(pathLib.dirname(inFile), pathLib.basename(inFile) + '.tmp');
    const outFile = pathLib.join(destination, relativePath);

    try {
      await firstBundle(inFile, tmpFile);

      const babelOpts = getBabelOptions(tags);
      if (babelOpts) {
        await applyBabelPlugin(tmpFile, babelOpts);
      }

      await secondBundle(tmpFile, outFile);

      await fs.remove(tmpFile);
      if (verbose >= 2) console.log(`removed tmp file: ${tmpFile}`);

      console.log(`${terminalLink(logSymbols.success, `file://${outFile}`)} ${terminalLink(name, `file://${inFile}`)}`);
    } catch (err) {
      console.log(`${logSymbols.error} ${terminalLink(name, `file://${inFile}`)} (${chalk.red(err.message)})`);
      if (verbose) console.error(err);
    }

    if (verbose >= 2) console.log(`finished building ${name}`);
  }

  function getBabelOptions(tags) {
    for (const [filter, options] of Object.entries(babelOptions)) {
      if (tags.includes(filter)) return options;
    }
    return null;
  }

  async function applyBabelPlugin(file, babelOpts) {
    if (verbose >= 2) console.log(`applying babel plugin: ${file}`);
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

  function noLogDuring(fn) {
    const originalLog = console.log;
    try {
      console.log = (...msgs) => {};
      return fn(originalLog);
    } finally {
      console.log = originalLog;
    }
  }

  async function firstBundle(inFile, outFile) {
    if (verbose >= 2) console.log(`start first bundle into: ${outFile}`);

    const options = {
      input: inFile,
      external: excludeFromBundle,
    };
    const bundle = await rollup.rollup(options);
    
    return await bundle.write({
      file: outFile,
      format: 'esm'
    });
  }

  async function secondBundle(inFile, outFile) {
    if (verbose >= 2) console.log(`start second bundle into: ${outFile}`);

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

    if (verbose >= 2) console.log(`start rollup with options:`);
    if (verbose >= 2) console.log(options);
    try {
      const bundle = await rollup.rollup(options);

      if (verbose >= 2) console.log(`end rollup`);
    
      return await bundle.write({
        file: outFile,
        format: 'cjs'
      });
    } catch (err) {
      console.error(err);
    }
  }
}