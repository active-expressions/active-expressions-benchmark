"use strict";
import rand from 'random-seed';
import createRectangle from './deps/fixture.js';
import quickSort from './deps/quicksort.js';
import Benchmark from 'benchmark';

let suite = new Benchmark.Suite('Baseline');

suite
.add('Maintain Aspect Ratio', {
  onStart({target: bench}) {
    bench.numWidthChanges = 1e5;
    bench.targetAspectRatio = 2;
    bench.rng = rand.create('aspectRatio');
    bench.createRectangle = createRectangle;
  },
  setup() {
    const widths = [];
    const rect = this.createRectangle(20, 10);

    for (let i = 0; i < this.numWidthChanges; i++) {
      widths[i] = this.rng.random();
    }
  },
  fn() {
    for (let i = 0; i < this.numWidthChanges; i++) {
      rect.width = widths[i];
      rect.height = rect.width / this.targetAspectRatio;
    }
  },
  minSamples: 100,
})
.add('Rewriting Transformation Impact', {
  onStart({target: bench}) {
    bench.n = 1e4;
    bench.rng = rand.create('quickSort');
    bench.quickSort = quickSort;
  },
  setup() {
    const items = [];
    for (let i = 0; i < this.n; i++) {
      items[i] = this.rng.random();
    }
  },
  fn() {
    this.quickSort(items);
  },
  minSamples: 100,
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  this.forEach((bench) => {
    console.log(bench);
  });
})
.run({ 'async': true });