'use strict';
import common from '../common.js';
import { aexprConstruction as config } from '../configs.js';
const bench = common.createBenchmark(main, config);

import createRectangle from '../__deps/fixture.js';

import { reset } from 'aexpr-source-transformation-propagation';

function main({ numAExpr }) {
  const rect = createRectangle(20, 10);
  
  bench.start();
  for (var i = 0; i < numAExpr; i++) {
    aexpr(() => rect.aspectRatio());
  }
  bench.end(1);

  reset();
}