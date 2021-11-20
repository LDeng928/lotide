const assertEqual = require('./assertEqual');

const eqArrays = (arr1, arr2) => {
  // If the length of the 2 arrays do not match, return false
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    if (arr1.every((val) => arr2.includes(val))) {
      return true;
    }
  }
};

module.exports = eqArrays