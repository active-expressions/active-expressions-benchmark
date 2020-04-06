'use strict';
import BenchmarkRunner from '../../deps/benchmark-runner.js';

import quickSort from '../../deps/quicksort.js';
import { getRandomArray } from '../../deps/utils.js';

function main({ arraySize }) {
  const items = getRandomArray(arraySize, 'quickSort');

  bench.start();
  quickSort(items);
  bench.stop();

  items.reduce((previous, current) => {
    bench.assert(previous <= current);
    return current;
  })
}

const bench = new BenchmarkRunner(main);