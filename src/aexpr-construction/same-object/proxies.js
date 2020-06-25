'use strict';
import BenchmarkRunner from '../../../deps/benchmark-runner.js';

import createRectangle from '../../../deps/fixture.js';

// import { reset } from 'active-expression-proxies';

function main({ numAExpr }) {
  const rect = createRectangle(20, 10);

  bench.start();
  for (var i = 0; i < numAExpr; i++) {
    aexpr(() => rect.aspectRatio());
  }
  bench.stop();

  // reset();
}

const bench = new BenchmarkRunner(main);