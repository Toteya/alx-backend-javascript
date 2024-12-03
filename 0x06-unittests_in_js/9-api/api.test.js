const chai = require('chai');
const expect = chai.expect;
const request = require('request');
const { response } = require('./api');

describe('api', () => {
  it('test endpoint "/" correct output and status code', (done) => {
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
    });
  });
  it('test endpoint: "/cart/:id"', () => {
    id = 213; // Valid id
    url = `http://localhost:7865/cart/:${id}`
    request.get(url, (error, response, body) => {
      if (error) {
        console.log(error);
        done();
      } else {
        expect(response.statusCode).to.equal(200)
        expect(body).to.equal(`Payment methods for cart ${id}`);
      }
    })
    id = 'NotANumber'; // Invalid id
    url = `http://localhost:7865/cart/:${id}`
    request.get(url, (error, response, body) => {
      if (error) {
        console.log(error);
        expect(response.statusCode).to.equal(404);
        done();
      } else {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal(`Payment methods for cart ${id}`);
      }
    });
  });
});
