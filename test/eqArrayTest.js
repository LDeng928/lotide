const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// Test with assertEqual
assertEqual(eqArrays([1, 3, 4], [1, 3, 4]), true);
assertEqual(eqArrays(['1', 3, 4], [1, 3, 4]), true);
assertEqual(eqArrays([7, 8, 9], [1, 3, 4]), true);
assertEqual(eqArrays(['Lighthouse', 'Labs'], [1, 3, 4]), true);