import rand from 'random-seed';

let seeds = {};

function getRNG(seed, reset) {
  if (!seed) {
    seed = 'seed';
    reset = true;
  }
  if (reset || !seeds[seed]) {
    seeds[seed] = rand.create(seed);
  }
  return seeds[seed];
}

export function times(count, callbackFn) {
  for (let i = 0; i < count; i++) callbackFn(i);
}

export function getRandomArray(length, seed) {
  const rng = getRNG(seed);
  return getArray(length, () => rng.random());
}

export function getArray(length, mapFn) {
  return Array.from({ length }, (x, i) => mapFn(i));
}