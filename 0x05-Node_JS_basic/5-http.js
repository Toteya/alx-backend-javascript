const http = require('http');
const countStudents = require('./3-read_file_async');

const fileName = process.argv[2];
const app = http.createServer((request, response) => {
  switch (request.url) {
    case '/': {
      response.write('Hello Holberton School!');
      response.end();
      break;
    }
    case '/students': {
      const consoleLogStdout = console.log;
      let output = '';
      console.log = (text) => {
        output += `${text}\n`;
      };
      countStudents(fileName)
        .then(() => {
          response.write('This is the list of our students');
          output = output.slice(0, -1);
          console.log = consoleLogStdout;
          response.write(output);
          response.end();
        })
        .catch((error) => {
          console.log = consoleLogStdout;
          response.write(`Error: ${error.message}`);
          console.log(error);
          response.end();
        });
      break;
    }
    default:
      break;
  }
}).listen(1245);

module.exports = app;
