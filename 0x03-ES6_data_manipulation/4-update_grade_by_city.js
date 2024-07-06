export default function updateStudentGradeByCity(students, city, newGrades) {
  let studentsNewGrades = [];
  const studentsByLoc = students.filter((student) => student.location === city);

  studentsNewGrades = studentsByLoc.map((student) => new Object({
    ...student,
    grade: newGrades.filter((record) => record.studentId === student.id)[0] !== undefined
      ? newGrades.filter((record) => record.studentId === student.id)[0].grade
      : 'N/A',
  }));

  for (const student of studentsNewGrades) {

  }

  // const studentsByLoc = getStudentsByLocation(students, city);
  // const studentNewGrades = [];

  // for (const student of studentsByLoc) {
  //   try {
  //     student.grade = newGrades.filter((record) => record.studentId === student.id)[0].grade;
  //   } catch (TypeError) {
  //     student['grade'] = 'N/A';
  //   }
  //   studentsNewGrades.push(student);
  // }

  return studentsNewGrades;
}
