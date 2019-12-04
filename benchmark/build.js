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
            if (fileName === 'interpretation.js') return; //Workaround to ignore unfinished files
            build(dir, fileName);
          })
        })
      })
    })
  })
}

async function build(dir, file) {
  const name = path.join(dir, file);
  const type = path.basename(file);
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
    } else if (type === "interpreation") {
      babelOpts = {
        plugins: ["babel-plugin-locals"],
        presets: ["stage-0", ["es2015", { modules: false }]],
      }
    }

    const code = transpile(await bundle(inFile), babelOpts);
    
    try {
      await fs.outputFile(tmpFile, code);
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
    babelrc: false,
    ast: false,
    compact: false,
    sourceType: "script",
  };
  Object.assign(opts, optsOverride);
  return babel.transform(code, opts).code;
}

async function bundle(inFile, outFile) {
  const bundle = await rollup.rollup({
    input: inFile,
    external: [
      '../common.js', //can not be rollup-ed; depends on require.main
      'is-ci',
      'aexpr-source-transformation-propagation',
    ],
    plugins: [
      nodeResolve({
        preferBuiltins: true,
      }),
      commonjs({
        namedExports: {
          'aexpr-ticking': [
            'aexprTicking',
            'checkTicking',
            'clearDefaultActiveExpressions',
          ],
        }
      }),
    ],
  });
  
  if (outFile) {
    await bundle.write({
      format: "cjs",
      file: outFile,
    });
  } else {
    const result = await bundle.generate({ format: 'cjs' });
    return result.output[0].code
  }
}

main();
