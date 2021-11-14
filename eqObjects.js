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

console.log(eqArrays([1, 2], [1, 2, 3]));

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = (object1, object2) => {
 let keysLength1 = Object.keys(object1).length;
 let keysLength2 = Object.keys(object2).length;

 if (keysLength1 !== keysLength2) {
   return false;
 }

 for (const key of Object.keys(object1)) {
   if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
     if(eqArrays(object1[key], object2[key])) {
       return true
     } else if (object1[key] === object2[key]) {
      return true;
    } else {
      return false;
    }         
   } 
 }

 return true;
};

// Test with only primitive values
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba), true)

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), true);

// Test with array values
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2), true);
