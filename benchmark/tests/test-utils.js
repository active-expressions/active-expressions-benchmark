import rand from 'random-seed';

export function times(max, cb) {
    let i;
    for(i = 0; i < max; i++) {
        cb(i);
    }
}

export function getRandomArrayOfLength(l, seed = 'seed') {
    let quickSortRand = rand.create(seed);

    let arr = [];
    let j;
    for(j = 0; j < l; j++) {
        arr.push(quickSortRand.random());
    }

    return arr;
}
