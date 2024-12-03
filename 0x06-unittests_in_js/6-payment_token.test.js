const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromApi = require('./6-payment_token');

describe('getPaymentTokenFromApi()', () => {
  it('should return a resolved promise', (done) => {
    const success = true;
    const exp_output = {data: 'Successful response from the API'}
    getPaymentTokenFromApi(success)
      .then((result) => {
        expect(result).to.deep.equal(exp_output);
        done();
      })
  });
});
