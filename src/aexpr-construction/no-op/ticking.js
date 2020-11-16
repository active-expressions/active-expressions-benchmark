'use strict';
import BenchmarkRunner from '../../../deps/benchmark-runner.js';

import { aexprTicking, clearDefaultActiveExpressions } from 'aexpr-ticking';

function main({ numAExpr }) {

  bench.start();
  for (let i = 0; i < numAExpr; i++) {
    aexprTicking(() => {});
  }
  bench.stop();

  clearDefaultActiveExpressions();
}

const bench = new BenchmarkRunner(main);