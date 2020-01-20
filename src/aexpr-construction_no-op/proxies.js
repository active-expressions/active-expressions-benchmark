'use strict';
import common from '../common.js';
import { aexprConstruction as config } from '../configs.js';
const bench = common.createBenchmark(main, config);

// import { reset } from 'active-expression-proxies';

function main({ numAExpr }) {
  bench.start();
  for (var i = 0; i < numAExpr; i++) {
    aexpr(() => {});
  }
  bench.end(1);

  // reset();
}
