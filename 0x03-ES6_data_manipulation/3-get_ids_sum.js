export default function getStudentIdsSum(students) {
  const studentIds = students.map((student) => student.id);
  const studentIdsSum = studentIds.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
  );

  return studentIdsSum;
}
