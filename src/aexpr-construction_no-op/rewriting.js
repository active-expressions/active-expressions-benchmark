'use strict';
import common from '../common.js';
import { aexprConstruction as config } from '../configs.js';

import { reset } from 'aexpr-source-transformation-propagation';

function main({ numAExpr }) {

  bench.start();
  for (var i = 0; i < numAExpr; i++) {
    aexpr(() => {});
  }
  bench.end();

  reset();
}

const bench = common.createBenchmark(main, config);