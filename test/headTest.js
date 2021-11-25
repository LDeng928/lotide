/* Use Mocha for testing */
const assert = require('chai').assert;
const head = require('../head');
const testArrayOne = [1, 2, 3];
const testArrayTwo = [5];
const testArrayThree = ['Hello', 'Lighthosue', 'Labs'];


describe('#head', () => {
  it('should return 1 for [1, 2, 3]', () => {
    assert.strictEqual(head(testArrayOne), 1);
  });

  it('should return 5 for [5]', () => {
    assert.strictEqual(head(testArrayTwo), 5);
  });

  it('should return Hello for ["Hello", "Lighthosue", "Labs"]', () => {
    assert.strictEqual(head(testArrayThree), 'Hello')
  });


});