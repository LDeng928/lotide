// const assertArraysEqual = require('./assertArraysEqual');
// const eqArrays = require('./eqArrays');

const middle = (arr) => {
  const newArr = []; // new array to store the middle elements of an array
  const length = arr.length;
  const zeroLength = length === 0;// assign boolean value to zeroLength
  const oneLength = length === 1; // assign boolean value to oneLength
  const oddLength = length % 2 !== 0; // assign boolean value to oddLength
  const evenLength = length % 2 === 0; // assign boolean value to evenLength

  // Truncate the odd length number
  let number = Math.trunc(length / 2);

  switch (true) {
  case zeroLength:
    return newArr;
    break;
  case oneLength:
    return newArr;
    break;
  case evenLength:
    newArr.push(arr[length / 2 - 1], arr[length / 2]);
    return newArr;
    break;
  case oddLength:
    newArr.push(arr[number]);
    return newArr;
    break;
  default:
    return arr;
  }
};

module.exports = middle;

