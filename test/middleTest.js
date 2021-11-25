const assert = require('chai').assert;
const middle = require('../middle');

// Test with Mocha and Chai

const testArrayOne = [1];
const testArrayTwo = [1, 2, 3];
const testArrayThree = [1, 2, 3, 4];
const testArrayFour = [1, 2, 3, 4, 5, 6];


describe('#middle', () => {
  it('should return an empty array for [1]', () => {
    assert.deepEqual(middle(testArrayOne), []);
  });

  it('should return [2] for [1, 2, 3]', () => {
    assert.deepEqual(middle(testArrayTwo), [2]);
  });

  it('should return [2, 3] for [1, 2, 3, 4]', () => {
    assert.deepEqual(middle(testArrayThree), [2, 3]);
  });

  it('should return [3, 4] for [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle(testArrayFour), [3, 4]);
  });
});