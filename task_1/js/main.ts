// 1. Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: false,
  contract: false,
};

// 2. Directors interface
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

// 3. printTeacherFunction interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// 4. printTeacher function (must be a function declaration)
function printTeacher(firstName: string, lastName: string): string {
  firstName = firstName[0];
  return `${firstName}. ${lastName}`;
}

console.log(printTeacher("John", "Doe")); // J. Doe

// 5. Student constructor interface
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// 6. Student class interface
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// 7. Class definition (must match exactly)
class StudentClass {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass({ firstName: "Jane", lastName: "Doe" });
console.log(student.displayName());
console.log(student.workOnHomework());
