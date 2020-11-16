import terminalLink from 'terminal-link';

import { parseFilters, collectFilteredBenchmarks } from './shared/filters.mjs'
import { srcDir } from './shared/constants.mjs';

export let command = 'list [filters..]';

export let describe = 'List available benchmarks';

export let builder = yargs => {
  yargs
    .positional('filters', {
      describe: 'filter available benchmarks (e.g. `rewriting interpretation.maintain-aspect-ratio` will select only benchmarks including either `rewriting` or both `interpretation` and `maintain-aspect-ratio`',
      coerce: parseFilters,
    })
    .options({
      'p': {
        alias: 'path',
        describe: 'path to query for available benchmarks',
        type: 'string',
        default: srcDir,
      }
    })
}

export let handler = async function list({path, filters, verbose}) {
  if (verbose >= 2) console.log('== list ==');

  const benchmarks = await collectFilteredBenchmarks(path, filters);
  if (verbose >= 2) console.log('benchmarks collected');

  benchmarks.forEach(({ path, tags }) => {
    const name = tags.join('.');
    const url = `file://${path}`;
    console.log(terminalLink(name, url));
  })
}