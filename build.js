#!/usr/bin/env node

const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const rollup = require('rollup');
const fs = require('fs-extra');
const path = require('path');
const babel = require('babel-core');

const srcDir = './src';
const destDir = './build';

// const program = new commander.Command();

// program
//   .option()


function main() {
  buildAll();
}

// async function allBenchmarks() {
//   try {
//     const benchDirs = await fs.readdir(srcDir, { withFileTypes: true });
//     benchDirs.forEach(benchDir => {
//       if (!benchDir.isDirectory()) return;
//       if (benchDir.name.startsWith('__')) return;
      
//       const files = await fs.readdir(path.join(srcDir, dirName))
//     });
//   } catch(err) {
//     console.error(err);
//   }
// }

async function buildAll() {
  try {
    const benchDirs = await fs.readdir(srcDir, { withFileTypes: true });
    benchDirs.forEach(benchDir => {
      if (!benchDir.isDirectory()) return;
      if (benchDir.name.startsWith('_' || benchDir.name.startsWith('.'))) return;
      
      buildDirectory(benchDir.name);
    });
  } catch(err) {
    console.error(err);
  }
}

async function buildDirectory(dirName) {
  try {
    await fs.emptydir(path.join(destDir, dirName));
    const files = await fs.readdir(path.join(srcDir, dirName));
    
    files.forEach(fileName => {
      buildFile(dirName, fileName);
    });
  } catch (err) {
    console.error(err);
  }
}

async function buildFile(dirName, fileName) {
  const name = path.join(dirName, fileName);
  const type = path.basename(fileName, '.js');

  const inFile = path.join(srcDir, dirName, fileName);
  const outFile = path.join(destDir, dirName, fileName);
  const tmpFile = path.join(srcDir, dirName, `_${fileName}`);

  fs.copy(inFile, tmpFile);

  try {
    if (type === "rewriting") {
      await rewritingProcessing(tmpFile, tmpFile);
    } else if (type === "interpretation") {
      await interpretationProcessing(tmpFile, tmpFile);
    }
    else if (type === "proxies") {
      await proxiesProcessing(tmpFile, tmpFile);
    }

    const finalSource = await bundle(tmpFile);
    await fs.outputFile(outFile, finalSource);
    console.log(`Compiled ${name}`);
  } catch (err) {
    console.log(err);
    return;
  } finally {
    await fs.remove(tmpFile);
  }
}

async function interpretationProcessing(inFile, outFile) {
  const babelOpts =  {
    plugins: ["babel-plugin-locals"],
    presets: ["stage-0", ["es2015", { modules: false }]],
  }

  const source = await bundle(inFile, ['aexpr-interpretation']);
  const transformedSource = transpile(source, babelOpts);
  return fs.outputFile(outFile, transformedSource);
}

async function rewritingProcessing(inFile, outFile) {
  const babelOpts =  {
    plugins: ["babel-plugin-aexpr-source-transformation"],
    presets: ["stage-0"],
  }
  

  const source = await bundle(inFile, ['aexpr-source-transformation-propagation']);
  const transformedSource = transpile(source, babelOpts);
  return fs.outputFile(outFile, transformedSource);
}

async function proxiesProcessing(inFile, outFile) {
  const babelOpts =  {
    plugins: ["babel-plugin-aexpr-proxies"],
    presets: ["stage-0"],
  }
  

  const source = await bundle(inFile, ['aexpr-source-transformation-propagation']);
  const transformedSource = transpile(source, babelOpts);
  return fs.outputFile(outFile, transformedSource);
}

function transpile(code, optsOverride) {
  const opts = {
    ast: false,
    compact: false,
    sourceType: "script",
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
  } catch (err) {
    console.error(err);
  } finally {
    console.log = originalLog;
  }
}

async function bundle(inFile, external) {
  const bundle = await rollup.rollup({
    input: inFile,
    inlineDynamicImports: true,
    external: [
      '../common.js', //can not be rollup-ed (without modifications); depends on `require.main`
      'is-ci',
    ].concat(external || []),
    plugins: [
      nodeResolve({
        preferBuiltins: true,
        mainFields: ['jsnext:main', 'main', 'module'],
      }),
      commonjs(),
    ],
  });
  
  const result = await bundle.generate({ format: 'cjs' });
  return result.output[0].code;
}

main();
