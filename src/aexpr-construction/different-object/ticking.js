'use strict';
import BenchmarkRunner from '../../../deps/benchmark-runner.js';

import createRectangle from '../../../deps/fixture.js';
import { getArray } from '../../../deps/utils.js';

import { aexprTicking, clearDefaultActiveExpressions } from 'aexpr-ticking';

function main({ numAExpr }) {
  const rects = getArray(numAExpr, () => createRectangle(20, 10));
  
  bench.start();
  for (let i = 0; i < numAExpr; i++) {
    const rect = rects[i];
    aexprTicking(() => rect.aspectRatio());
  }
  bench.stop();

  clearDefaultActiveExpressions();
}

const bench = new BenchmarkRunner(main);