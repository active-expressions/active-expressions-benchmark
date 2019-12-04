'use strict';
import common from '../common.js';
import { rewritingTransformationImpact as config } from '../configs.js';

import rand from 'random-seed';
import quickSort from '../__deps/quicksort.js';

const bench = common.createBenchmark(main, config);
function main({ arraySize }) {
  const rng = rand.create('quickSort');
  const items = [];

  for (let i = 0; i < arraySize; i++) {
    items[i] = rng.random();
  }
  
  bench.start();
  quickSort(items);
  bench.end(1);
}