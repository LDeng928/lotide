var assertEqual = require('./assertEqual');

const eqArrays = (arr1, arr2) => {
    // If the length of the 2 arrays do not match, return false
    if(arr1.length !== arr2.length) {
      return false;
    } else {
      return arr1.every((val) => arr2.includes(val));
    }
    

  };

// Test with assertEqual
assertEqual(eqArrays([1, 3, 4], [1, 3, 4]), true); 
assertEqual(eqArrays(['1', 3, 4], [1, 3, 4]), true); 
assertEqual(eqArrays([7, 8, 9], [1, 3, 4]), true); 
assertEqual(eqArrays(['Lighthouse', 'Labs'], [1, 3, 4]), true); 