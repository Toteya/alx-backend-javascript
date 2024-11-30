const fs = require('fs');

function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.trim().split('\n');
    const fields = {};
    let studentsTotal = 0;

    lines.forEach((line, index) => {
      if (index === 0) return;
      const row = line.split(',');
      if (row[3] && row[3] !== 'field') {
        if (!fields[row[3]]) {
          fields[row[3]] = [];
        }
        fields[row[3]].push(row[0]);
        studentsTotal += 1;
      }
    });

    console.log(`Number of students: ${studentsTotal}`);
    for (const field of Object.keys(fields)) {
      let names = `Number of students in ${field}: ${fields[field].length}. List:`;
      for (const student of fields[field]) {
        names += ` ${student},`;
      }
      names = names.slice(0, -1);
      console.log(names);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
