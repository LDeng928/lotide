const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const without = (source, itemsToRemove) => {
  const newArr = [];

  // First check if the two arrays are the same
  if (eqArrays(source, itemsToRemove) === true) {
    console.log('The source array and the itemsToRemove array are the same.');
  } else {

    const onlyInFirst = (first, second) => {
      // Loop through an array to find elements that don't exist in another array
      for (let i = 0; i < first.length; i++) {
        if (second.indexOf(first[i]) === -1) {
          // Push the elements to the new array
          newArr.push(first[i]);
        }
      }
    };

    onlyInFirst(source, itemsToRemove);
    onlyInFirst(itemsToRemove, source);

    return console.log(newArr);
    
  }
};

// Testing
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

without([1, 2, 3], [1, 2, 3]);
without([1, 2, 3], [1]);