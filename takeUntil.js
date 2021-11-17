const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  // Copy the array parameter
  let result = [...array];

  // Loop through the copied array
  // Check if the callback function equals to true
  for (let item of result) {
    if (callback(item)) {
      let index = result.indexOf(item);
      let length = result.length - 1;
      result.splice(index, length);
    }
  }
  return result;
};

// Test
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);