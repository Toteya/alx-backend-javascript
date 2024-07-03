interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    contract: boolean;
}

const myTeacher: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(myTeacher);

interface Directors extends Teacher {
    numberOfReports: number;
}

function printTeachers(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
}

class StudentClass() {
    
}