const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should log result to console', () => {
    const consoleSpy = sinon.spy(console, 'log');
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    
    const fake_result = 10;
    calculateNumberStub.returns(fake_result);
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledOnceWith('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledOnceWith(`The total is: ${fake_result}`));
    calculateNumberStub.restore();
    consoleSpy.restore();
  })
})
