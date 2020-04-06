'use strict';
import BenchmarkRunner from '../../../deps/benchmark-runner.js';

import createRectangle from '../../../deps/fixture.js';

import { aexprTicking, clearDefaultActiveExpressions } from 'aexpr-ticking';

function main({ numAExpr }) {
  const rect = createRectangle(20, 10);
  
  bench.start();
  for (let i = 0; i < numAExpr; i++) {
    aexprTicking(() => rect.aspectRatio());
  }
  bench.stop();

  clearDefaultActiveExpressions();
}

const bench = new BenchmarkRunner(main);