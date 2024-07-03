interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Amy',
    lastName: 'Lawerence',
    age: 25,
    location: "London",
};

const student2: Student = {
    firstName: 'Penda',
    lastName: 'Sheehama',
    age: 22,
    location: 'Tsandi',
};

const students: Student[] = [student1, student2];

const table = document.createElement('table');
// generate table head
let head = table.createTHead();
let row = head.insertRow();
let th1 = document.createElement('th');
let th2 = document.createElement('th');
let h_text1 = document.createTextNode('firstName');
let h_text2 = document.createTextNode('location');
th1.appendChild(h_text1);
th2.appendChild(h_text2);
row.appendChild(th1);
row.appendChild(th2);


// Insert rows and data into table
for (let student of students) {
    let row = table.insertRow();
    let cell1 = row.insertCell();
    let cell2 = row.insertCell();
    let c_text1 = document.createTextNode(student.firstName)
    let c_text2 = document.createTextNode(student.location)
    cell1.appendChild(c_text1);
    cell2.appendChild(c_text2);
}

document.body.appendChild(table);