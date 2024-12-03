const chai = require('chai');
const expect = chai.expect;
const request = require('request');

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
  it('test endpoint: "/cart/:id with valid id"', (done) => {
    let id = 213; // Valid id
    let url = `http://localhost:7865/cart/${id}`
    request.get(url, (error, response, body) => {
      if (error) {
        console.log(error);
        done();
      } else {
        exp_output = `Payment methods for cart ${id}`; 
        expect(response.statusCode).to.equal(200)
        expect(body).to.equal(exp_output);
        done();
      }
    })
  });
  it('test endpoint: "/cart/:id" with invalid id', (done) => {
    id = 'NaN'; // Invalid id
    url = `http://localhost:7865/cart/${id}`
    request.get(url, (error, response, body) => {
      if (error) {
        console.log(error);
        done();
      } else {
        expect(response.statusCode).to.equal(404);
        expect(!body).to.be.true;
        done();
      }
    });
  });
});
