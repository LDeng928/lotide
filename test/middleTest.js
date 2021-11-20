const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// Test

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
// middle([1]);
// middle([1, 2, 3]); // => [2]
// middle([1, 2, 3, 4, 5]); // => [3]
// middle([1, 2, 3, 4]); // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]); // => [3, 4]