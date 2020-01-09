'use strict';
import common from '../common.js';
import { maintainAspectRatio as config } from '../configs.js';
const bench = common.createBenchmark(main, config);

import createRectangle from '../__deps/fixture.js';
import { getRandomArray } from '../__deps/utils.js';

import aexprInterpretation from 'aexpr-interpretation';

function main({ numWidthChanges, targetAspectRatio }) {
  const widths = getRandomArray(numWidthChanges, 'aspectRatio');
  const rect = createRectangle(20, 10);
  
  const ae = aexprInterpretation(() => rect.aspectRatio(), { rect });
  ae.onChange(() => rect.height = rect.width / targetAspectRatio);
  
  bench.start();
  for (let i = 0; i < numWidthChanges; i++) {
    rect.width = widths[i];
  }
  bench.end(1);
}
