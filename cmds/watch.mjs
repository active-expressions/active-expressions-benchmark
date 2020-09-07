import pathLib from 'path';
import terminalLink from 'terminal-link';

import { parseFilters, collectFilteredBenchmarks } from './shared/filters.mjs';
import { srcDir } from './shared/constants.mjs';

export let command = 'watch [filters..]';

export let describe = 'Watch benchmark files for changes';

export let builder = yargs => {
  yargs
    .positional('filters', {
      describe: 'filter available benchmarks (e.g. `rewriting interpretation.maintain-aspect-ratio` will select only benchmarks including either `rewriting` or both `interpretation` and `maintain-aspect-ratio`',
      coerce: parseFilters,
    })
}

export let handler = async function watch({path, filters, verbose}) {
  if (verbose >= 2) console.log('== watch ==');

  benchmarks.forEach(({ path, tags }) => {
    const name = tags.join('.');
    const url = `file://${path}`;
    console.log(terminalLink(name, url));
  })
}