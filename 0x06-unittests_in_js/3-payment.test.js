const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should log result to console', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberSpy.calledOnceWith('SUM', 100, 20)).to.be.true;
    calculateNumberSpy.restore();
  })
})
