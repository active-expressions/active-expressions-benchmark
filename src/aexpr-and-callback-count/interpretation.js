'use strict';
import common from '../common.js';
import { aexprAndCallbackCount as config } from '../configs.js';

import rand from 'random-seed';
import { getRandomArray } from '../__deps/utils.js';
import quickSort from '../__deps/quicksort.js';

import aexprInterpretation from 'aexpr-interpretation';

function main({ numAExpr, callbacksPerAExpr, arraySize }) {
  const items = getRandomArray(arraySize);

  const indexGenerator = rand.create('aexprIndexGenerator');
  for (let i = 0; i < numAExpr; i++) {
    const aexprIndex = indexGenerator.range(arraySize);
    const listener = aexprInterpretation(() => items[aexprIndex], locals);
    for (let j = 0; j < callbacksPerAExpr; j++) {
      listener.onChange(() => {});
    }
  }
  
  bench.start();
  quickSort(items);
  bench.end();
}

const bench = common.createBenchmark(main, config);