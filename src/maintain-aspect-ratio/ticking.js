'use strict';
import BenchmarkRunner from '../../deps/benchmark-runner.js';

import createRectangle from '../../deps/fixture.js';

import { aexprTicking, checkTicking, clearDefaultActiveExpressions } from 'aexpr-ticking';

function main({ numWidthChanges, targetAspectRatio }) {
  const rect = createRectangle(20, 10);
  
  const ae = aexprTicking(() => rect.aspectRatio());
  ae.onChange(() => rect.height = rect.width / targetAspectRatio);
  
  bench.start();
  for (let i = 1; i <= numWidthChanges; i++) {
    rect.width = i;
    checkTicking([ae]);
  }
  bench.stop();

  bench.assert(rect.aspectRatio() === targetAspectRatio);

  clearDefaultActiveExpressions();
}

const bench = new BenchmarkRunner(main);