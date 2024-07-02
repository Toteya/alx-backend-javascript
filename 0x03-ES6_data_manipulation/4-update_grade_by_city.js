import getStudentsByLocation from './2-get_students_by_loc';

export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsByLoc = getStudentsByLocation(students, city);
  const studentNewGrades = [];

  for (const student of studentsByLoc) {
    try {
      student.grade = newGrades.filter((record) => record.studentId === student.id)[0].grade;
    } catch (TypeError) {
      student.grade = 'N/A';
    }
    studentNewGrades.push(student);
  }

  return studentNewGrades;
}
