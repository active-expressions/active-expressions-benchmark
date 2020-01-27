'use strict';
import common from '../common.js';
import { aexprConstruction as config } from '../configs.js';

import createRectangle from '../__deps/fixture.js';
import { getArray } from '../__deps/utils.js';

import { aexprTicking, clearDefaultActiveExpressions } from 'aexpr-ticking';

function main({ numAExpr }) {
  const rects = getArray(numAExpr, () => createRectangle(20, 10));
  
  bench.start();
  for (let i = 0; i < numAExpr; i++) {
    const rect = rects[i];
    aexprTicking(() => rect.aspectRatio());
  }
  bench.end();

  clearDefaultActiveExpressions();
}

const bench = common.createBenchmark(main, config);