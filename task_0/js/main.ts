// task_0/js/main.ts

interface Student {

    firstName: string;
    lastName: string;
    age: number;
    location: string;
}


// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Martin",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
}

// Create an array containing the students
const studentsList: Student[] = [student1, student2];

// Render table using Vanilla JavaScript
const body = document.body;
const table = document.createElement('table');
const tbody = document.createElement('tbody');

// Add each student as a row in the table
studentsList.forEach((student) => {
  const row = document.createElement('tr');
  
  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  
  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
body.appendChild(table);

