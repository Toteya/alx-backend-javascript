const chai = require('chai');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./5-payment');
const sinon = require('sinon');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });
  afterEach(() => {
    consoleSpy.restore();
  });

  it('correct output is logged to console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnceWith(`The total is: ${120}`)).to.be.true;
  });
  it('correct output is logged to console', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledOnceWith(`The total is: ${20}`)).to.be.true;
  });
});
