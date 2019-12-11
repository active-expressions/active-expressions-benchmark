'use strict';
import common from '../common.js';
import { partiallyWrapped as config } from '../configs.js';
const bench = common.createBenchmark(main, config);

import createRectangle from '../__deps/fixture.js';

import aexprInterpretation from 'aexpr-interpretation';

function main({ totalRects, monitoredRects, repetitions }) {
  const rects = Array.from({length: totalRects}, () => createRectangle(20, 10));

  rects.forEach((rect, i) => {
    if (i < monitoredRects) {
      aexprInterpretation(() => rect.aspectRatio(), { rect });
    }
  })

  bench.start();
  
  for (let x = 0; x < repetitions; x++) {
    for (let i = 0; i < totalRects; i++) {
      const rect = rects[i];
      rect.height -= rect.width;
      rect.width += rect.height;
    }
  }

  bench.end(1);
}
