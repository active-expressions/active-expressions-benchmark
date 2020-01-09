'use strict';
import common from '../common.js';
import { aexprConstruction as config } from '../configs.js';
const bench = common.createBenchmark(main, config);

import { aexprTicking, clearDefaultActiveExpressions } from 'aexpr-ticking';

function main({ numAExpr }) {

  bench.start();
  for (let i = 0; i < numAExpr; i++) {
    aexprTicking(() => {});
  }
  bench.end(1);

  clearDefaultActiveExpressions();
}