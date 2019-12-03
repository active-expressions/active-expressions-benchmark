'use strict';
import common from '../common.js';
import createRectangle from '../__deps/fixture.js';
import { aexprConstruction as config } from '../configs.js';
import { aexprTicking, clearDefaultActiveExpressions } from 'aexpr-ticking';

const bench = common.createBenchmark(main, config);

function main({ numAExpr }) {
  const rect = createRectangle(20, 10);
  
  bench.start();
  for (let i = 0; i < numAExpr; i++) {
    aexprTicking(() => rect.aspectRatio());
  }
  bench.end(numAExpr);

  clearDefaultActiveExpressions();
}
