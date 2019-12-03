'use strict';
import common from '../common.js';
import rand from 'random-seed';
import { maintainAspectRatio as config } from '../configs.js';
import createRectangle from '../__deps/fixture.js';

const bench = common.createBenchmark(main, config);

function main({ numWidthChanges, targetAspectRatio }) {
  const rng = rand.create('aspectRatio');
  const widths = [];
  const rect = createRectangle(20, 10);

  for (let i = 0; i < numWidthChanges; i++) {
    widths[i] = rng.random();
  }
  
  bench.start();
  for (let i = 0; i < numWidthChanges; i++) {
    rect.width = widths[i];
    rect.height = rect.width / targetAspectRatio;
  }
  bench.end(numWidthChanges);
}