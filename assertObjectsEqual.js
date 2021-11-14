const eqObjects = require('./eqObjects');
const greenEmoji = String.fromCodePoint(9989);
const redEmoji = String.fromCodePoint(10060);
const inspect = require('util').inspect;

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = (actual, expected) => {
  // Implement me!
  if (eqObjects(actual, expected)) {
    console.log(`${greenEmoji}${greenEmoji}${greenEmoji} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`${redEmoji}${redEmoji}${redEmoji} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({firstName: 'Li'}, {firstName: 'Li'});
assertObjectsEqual({firstName: 'Li', lastName: 'Deng'}, {firstName: 'Li'});