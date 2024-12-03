const express = require('express');

const port = 7865;
const app = express(`API available on localhost port ${port}`);

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});
app.get('/cart/:id', (request, response) => {
  const id = Number(request.params.id);
  // console.log(`TYPE: ${typeof(id)}, VALUE: ${id}`);
  if (Number.isNaN(id)) {
    response.status(404).end();
  } else {
    response.send(`Payment methods for cart: ${id}`);
  }
});

app.listen(port, () => console.log(`API available on localhost port ${port}`));

module.exports = app;
