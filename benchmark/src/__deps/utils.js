import rand from 'random-seed';

export function times(count, callbackFn) {
  for (let i = 0; i < count; i++) callbackFn(i);
}

export function getRandomArray(length, seed = 'seed') {
  const rng = rand.create(seed);
  return getArray(length, () => rng.random());
}

export function getArray(length, mapFn) {
  return Array.from({ length }, (x, i) => mapFn(i));
}