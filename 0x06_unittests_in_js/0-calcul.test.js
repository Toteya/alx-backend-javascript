const assert = require('assert');
const calculateNumber = require('./0-calcul.js')

describe('calcul test', () => {
  it('checks equality', () => {
    assert.equal(calculateNumber(2.3, 2.1), 4);
  });
});
