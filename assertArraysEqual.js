const eqArrays = require('./eqArrays');

const greenEmoji = String.fromCodePoint(9989);
const redEmoji = String.fromCodePoint(10060);

const assertArraysEqual = (actual, expected) => {
  // if (eqArrays(arr1, arr2)) {
  //   console.log(`${greenEmoji}${greenEmoji}${greenEmoji} Assertion Passed: ${arr1} === ${arr2}`);
  // } else {
  //   console.log(`${redEmoji}${redEmoji}${redEmoji} Assertion Failed: ${arr1} !== ${arr2}`);
  // }
  let expectedString = JSON.stringify(expected);
  let actualString = JSON.stringify(actual);
  if (expectedString === actualString) {
    console.log(`${greenEmoji}${greenEmoji}${greenEmoji} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${redEmoji}${redEmoji}${redEmoji} Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Export module
module.exports = assertArraysEqual;