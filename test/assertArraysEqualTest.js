const assertArraysEqual = require('../assertArraysEqual');

// Test with assertArraysEqual function
assertArraysEqual([1, 3, 4], [2, 3, 4]);
assertArraysEqual([1, 3, 4], [1, 3, 4]);
assertArraysEqual([1, 3, 4], ['1', 3, 4]);