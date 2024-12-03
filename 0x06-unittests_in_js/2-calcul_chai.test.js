const calculateNumber = require('./2-calcul_chai');
const chai = require('chai');
const expect = chai.expect;

describe('calculateNumber test', () => {
  it('check addition', () => {
    expect(calculateNumber('SUM', 2.6, 2.1)).to.equal(5);
  });
  it('check subtraction', () => {
    expect(calculateNumber('SUBTRACT', 2.6, 2.1)).to.equal(1);
  });
  it('check division', () => {
    expect(calculateNumber('DIVIDE', 3.8, 2.1)).to.equal(2);
  });
  it('check division by zero', () => {
    expect(calculateNumber('DIVIDE', 3.8, 0)).to.equal('Error');
  });
  it('check invalid operation type', () => {
    expect(calculateNumber('NO_TYPE', 3.8, 1)).to.equal(null);
  });
});
