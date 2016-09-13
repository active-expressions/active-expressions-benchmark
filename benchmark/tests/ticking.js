import perfTest from '../perf_test.js';
import { times } from './test-utils';
import rand from 'random-seed';

import { createRectangle } from './fixture.js';

import { numberOfAExprsToCreate, mochaTimeout } from './params.js';

import { aexprTicking, checkTicking } from 'active-expressions';
/*
describe('AExpr Construction', function() {
  this.timeout(mochaTimeout);

  describe("Same Object", function() {

    let rect = createRectangle(20, 10);

    it("Ticking", perfTest({
      run() {
        for(let i = 0; i < numberOfAExprsToCreate; i++) {
          aexprTicking(() => rect.aspectRatio());
        }
      }
    }));
  });

  describe("Different Object", function() {
    let rects;

    it("Ticking", perfTest({
      setupRun() {
        rects = [];
        times(numberOfAExprsToCreate, () => rects.push(createRectangle(20, 10)));
      },
      run() {
        for(let i = 0; i < numberOfAExprsToCreate; i++) {
          let rect = rects[i];
          aexprTicking(() => rect.aspectRatio());
        }
      }
      // TODO: teardown: remove/reset old aexprs!
    }));
  });
});
*/

describe("Maintain Aspect Ratio", function() {
  this.timeout(mochaTimeout);

  let aspectRatioCount = 1000;
  const targetAspectRatio = 2;
  let aspectRatioRand = rand.create('aspectRatio');
  let randomWidths;
  let rect;
  let exp;
  it("Ticking", perfTest({
    setupRun() {
      rect = createRectangle(20, 10);
      exp = aexprTicking(() => rect.aspectRatio())
          .onChange(ratio => rect.height = rect.width / targetAspectRatio);
      randomWidths = [];
      for(let i = 0; i < aspectRatioCount; i++) {
        randomWidths.push(aspectRatioRand.random());
      }
    },
    run() {
      randomWidths.forEach(val => {
        rect.width = val;
        checkTicking([exp]);
        expect(rect.aspectRatio()).to.equal(targetAspectRatio);
      });
    }
  }));
});
