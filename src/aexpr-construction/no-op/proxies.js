'use strict';
import BenchmarkRunner from '../../../deps/benchmark-runner.js';

// import { reset } from 'active-expression-proxies';

function main({ numAExpr }) {
  bench.start();
  for (var i = 0; i < numAExpr; i++) {
    aexpr(() => {});
  }
  bench.stop();

  // reset();
}

const bench = new BenchmarkRunner(main);