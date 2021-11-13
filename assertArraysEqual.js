const eqArrays = require('./eqArrays');

const greenEmoji = String.fromCodePoint(9989);
const redEmoji = String.fromCodePoint(10060);

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`${greenEmoji}${greenEmoji}${greenEmoji} Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`${redEmoji}${redEmoji}${redEmoji} Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// Test with assertArraysEqual function
// assertArraysEqual([1, 3, 4], [2, 3, 4]);
// assertArraysEqual([1, 3, 4], [1, 3, 4]);
// assertArraysEqual([1, 3, 4], ['1', 3, 4]);

// Export module
module.exports = assertArraysEqual;