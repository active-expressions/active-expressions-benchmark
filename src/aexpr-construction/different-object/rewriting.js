'use strict';
import BenchmarkRunner from '../../../deps/benchmark-runner.js';

import createRectangle from '../../../deps/fixture.js';
import { getArray } from '../../../deps/utils.js';

import { reset } from 'aexpr-source-transformation-propagation';

function main({ numAExpr }) {
  const rects = getArray(numAExpr, () => createRectangle(20, 10));
  
  bench.start();
  for (var i = 0; i < numAExpr; i++) {
    const rect = rects[i];
    aexpr(() => rect.aspectRatio());
  }
  bench.stop();

  reset();
}

const bench = new BenchmarkRunner(main);