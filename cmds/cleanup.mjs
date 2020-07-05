import fs from 'fs-extra';
import pathLib from 'path';
import { fileURLToPath } from 'url';

const buildDir = pathLib.resolve('./build');
const resultsDir = pathLib.resolve('./results');

export let command = 'cleanup';

export let describe = 'Remove created artifacts';

export let builder = yargs => {

}

export let handler = async function (argv) {
  fs.emptyDir(buildDir);
  fs.emptyDir(resultsDir);
}