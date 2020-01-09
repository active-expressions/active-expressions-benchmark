'use strict';
import common from '../common.js';
import { aexprAndCallbackCount as config } from '../configs.js';
const bench = common.createBenchmark(main, config);

import rand from 'random-seed';
import { getRandomArray } from '../__deps/utils.js';
import quickSort from '../__deps/quicksort.js';

import { reset } from 'aexpr-source-transformation-propagation';

function main({ numAExpr, callbacksPerAExpr, arraySize }) {
  const items = getRandomArray(arraySize);

  const indexGenerator = rand.create('aexprIndexGenerator');
  for (var i = 0; i < numAExpr; i++) {
    const aexprIndex = indexGenerator.range(arraySize);
    const listener = aexpr(() => items[aexprIndex]);
    for (var j = 0; j < callbacksPerAExpr; j++) {
      listener.onChange(() => {});
    }
  }
  
  bench.start();
  quickSort(items);
  bench.end(1);

  reset();
}
