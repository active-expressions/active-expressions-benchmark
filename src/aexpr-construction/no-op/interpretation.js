'use strict';
import BenchmarkRunner from '../../../deps/benchmark-runner.js';

import aexprInterpretation from 'aexpr-interpretation';

function main({ numAExpr }) {
  bench.start();
  for (let i = 0; i < numAExpr; i++) {
    aexprInterpretation(() => {}, {});
  }
  bench.stop();
}

const bench = new BenchmarkRunner(main);