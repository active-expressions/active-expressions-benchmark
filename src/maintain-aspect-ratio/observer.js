'use strict';
import BenchmarkRunner from '../../deps/benchmark-runner.js';

import createRectangle from '../../deps/fixture.js';
import { Subject, Observer } from '../../deps/observer.js';

class Rectangle extends Subject {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  get width() {
    return this._width;
  }

  set width(value) {
    const result = this._width = value;
    this.notify();
    return result;
  }

  get height() {
    return this._height;
  }

  set height(value) {
    const result = this._height = value;
    this.notify();
    return result;
  }

  area() {
    return this.width * this.height;
  }

  aspectRatio() {
    return this.width / this.height;
  }
}

class AutoLayout extends Observer {
  constructor(targetAspectRatio) {
    super();
    this.targetAspectRatio = targetAspectRatio;
  }

  update(subject) {
    if (subject.aspectRatio() !== this.targetAspectRatio) {
      subject.height = subject.width / this.targetAspectRatio;
    }
  }
}

function main({ numWidthChanges, targetAspectRatio }) {
  const rect = new Rectangle(20, 10);
  const autoLayout = new AutoLayout(targetAspectRatio);
  rect.attach(autoLayout);

  bench.start();
  for (let i = 1; i <= numWidthChanges; i++) {
    rect.width = i;
  }
  bench.stop();

  bench.assert(rect.width / rect.height === targetAspectRatio);
}

const bench = new BenchmarkRunner(main);