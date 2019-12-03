const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const rollup = require('rollup');
const fs = require('fs-extra');
const path = require('path');

const srcDir = './src';
const destDir = './build';

function main() {
  compileAll();
}

async function compileAll() {
  fs.readdir(srcDir, { withFileTypes: true }, (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.isDirectory()) return;
      if (file.name.startsWith('__')) return;
      const dir = file.name;
      fs.emptydir(path.join(srcDir, dir), err => {
        if (err) return console.error(err);
        fs.readdir(path.join(srcDir, dir), (err, files) => {
          if (err) return console.error(err);
          files.forEach(file => {
            const fileName = file.name;
            compile(path.join(srcDir, dir, fileName), path.join(destDir, dir, fileName));
          })
        })
      })
    })
  })
}

async function compile(from, to) {
  try {
    const bundle = await rollup.rollup({
      input: from,
      external: [
        '../common.js', //can not be rollup-ed; depends on require.main
        'is-ci',
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
  
    bundle.write({
      format: "cjs",
      file: to,
      name: to,
    });
  } catch (e) {
    console.error(e); //`Failed to compile ${to}`, 
  }
}

main();
