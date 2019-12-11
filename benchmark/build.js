const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const rollup = require('rollup');
const fs = require('fs-extra');
const path = require('path');
const babel = require('babel-core');

const srcDir = './src';
const destDir = './build';

function main() {
  buildAll();
}

async function buildAll() {
  fs.readdir(srcDir, { withFileTypes: true }, (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.isDirectory()) return;
      if (file.name.startsWith('__')) return;
      const dir = file.name;
      fs.emptydir(path.join(destDir, dir), err => {
        if (err) return console.error(err);
        fs.readdir(path.join(srcDir, dir), (err, files) => {
          if (err) return console.error(err);
          files.forEach(fileName => {
            build(dir, fileName);
          })
        })
      })
    })
  })
}

async function build(dir, file) {
  const name = path.join(dir, file);
  const type = path.basename(file, '.js');
  const inFile = path.join(srcDir, dir, file);
  const outFile = path.join(destDir, dir, file);
  const tmpFile = path.join(srcDir, dir, `_${file}`);
  
  if (type === "rewriting" || type === "interpretation") {
    let babelOpts = {};
    if (type === "rewriting") {
      babelOpts = {
        plugins: ["babel-plugin-aexpr-source-transformation"],
        presets: ["stage-0"],
      }
    } else if (type === "interpretation") {
      babelOpts = {
        plugins: ["babel-plugin-locals"],
        presets: ["stage-0", ["es2015", { modules: false }]],
      }
    }

    const source = await bundle(inFile, null, ['aexpr-source-transformation-propagation', 'aexpr-interpretation']);
    const transformedSource = transpile(source, babelOpts);
    
    try {
      await fs.outputFile(tmpFile, transformedSource);
      await bundle(tmpFile, outFile);
    } catch (err) {
      console.error(err);
    } finally {
      await fs.remove(tmpFile);
    }
  } else {
    await bundle(inFile, outFile);
  }
  console.log(`Compiled ${name}`);
}

function transpile(code, optsOverride) {
  const opts = {
    presets: [],
    plugins: [],
    // babelrc: false,
    ast: false,
    compact: false,
    sourceType: "script",
  };
  Object.assign(opts, optsOverride);

  const originalLog = console.log;
  try {
    console.log = (...msgs) => {};
    return babel.transform(code, opts).code;
  } catch (err) {
    console.error(err);
  } finally {
    console.log = originalLog;
  }
}

async function bundle(inFile, outFile, external) {
  const bundle = await rollup.rollup({
    input: inFile,
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
  
  if (outFile) {
    await bundle.write({
      format: "cjs",
      file: outFile,
    });
  } else {
    const result = await bundle.generate({ format: 'cjs' });
    return result.output[0].code;
  }
}

main();
