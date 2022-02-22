var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('returns the factorial of 5', () => {
      const num = 5;
      const expectedNum = 120;

      const result = Calculate.factorial(num);

      assert.equal(result, expectedNum);
    });
    it('returns the factorial of a number other than 5', () => {
      const num = 3;
      const expectedNum = 6;

      const result = Calculate.factorial(num);

      assert.equal(result, expectedNum);
    });
    it('returns 1 when you pass in 0', () => {
      const num = 0;
      const expectedNum = 1;

      const result = Calculate.factorial(num);

      assert.equal(result, expectedNum);
    });
  });
});