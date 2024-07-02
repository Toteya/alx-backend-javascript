export default function getListStudentsIds(students) {
  let studentIds = [];

  if (!(students instanceof Array)) { return studentIds; }

  studentIds = students.map((student) => student.id);
  return studentIds;
}
