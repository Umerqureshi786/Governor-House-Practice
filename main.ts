// console.log("Umar");
//  let students =["osama","afzal","zohaib","naveed"];
//  console.log(students); 
//  students.push("Ali"); //push methode....Add new element to array
//  console.log(students); 

//  students.pop();
//  console.log(students);

// const lastElement=students.pop();//push methode....Remove last element from array
// console.log(lastElement);

// const firstElement= students.shift();
// console.log(students);
// const removefirstElement=students.unshift("Abdul Rehman");
// console.log(students);


//objects......
//Key value pair....

// let person = {
//     name: "Umer",
//     rollNo: 175060,
//     age: 40,
//     address: ["address one", "address two"]
// greeting: function(){
//     console.log("Hello World");

// }
// };
// console.log(person.greeting);

// console.log(person.address[0]);
// person["gender"] = "male", //add value to object...
// console.log(person);
// console.log(person.name);
// console.log(person["age"]);

//Function inside object is known as methode...

//Rest Parameters ...args which is used in last number of parameters & it will return values in array.


// function students(firstName, secondName, ...args){
//     console.log(firstName,secondName);
//     console.log(args);    
// }
// students("Umar","Ali","Afxal","Zohaib","Rehan");


//Pass by value & Pass by Reference......
// let student = ["Ali", "Hassan", "Abbas"];
// console.log(student);

// let student2 = student;
// console.log(student);

// student.push("ahmed");  
// console.log(student2);


// spread operator...is same like as rest parameter in term of syntax but opposite in process....

//objects and arrays are save as a pass by reference because of non-primitive data type







//............Class 26may, 2024...........................


// const students: (string | number)[] = ["value one", "value two"];
// const students2: Array<string | number | boolean> = ["value three", "value four", "true"];
// console.log(students, students2);

// const values: [string] = ["hello world"];//..this is called tuple
// const cofee: [string, number] = ["ice mocha", 4];//..this is called tuple or A tuple is an ordered, immutable collection of elements that can hold multiple types of data in a single variable.

// console.log(values,cofee);

//Pass by value...
// let myNumber=2;
// let anotherNumber= myNumber;
// anotherNumber=6;
// console.log(myNumber);

// console.log(anotherNumber);

// const students: string[] = ["zyan", "rehan"];
// const anotherStudent: string[] = [...students];
// //Europe computer manufacturer association (ECMA)...standardiz javascript
// anotherStudent[0]="ali"
// console.log(students);
// console.log(anotherStudent);

//Objects : key value pair....
// const person = {
//     name: "osama",
//     age: 22,
//     Id: 12345,
//     gender: "male",
//     address: ["address one", "address two"]
// };

// const anotherPerson = { ...person };
// anotherPerson.name = "ali";
// anotherPerson.address[0] = "address three";

// console.log(person);
// console.log(anotherPerson);

// console.log(person);
// console.log(person["gender"]);
// console.log(person.address);




//object car..

// const car = {
//     name: "fortuner",
//     manufacturer: "toyota",
//     year: 2024,
//     variant: "legender",
//     price: 20000000,
//     features: ["4WD", "cruise control"],
// };

// const anotherCar = { ...car };

// console.log(car);
// console.log(anotherCar);
// const biryani = {
//     name: "sindhi biryani",
//     quantityGram: 500,
//     price: 350,
//     ingredients: {
//         chicken: 400,
//         salt: "1tbspoon",
//         spices: ["1", "2"]
//     }
// };
// //structured clone.....new feature of javascript...
// const anotherBiryani = structuredClone(biryani);
// anotherBiryani.ingredients.chicken = 1000,
//     console.log(biryani);
// console.log(anotherBiryani);



//object inside anoth er object: nested object..
// const anotherBiryani={...biryani, ingredients:["chicken"]};



// class 2 June, 2024.........

// interface Person{
//     name: string,
//     age: number,
//     isStudent?:boolean
// }

// const person:Person={
//     name:"osama"
// }


// Array of object

// interface Student {
//     name: string,
//     age: number
// }

// const students: Student[] = [{ name: "amjad", age: 23 },
// { name: "taha", age: 25 },
// { name: "aisha", age: 28 }
// ]
// console.log(students[0].age);
// console.log(students[0].name);
// console.log(students[2].name);

// // const arrLength = students.length;
// for (let i = 0; i < students.length; i++) {
//     const currentIndexStudent = students[i]

// //     console.log(currentIndexStudent);
// }

// Assignment......

// const myFriend = ["rehan", "ali", "umar", "kamran", "salman", "abdullah", "osama", "allay", "usman", "ahmer"];

// const enemy =[2];
// console.log(myFriend);



// callback function are those which we pass in parameter in functions......

// function greeting(name, cb) {
//     console.log("hello", name);
//     cb(name)
// }
// function goodbye(name) {
//     console.log("good bye");

// }
// greeting("Ali", goodbye)


// function greeting(name, cb) {
//     console.log(name);
//     cb(name);

// }
// function goodbye(name) {
//     console.log("good bye", name);

// }
// greeting("Umar", goodbye)



// Array methods......

// const friends = ["ali", "osama", "taha"];
// function findMyValue(name, index) {
//     if (name === "taha") { }
//     return name;
// }
// friends.find(findMyValue)










//Date: 23 June, 2024

// const myFriend = ["rehan", "ali", "umar", "kamran", "salman", "abdullah", "osama", "allay", "usman", "ahmer"];

// const enemy =[2];
// console.log(enemy, myFriend);


// function addition(numOne:number, numTwo:number): number{
// return numOne+numTwo;
// }
// const result=addition(2,4)
// console.log(result);




//Closure...................Function in the function.

// function outerFunction(numOne) {
//     // Inner Function...
//     return function (numTwo) {
//         return numOne + numTwo;

//     }
// }
// const innerFunction = outerFunction(10);
// const result = innerFunction(20);
// console.log(result);




//Anonymous Function...

// const myFunction = function () {
//     return 2;
// }
// const result = myFunction();
// console.log(result);

// b();
// const b = function () {
//     console.log("Hello World");
// }

//Arrow Functions.......
//Without Parameter below..
// const greeting = ()=>{
//     console.log("hello");

// }
// greeting();


//With Paremeter.....
// const greeting = (userName) => {
//     console.log("Hello", userName);

// }
// greeting("Umar");

// const greeting = userName => {
//     console.log("Hello", userName);

// }
// greeting("Umar");



// const addition = (a, b)=>{
//     return a+b;
// }
// const result=addition(2,3);
// console.log(result);



// const addition = (a, b) => a + b;
// const result = addition(5, 3);
// console.log(result);

//Hoisting.....
// console.log(a);
// var a = 10;


// myFoo();
// function myFoo() {
//     console.log("Hello world");
// };







//30th June, 2024.....

// Local vs Global Scope Variable...

// var globalVar= "I am a global variable";
// function scope(){
// console.log(globalVar);
// }
// scope();


function scope() {
    var globalVar = "I am a global variable";
    console.log(globalVar);
}
scope();