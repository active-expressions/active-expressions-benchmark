'use strict';
import common from '../common.js';
import rand from 'random-seed';
import createRectangle from '../__deps/fixture.js';
import { maintainAspectRatio as config } from '../configs.js';
import { aexprTicking, checkTicking, clearDefaultActiveExpressions } from 'aexpr-ticking';

const bench = common.createBenchmark(main, config);

function main({ numWidthChanges, targetAspectRatio }) {
  const rng = rand.create('aspectRatio');
  const randomWidths = [];
  const rect = createRectangle(20, 10);
  const callback = ratio => rect.height = rect.width / targetAspectRatio;
  
  for (let i = 0; i < numWidthChanges; i++) {
    randomWidths[i] = rng.random();
  }
  
  const exp = aexprTicking(() => rect.aspectRatio());
  exp.onChange(callback);
  
  bench.start();
  for (let i = 0; i < numWidthChanges; i++) {
    rect.width = randomWidths[i];
    checkTicking([exp]);
  }
  bench.end(numWidthChanges);

  clearDefaultActiveExpressions();
}
