'use strict';
import common from '../common.js';
import { maintainAspectRatio as config } from '../configs.js';
const bench = common.createBenchmark(main, config);

import rand from 'random-seed';
import createRectangle from '../__deps/fixture.js';
import aexprInterpretation from 'aexpr-interpretation';


function main({ numWidthChanges, targetAspectRatio }) {
  const rng = rand.create('aspectRatio');
  const randomWidths = [];
  const rect = createRectangle(20, 10);
  const callback = ratio => rect.height = rect.width / targetAspectRatio;
  
  for (var i = 0; i < numWidthChanges; i++) {
    randomWidths[i] = rng.random();
  }
  
  const exp = aexprInterpretation(() => rect.aspectRatio(), { rect });
  exp.onChange(callback);
  
  bench.start();
  for (var i = 0; i < numWidthChanges; i++) {
    rect.width = randomWidths[i];
  }
  bench.end(numWidthChanges);
}
