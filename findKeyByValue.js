const assertEqual = require('./assertEqual');

const findKeyByValue = (obj, value) => {
  // Step 1: find all the current keys in the given object
  const keysArray = Object.keys(obj);

  // Loop through the keys found in keysArray to find if there is a match
  for (const key of keysArray) {
    if (obj[key] === value) {
      return key;  // Needs to return the key in obj
    }
  }
};

// Test
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");
