'use strict';
import BenchmarkRunner from '../../deps/benchmark-runner.js';

import createRectangle from '../../deps/fixture.js';

function main({ numWidthChanges, targetAspectRatio }) {
  const rect = createRectangle(20, 10);

  bench.start();
  for (let i = 1; i <= numWidthChanges; i++) {
    rect.width = i;
    if (rect.aspectRatio() !== targetAspectRatio) {
      rect.height = rect.width / targetAspectRatio;
    }
  }
  bench.stop();

  bench.assert(rect.width / rect.height === targetAspectRatio);
}

const bench = new BenchmarkRunner(main);