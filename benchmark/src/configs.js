import isCI from 'is-ci';

export let maintainAspectRatio = {
  numWidthChanges: [isCI ? 1e4 : 1e5],
  targetAspectRatio: [2],
}

export let aexprConstruction = {
  numAExpr: [isCI ? 1e2 : 1e3]
}