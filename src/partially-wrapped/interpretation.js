'use strict';
import BenchmarkRunner from '../../deps/benchmark-runner.js';

import createRectangle from '../../deps/fixture.js';

import aexprInterpretation from 'aexpr-interpretation';

function main({ totalRects, monitoredRects, repetitions }) {
  const rects = Array.from({ length: totalRects }, () => {
    return createRectangle(20, 10)
  });

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
  bench.stop();
}

const bench = new BenchmarkRunner(main);