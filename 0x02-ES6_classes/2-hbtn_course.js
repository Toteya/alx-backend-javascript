export default class HolbertonCourse {
  constructor(name, length, students) {
    if (this.#validateName(name)) { this._name = name; }
    if (this.#validateLength(length)) { this._length = length; }
    if (this.#validateStudents(students)) { this._students = students; }
  };

  #validateName(name) {
    if (!(typeof(name) === 'string' || name instanceof String)) {
      throw new TypeError('Name must be a string');
    }
    return true;
  }

  #validateLength(length) {
    if (!(typeof(length) === 'number')) {
      throw new TypeError('Length must be a number');
    }
    return true;
  }

  #validateStudents(students) {
    if (!(Array.isArray(students) && students.every((x) => typeof(x) === 'string'))) {
      throw new TypeError('Students must be an array of strings');
    }
    return true;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (this.#validateName(name)) {
      this._name = name;
    }
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (this.#validateLength(length)) {
      this._length = length;
    }
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (this.#validateStudents(students)) {
      this._students = students;
    }
  }
}
