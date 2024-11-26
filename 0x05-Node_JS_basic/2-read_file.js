const fs = require('fs');
const readline = require('readline');

function countStudents(filePath) {
  const inputRS = fs.createReadStream(filePath);
  inputRS.on('error', () => {
    throw new Error('Cannot load the database');
  });
  const rl = readline.createInterface({
    input: inputRS,
    output: process.stdout,
    terminal: false,
  });
  const data = [];
  const fields = {};
  rl.on('line', (line) => {
    const row = line.split(',');
    if (row[3] !== 'field' || row[3] === undefined) {
      fields[row[3]] = [];
      data.push(row);
    }
  });
  rl.on('close', () => {
    let studentsTotal = 0;
    for (const row of data) {
      studentsTotal += 1;
      fields[row[3]].push(row[0]);
    }
    function printStudents(field) {
      let names = `Number of students in ${field} ${fields[field].length}. List:`;
      for (const student of fields[field]) {
        names += (` ${student},`);
      }
      names = names.slice(0, -1);
      console.log(names);
    }
    console.log(`Number of students: ${studentsTotal}`);
    for (const field of Object.keys(fields)) {
      printStudents(field);
    }
  });
}

module.exports = countStudents;
