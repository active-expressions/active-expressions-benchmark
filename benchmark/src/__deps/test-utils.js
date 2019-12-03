const rand = require('random-seed');

exports.times = function times(max, cb) {
    let i;
    for(i = 0; i < max; i++) {
        cb(i);
    }
}

exports.getRandomArrayOfLength = function getRandomArrayOfLength(l, seed = 'seed') {
    let quickSortRand = rand.create(seed);

    let arr = [];
    let j;
    for(j = 0; j < l; j++) {
        arr.push(quickSortRand.random());
    }

    return arr;
}
