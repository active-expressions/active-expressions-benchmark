'use strict';
import BenchmarkRunner from '../../deps/benchmark-runner.js';

import createRectangle from '../../deps/fixture.js';

import { reset } from 'aexpr-source-transformation-propagation';

function main({ numWidthChanges, targetAspectRatio }) {
  const rect = createRectangle(20, 10);
  
  const ae = aexpr(() => rect.aspectRatio());
  ae.onChange(() => rect.height = rect.width / targetAspectRatio);
  
  bench.start();
  for (var i = 1; i <= numWidthChanges; i++) {
    rect.width = i;
  }
  bench.stop();
  
  bench.assert(rect.width / rect.height === targetAspectRatio);
  
  reset();
}

const bench = new BenchmarkRunner(main);