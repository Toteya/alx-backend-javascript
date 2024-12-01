import fs from 'fs';
import readline from 'readline';

const readDatabase = (filePath) => {
  const inputStream = fs.createReadStream(filePath);
  return new Promise((resolve, reject) => {
    inputStream.on('error', (error) => {
      reject(error);
    });
    const rl = readline.createInterface({
      input: inputStream,
      output: process.stdout,
      terminal: false,
    });
    const students = {};
    rl.on('line', (line) => {
      const row = line.split(',');
      if (row && row[3] !== 'field') {
        if (!students[row[3]]) {
          students[row[3]] = [];
        }
        students[row[3]].push(row[0]);
      }
    });
    rl.on('close', () => {
      resolve(students);
    });
  });
};

export default readDatabase;
