'use strict';
import BenchmarkRunner from '../../deps/benchmark-runner.js';

import createRectangle from '../../deps/fixture.js';

import aexprInterpretation from 'aexpr-interpretation';

function main({ numWidthChanges, targetAspectRatio }) {
  const rect = createRectangle(20, 10);
  
  const ae = aexprInterpretation(() => rect.width / rect.height, { rect });
  ae.onChange(() => rect.height = rect.width / targetAspectRatio); //TODO: [#BUG] Interpreter does not step into rect.aspectRatio()
  
  bench.start();
  for (let i = 1; i <= numWidthChanges; i++) {
    rect.width = i;
  }
  bench.stop();

  bench.assert(rect.aspectRatio() === targetAspectRatio);
}

const bench = new BenchmarkRunner(main);