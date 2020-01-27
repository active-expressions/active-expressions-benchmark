'use strict';
import common from '../common.js';
import { aexprConstruction as config } from '../configs.js';

import createRectangle from '../__deps/fixture.js';

import aexprInterpretation from 'aexpr-interpretation';

function main({ numAExpr }) {
  const rect = createRectangle(20, 10);
  
  bench.start();
  for (let i = 0; i < numAExpr; i++) {
    aexprInterpretation(() => rect.aspectRatio(), { rect });
  }
  bench.end();
}

const bench = common.createBenchmark(main, config);
