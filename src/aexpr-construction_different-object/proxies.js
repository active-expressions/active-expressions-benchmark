'use strict';
import common from '../common.js';
import { aexprConstruction as config } from '../configs.js';
const bench = common.createBenchmark(main, config);

import createRectangle from '../__deps/fixture.js';
import { getArray } from '../__deps/utils.js';

// import { reset } from 'active-expression-proxies';

function main({ numAExpr }) {
  const rects = getArray(numAExpr, () => createRectangle(20, 10));

  bench.start();
  for (var i = 0; i < numAExpr; i++) {
    const rect = rects[i];
    aexpr(() => rect.aspectRatio());
  }
  bench.end(1);

  // reset();
}
