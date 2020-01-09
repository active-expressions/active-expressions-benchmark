import isCI from 'is-ci';

export let maintainAspectRatio = {
  numWidthChanges: isCI
                    ? [1e4]
                    : [1e5],
  targetAspectRatio: [2],
}

export let aexprConstruction = {
  numAExpr: isCI
              ? [1e2]
              : [1e3],
}

export let rewritingTransformationImpact = {
  arraySize: [1e4],
}

export let aexprAndCallbackCount = {
  numAExpr: isCI
              ? [0, 20, 40, 60, 80, 100]
              : [0, 1, 10, 20, 30, 40, 50, 100, 150, 200, 250, 300],
  callbacksPerAExpr: [0, 1, 10],
  arraySize: [100, 1000],
}

export let partiallyWrapped = {
  monitoredRects: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  totalRects: [10, 100],
  repetitions: [10000],
}