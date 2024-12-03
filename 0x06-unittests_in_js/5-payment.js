const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const type = 'SUM';
  const result = Utils.calculateNumber(type, totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
