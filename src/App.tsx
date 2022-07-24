import React from "react";

import "./App.css";
import Counter from "./components/Counter/Counter";
import Users from "./components/Users";
// variable
let name: string = "Rashidul";
console.log(name);
let age: number = 23;
console.log(age);
let isSmart: boolean = true;
console.log(isSmart);

// array
let students: string[] = ["Rashidul", "Rakibul", "Rafiul"];
console.log(students);
let studentsAge: number[] = [12, 23, 25, 18];
console.log(studentsAge);

// normal object
const person: { name: string; job: string; age: number } = {
  name: "Rased",
  job: "student",
  age: 23,
};
console.log(person);

// object with interface
interface Student {
  name: string;
  job: string;
  age: number;
  gpa: number;
}

const student: Student = {
  name: "Rashiudl",
  gpa: 3.0,
  age: 23,
  job: "student",
};
console.log(student);

// object with interface and option
interface Student2 {
  name: string;
  job?: string;
  age: number;
  gpa: number;
}

const student2: Student2 = {
  name: "Rashiudl",
  gpa: 3.0,
  age: 23,
};
console.log(student2);

// object with interface
interface Student3 {
  name: string;
  job?: string;
  age: number;
  gpa: number;
  employer: string | boolean;
}

const student3: Student3 = {
  name: "Rashiudl",
  gpa: 3.0,
  age: 23,
  employer: true,
};
console.log(student3);

// function don't return. void key word used mean don't return function. 
const handleAddUser = (
  firstName: string,
  age: number,
  address: string
): void => {
  console.log(firstName, age, address);
};
handleAddUser("Rashiudl", 23, "Mirpur-10");

// function return string type value, because we are used string key word.
function anyFunctionName(fName: string, age: number): string {
  return fName;
}
const myFName = anyFunctionName("Rashidul", 34);
console.log(myFName);

function App() {
  return (
    <div className="App">
      <h2>We are learn React and TypeScript</h2>
      <Counter></Counter>
      <Users></Users>
    </div>
  );
}

export default App;
