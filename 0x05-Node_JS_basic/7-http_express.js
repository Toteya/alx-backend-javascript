const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const fileName = process.argv[2];

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});
app.get('/students', (request, response) => {
  response.write('This is the list of our students');
  const consoleLogStdout = console.log;
  let output = '';
  console.log = (text) => {
    output += `\n${text}`;
  };
  countStudents(fileName)
    .then(() => {
      console.log = consoleLogStdout;
      response.write(output);
      response.end();
    })
    .catch((error) => {
      console.log = consoleLogStdout;
      response.write(`\n${error.message}`);
      response.end();
    });
});

app.listen(port);

module.exports = app;
