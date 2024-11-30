const fs = require('fs');
const readline = require('readline');

async function countStudents(filePath) {
  const inputRS = fs.createReadStream(filePath);
  return new Promise((resolve, reject) => {
    inputRS.on('error', () => {
      reject(new Error('Cannot load the database'));
    });

    const rl = readline.createInterface({
      input: inputRS,
      output: process.stdout,
      terminal: false,
    });
    let studentsTotal = 0;
    const fields = {};
    rl.on('line', (line) => {
      const row = line.split(',');
      if (row && row[3] !== 'field') {
        if (!fields[row[3]]) {
          fields[row[3]] = [];
        }
        fields[row[3]].push(row[0]);
        studentsTotal += 1;
      }
    });
    rl.on('close', () => {
      console.log(`Number of students: ${studentsTotal}`);
      for (const field of Object.keys(fields)) {
        let names = `Number of students in ${field}: ${fields[field].length}. List:`;
        for (const student of fields[field]) {
          names += (` ${student},`);
        }
        names = names.slice(0, -1);
        console.log(names);
      }
      resolve();
    });
  });
}

module.exports = countStudents;
