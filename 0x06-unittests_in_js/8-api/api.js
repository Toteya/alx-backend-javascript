const express = require('express');

const port = 7865;
const app = express(`API available on localhost port ${port}`);

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

app.listen(port, () => console.log(`API available on localhost port ${port}`));

module.exports = app;
