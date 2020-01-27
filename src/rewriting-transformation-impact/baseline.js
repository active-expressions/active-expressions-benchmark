'use strict';
import common from '../common.js';
import { rewritingTransformationImpact as config } from '../configs.js';

import quickSort from '../__deps/quicksort.js';
import { getRandomArray } from '../__deps/utils.js';

function main({ arraySize }) {
  const items = getRandomArray(arraySize, 'quickSort');

  bench.start();
  quickSort(items);
  bench.end(1);
}

const bench = common.createBenchmark(main, config);