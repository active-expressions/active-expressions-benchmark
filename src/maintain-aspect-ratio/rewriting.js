'use strict';
import common from '../common.js';
import { maintainAspectRatio as config } from '../configs.js';

import createRectangle from '../__deps/fixture.js';
import { getRandomArray } from '../__deps/utils.js';

import { reset } from 'aexpr-source-transformation-propagation';

function main({ numWidthChanges, targetAspectRatio }) {
  const widths = getRandomArray(numWidthChanges, 'aspectRatio');
  const rect = createRectangle(20, 10);
  
  const ae = aexpr(() => rect.aspectRatio());
  ae.onChange(() => rect.height = rect.width / targetAspectRatio);
  
  
  bench.start();
  for (var i = 0; i < numWidthChanges; i++) {
    rect.width = widths[i];
  }
  bench.end();
  
  reset();
}

const bench = common.createBenchmark(main, config);