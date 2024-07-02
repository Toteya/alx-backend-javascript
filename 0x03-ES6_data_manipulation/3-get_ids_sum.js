export default function getStudentIdsSum(students) {
  let studentIdsSum = 0;
  if (!(students instanceof Array)) { return studentIdsSum; }

  const studentIds = students.map((student) => student.id);

  studentIdsSum = studentIds.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
  );

  return studentIdsSum;
}
