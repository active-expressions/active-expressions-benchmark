'use strict';
import * as common from '../common.js';
import createRectangle from '../__deps/fixture.js';
import { aexprConstruction as config } from '../configs.js';
import aexprInterpretation from 'aexpr-interpretation';

const bench = common.createBenchmark(main, config);

function main({ numAExpr }) {
  const rect = createRectangle(20, 10);
  
  bench.start();
  for (let i = 0; i < numAExpr; i++) {
    aexprInterpretation(() => rect.aspectRatio(), {rect});
  }
  bench.end(numAExpr);
}