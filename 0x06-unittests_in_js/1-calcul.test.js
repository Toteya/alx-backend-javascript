const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber test', () => {
  it('check addition', () => {
    assert.equal(calculateNumber('SUM', 2.6, 2.1), 5);
  });
  it('check subtraction', () => {
    assert.equal(calculateNumber('SUBTRACT', 2.6, 2.1), 1);
  });
  it('check division', () => {
    assert.equal(calculateNumber('DIVIDE', 3.8, 2.1), 2);
  });
  it('check division by zero', () => {
    assert.equal(calculateNumber('DIVIDE', 3.8, 0), 'Error');
  });
  it('check invalid operation type', () => {
    assert.equal(calculateNumber('NO_TYPE', 3.8, 1), null);
  });
});
