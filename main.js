// console.log("Umar");
//  let students =["osama","afzal","zohaib","naveed"];
//  console.log(students); 
//  students.push("Ali"); //push methode....Add new element to array
//  console.log(students); 
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
//var is a global variable.... let and const are block scope variable
// var globalVar= "I am a global variable";
// function scope(){
// console.log(globalVar);
// }
// scope();
// (){}......we called it control.....object syntax is a declaration
// function scope() {
//     var globalVar = "I am a global variable";
//     console.log(globalVar);
// }
// scope();
// Do While Loop.....
// let count = 0;
// while (count < 5) {
//     console.log(count);
//     count++;
// };
// Do while execute code at least one time regardless of the condition is true or Not...
// let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<6);
// paper from chapter 1 to 10.... slides and class concepts.
// let age = 25;
// if (true) {
//     let age = 20;
//     console.log(age);
// }
// console.log(age);
// 7 July, 2024....
// console.log("umar");
// function greeting(){
//     console.log("This is message");
// }
// console.log("This is message 2");
// console.log("This is message 3");
// greeting()
//Event loop work on call stack thats why above programe run set timeout in last....
//macro task queue and micro task queue...
//Asynchronous programming in Js is set timeout function.....
// console.log("Start");
// setTimeout(() => {
//   console.log("This runs after 4  seconds");
// }, 0);
// console.log("End");
//callback function.....
// function greeting(cb){
//   setTimeout(() => {
//     console.log("hello world");
//     cb();
//   }, 2000);
// }
// function printNamne(){
//   setTimeout(() => {
//     console.log("Ali");
//   }, 1000);
// }
// Promise....,pending, fulfilled, rejected...Promise is asynchronous
function makeBiryani() {
    return new Promise(function (resolve, reject) {
        resolve("yes i cook biryani");
        reject("i will not cook biryani");
    });
}
// makeBiryani()
//   .then((result) => {
//     console.log(result);
//   }
//   )
//   .catch((err) => {
//     console.log(err);
//   })
function callPromise() {
    return __awaiter(this, void 0, void 0, function () {
        var result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    return [4 /*yield*/, makeBiryani()];
                case 1:
                    result = _a.sent();
                    console.log(result);
                    console.log("you all are invited");
                    return [3 /*break*/, 4];
                case 2:
                    error_1 = _a.sent();
                    console.log("error");
                    return [3 /*break*/, 4];
                case 3:
                    console.log("It's final");
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    });
}
callPromise();
// Above two mnethod are calling to promise one from .then .catch and other from async function through await..... 
//try and catch are same as .then and .catch.....
