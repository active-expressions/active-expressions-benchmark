import pathLib from 'path';

export let srcDir = pathLib.resolve('./src');
export let buildDir = pathLib.resolve('./build');
export let depsDir = pathLib.resolve('./deps');
export let resultsDir = pathLib.resolve('./results');

export let configsPath = pathLib.resolve('./configs.mjs');
export let babelOptionsPath = pathLib.resolve('./babelOptions.mjs');
export let excludeFromBundlePath = pathLib.resolve('./excludeFromBundle.mjs');