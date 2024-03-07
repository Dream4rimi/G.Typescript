// premitive data types > work Done
// strong types         > work Done
// inference Types      > work Done
// let and const        > work Done
// var and let error
// String Data Type     > work Done
// Number Data Type     > work Done
// Boolean Data Type    > work Done
// bignit types         > work Done
// any Data Type        > work Done
// unknown Data Type    > work Done
// null Data Type       > work Done
// undefined Data Type  > work Done
// Never Data Type      > work Done
// symble Data Type     > work Done
// custom Data Type     > work Done
// All Typescript Data Type cover   > work in progress
// syntax error         > work Done
// Type error           > work Done
// Assignability error  > work Done
// String Concatenation > work Done
// Template literals    > work Done
// modules oprater
// cover All oppraters
// slides cover 1 and 2
// <-----------------------------------------------End------------------------------------------------>
// premitive data types
//TypeScript mein primitive data types un data types ko kaha jata hai jo directly
// memory mein store hoti hain aur immutable (unchangeable) In sabhi ko primitive data types kaha jata hai
// kiyun ke ye primitive operations perform karte hain or directly memory mein store hote hain.....
// 1_ String,
// 2_ Number,
// 3_ boolean
// 4_ null
// 5_ undefined
// 6_ symble
// 7_ bigint
// <-----------------------------------------------End------------------------------------------------>
// Explicit > Manual
// let name_: string = "Shoaib";  < type define call strong types....
// Implicit > automatic
// let name_ = "shoaib";          < inferance types auto identify...
// <-----------------------------------------------End------------------------------------------------>
// let ki value Reassign yani change ki ja sakti hai...
// let person: string = "Shoaib";
// person = "Owais";
// console.log(person);
// <-----------------------------------------------End------------------------------------------------>
// Const ki values Reassign nahi ki ja sakti jo hai hmesha wahi rhegi or const noramly
// aisi values ke liye use karte hain jiski value fix rakhni hoti hai jese banck account number...
// const person: string = "Shoaib";
// person = "Owais";
// console.log(person);
// <-----------------------------------------------End------------------------------------------------>
var person = "Shoaib";
var person = "Arshad";
var person = "Asif";
console.log(person);
// <-----------------------------------------------End------------------------------------------------>
// <-----------------------------------------------End------------------------------------------------>
// string Data Type
// let person: string = "String"
// <-----------------------------------------------End------------------------------------------------>
// Number Data Type
// 5, 3.14, -10 < in sab ko bhi number data type mein call kiyya jata hai
// let value: number = 33
// <-----------------------------------------------End------------------------------------------------>
// Boolean Data Type
// let check: boolean = true/false
// <-----------------------------------------------End------------------------------------------------>
// bignit type
// let value: bigint = 774678463746n
// let value2: bigint = 8984739878343n
// let final: bigint = value + value2
// console.log(final);
// <-----------------------------------------------End------------------------------------------------>
// any Data Type
// any ko kisi bhi value se reassign kar denge to error nahi dega...
// let person: any = "shoaib";
// person = 33
// person = true
// console.log(person);
// <-----------------------------------------------End------------------------------------------------>
// unknown Data Type
// ye type bhi any ki tarhn hoti hai lekin use se behtar hai ham wahn use karte hain jahn hamen type maloom nahi hoti
// phir jab hamy type maloom ho jati hai to ham isy replace kar sakty us value ki type ke sath "as" ke zriye....
// let a: unknown = "shoaib";  // now string value...
// a = 33                      // and now number value
// let b = a as number;        // we declare number
// b = 40                     // now its officialy number value
// b = "shoaib"               // now its error
// console.log(a);
// <-----------------------------------------------End------------------------------------------------>
// undefined Data Type
// let person: string;
// console.log(person); // show undefined
// let person: string = ""
// console.log(person); // show white space
// <-----------------------------------------------End------------------------------------------------>
// null Data Type
// ye type aksar optional form waghera mein use hoti hai jisme agr data mily tab bhi sahi hai 
// or agr data na milt tab bhi khair hai...
// let check: null = null;
// console.log(check);
// <-----------------------------------------------End------------------------------------------------>
// Never Data Type
// let a: never = 33   // never is rarrely use
// <-----------------------------------------------End------------------------------------------------>
// symble Data Type
// * what is symble
// * make a program with symble
// * use symble as key of object
// * use symble as function of class
// ye type hmesha uniqe id provide karti hai apko iska use tab hota hai jab hmara oject ya function waghera
// collaps kar rha ho to symble ke zariye usy ham aik uniqe id provide karte hain...
// let s1 = Symbol();
// console.log(s1);  // output is Symbol()
// let s1 = Symbol();
// let s2 = Symbol();
// console.log(s1 == s2); // output is false
// let s1 = Symbol("shoaib");
// console.log(s1);          // ouput is Symbol(shoaib)
// let s1 = Symbol("shoaib");
// console.log(s1.toString()); // normal output Symbol(shoaib)
// let s1 = Symbol("d1");
// let data = {
//     [s1]:"this is shoaib"
// }
// console.log(data[s1]); // out put this is shoaib
//class
// let s1 = Symbol("d1");
// class Demo {
//     demof1() {
//         return " give back my insurance money"
//     }
// }
// let d1 = new Demo(); // object
// console.log(d1.demof1());
// <-----------------------------------------------End------------------------------------------------>
// custom Data Type
// type Customer = {   // we creat this type just like typesript builtin types string, number, boolean, etc.
//     name: string;
//     age: number;
//     hobbies: string[];
//     email: string;
// };
// const person_1: Customer = {
//     name: "Shoaib",
//     age: 23,
//     hobbies: ["Cricket", "Videos games", "watch movies"],
//     email: ""
// }
// person_1.email = "sk9952908@gmail.com";
// // // console.log(person_1); // isko print na bhi kiyya jaye to phir bhi customers ka array khud kar dega
// let customers: Customer[] = []; // is array mein all customers ki information save ki jaa rhi hai...
// customers.push(person_1); // push karne se ye sara data customers[] ke array mein save hota chala jaega
// customers.push({
//     name: "Arshad",
//     age: 21,
//     hobbies: ["Wella", "Farigh", "nikamma"],
//     email: "pata nahi"
// });
// console.log(customers); // array print
// <-----------------------------------------------End------------------------------------------------>
// syntax error
// lett message = "Hello World";
// console.log(message);
// <-----------------------------------------------End------------------------------------------------>
// Type error
// let message = "Hello World";
// console.loger(message);
// <-----------------------------------------------End------------------------------------------------>
// Assignability error
// let message = "Hello World";
// message = 3
// console.log(message);
// <-----------------------------------------------End------------------------------------------------>
// String Concatenation
// let firstName: string = "Shoaib";
// let lastName: string = "Bashir";
// let fullName: string = firstName + " " + lastName;
// console.log(fullName)
// <-----------------------------------------------End------------------------------------------------>
// Template literals
var firstName = "Shoaib";
var lastName = "Bashir";
var fullName = "".concat(firstName, " ").concat(lastName);
console.log(fullName);
// <-----------------------------------------------End------------------------------------------------>
// <-----------------------------------------------End------------------------------------------------>
// <-----------------------------------------------End------------------------------------------------>
// <-----------------------------------------------End------------------------------------------------>
