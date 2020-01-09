'use strict';
import common from '../common.js';
import { aexprConstruction as config } from '../configs.js';
const bench = common.createBenchmark(main, config);

import aexprInterpretation from 'aexpr-interpretation';

function main({ numAExpr }) {

  bench.start();
  for (let i = 0; i < numAExpr; i++) {
    aexprInterpretation(() => {}, {});
  }
  bench.end(1);
}