import fs from 'fs-extra';

import { buildDir, resultsDir } from './shared/constants.mjs';

export let command = 'cleanup';

export let describe = 'Remove created artifacts';

export let builder = yargs => {

}

export let handler = async function (argv) {
  fs.emptyDir(buildDir);
  fs.emptyDir(resultsDir);
}