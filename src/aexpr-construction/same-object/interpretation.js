'use strict';
import BenchmarkRunner from '../../../deps/benchmark-runner.js';

import createRectangle from '../../../deps/fixture.js';

import aexprInterpretation from 'aexpr-interpretation';

function main({ numAExpr }) {
  const rect = createRectangle(20, 10);
  
  bench.start();
  for (let i = 0; i < numAExpr; i++) {
    aexprInterpretation(() => rect.aspectRatio(), { rect });
  }
  bench.stop();
}

const bench = new BenchmarkRunner(main);