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
    console.log(newArr);
    break;
  case oneLength:
    console.log(newArr);
    break;
  case evenLength:
    newArr.push(arr[length / 2 - 1], arr[length / 2]);
    console.log(newArr);
    break;
  case oddLength:
    newArr.push(arr[number]);
    console.log(newArr);
    break;
  default:
    console.log(arr);
  }
};

middle([]);
middle([1]);
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

