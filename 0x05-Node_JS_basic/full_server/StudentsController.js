import readDataBase from './utils';

const filePath = process.argv[2];

class StudentController {
  static getAllStudents(request, response) {
    readDataBase(filePath)
      .then((students) => {
        response.write('This is the list of our students');
        const fields = Object.keys(students).sort();
        for (const field of fields) {
          const names = students[field].map((name) => ` ${name}`);
          response.write(`\nNumber of students in ${field}: ${names.length}. List:${names}`);
        }
        response.status(200).end();
      })
      .catch((error) => {
        console.log(error);
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (!['CS', 'SWE'].includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDataBase(filePath)
      .then((students) => {
        const names = students[major].map((name) => ` ${name}`);
        response.send(`List: ${names}`);
      })
      .catch((error) => {
        console.log(error);
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentController;
