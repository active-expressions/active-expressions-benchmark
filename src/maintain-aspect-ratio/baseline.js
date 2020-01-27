'use strict';
import common from '../common.js';
import { maintainAspectRatio as config } from '../configs.js';

import createRectangle from '../__deps/fixture.js';
import { getRandomArray } from '../__deps/utils.js';

function main({ numWidthChanges, targetAspectRatio }) {
  const widths = getRandomArray(numWidthChanges, 'aspectRatio');
  const rect = createRectangle(20, 10);

  bench.start();
  for (let i = 0; i < numWidthChanges; i++) {
    rect.width = widths[i];
    rect.height = rect.width / targetAspectRatio;
  }
  bench.end();
}

const bench = common.createBenchmark(main, config);