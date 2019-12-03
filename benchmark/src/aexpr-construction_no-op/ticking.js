'use strict';
import common from '../common.js';
import { aexprConstruction as config } from '../configs.js';
import { aexprTicking, clearDefaultActiveExpressions } from 'aexpr-ticking';

const bench = common.createBenchmark(main, config);

function main({ numAExpr }) {

  bench.start();
  for (let i = 0; i < numAExpr; i++) {
    aexprTicking(() => {});
  }
  bench.end(1);

  clearDefaultActiveExpressions();
}