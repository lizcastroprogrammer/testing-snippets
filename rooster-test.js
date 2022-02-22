const assert = require('assert');
const Rooster = require('../index');

describe('string', () => {
  describe('string', () => {
    it('returns a rooster call', () => {
      const expectedCall = 'cock-a-doodle-doo!';
      const roosterCall = Rooster.announceDawn();

      assert.strictEqual(roosterCall, expectedCall);
    })
  describe('string', () => {
    it('returns its argument as a string', () => {
      const expected = '11';
      const timeAtDawn = Rooster.timeAtDawn(11);

      assert.strictEqual(timeAtDawn, expected);
    })
    it('throws an error if passed a number less than 0', () => {
      const hour = -2;

      assert.throws(
        () => {
        Rooster.timeAtDawn(hour);
      },
      RangeError
      );
    });
    it('throws an error if passed a number greater than 23', () => {
      const hour = 27;

      assert.throws(
        () => {
        Rooster.timeAtDawn(hour);
      },
      RangeError
      );
    });
  });
  });
});