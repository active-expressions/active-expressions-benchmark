'use strict';
import common from '../common.js';
import { aexprConstruction as config } from '../configs.js';
const bench = common.createBenchmark(main, config);

import createRectangle from '../__deps/fixture.js';

import { aexprTicking, clearDefaultActiveExpressions } from 'aexpr-ticking';

function main({ numAExpr }) {
  const rect = createRectangle(20, 10);
  
  bench.start();
  for (let i = 0; i < numAExpr; i++) {
    aexprTicking(() => rect.aspectRatio());
  }
  bench.end(1);

  clearDefaultActiveExpressions();
}
