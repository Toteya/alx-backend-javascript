const chai = require('chai');
const expect = chai.expect;
const request = require('request');

describe('api', () => {
  it('get request should return correct output and status code', (done) => {
    url = 'http://localhost:7865';
    request.get(url, (error, response, body) => {
      if (error) {
        console.log(error);
        done();
      } else {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
      }
    })
  })
})