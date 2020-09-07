import { depsDir } from './cmds/shared/constants.mjs';
import pathLib from 'path';

export default [
  'yargs',
  'is-ci',
  'random-seed',
  'aexpr-ticking',
  'aexpr-source-transformation-propagation',
  'aexpr-interpretation',
  pathLib.resolve(depsDir, './benchmark-runner.js'),
  pathLib.resolve(depsDir, './utils.js'),
]