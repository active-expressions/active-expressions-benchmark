'use strict';
import BenchmarkRunner from '../../deps/benchmark-runner.js';

import rand from 'random-seed';
import { getRandomArray } from '../../deps/utils.js';
import quickSort from '../../deps/quicksort.js';

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
  bench.stop();

  items.reduce((previous, current) => {
    bench.assert(previous <= current);
    return current;
  })

  reset();
}

const bench = new BenchmarkRunner(main);