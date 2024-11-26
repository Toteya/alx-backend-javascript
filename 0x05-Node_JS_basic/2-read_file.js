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
  rl.on('line', (line) => {
    const row = line.split(',');
    data.push(row);
  });
  rl.on('close', () => {
    const studentsTotal = data.length - 1;
    const studentsCS = [];
    const studentsSWE = [];
    for (const row of data) {
      if (row[3] === 'CS') {
        studentsCS.push(row[0]);
      } else if (row[3] === 'SWE') {
        studentsSWE.push(row[0]);
      }
    }
    function printStudents(studentList) {
      let names = ' List:';
      for (const student of studentList) {
        names += (` ${student},`);
      }
      names = names.slice(0, -1);
      console.log(names);
    }
    console.log(`Number of students: ${studentsTotal}`);
    process.stdout.write(`Number of students in CS: ${studentsCS.length}.`);
    printStudents(studentsCS);
    process.stdout.write(`Number of students in SWE: ${studentsSWE.length}.`);
    printStudents(studentsSWE);
  });
}

module.exports = countStudents;
