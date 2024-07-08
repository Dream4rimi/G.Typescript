// Javascript run time Envoirment 4 Component
// What is Call Stack 
// Asynchrnous Call back
// Task Queue
// Event Loop
// V8 Engine        < These All 6 topics in Javascript Readme.md file please read

// Object-Oriented Programming (OOP)
// Key Concepts of OOP 
// 1.Class and Object
// 2.Encapsulation
// 3.Inheritance
// 4.Polymorphism
// 5.Abstraction

// Slide 3 or 4 leni hai
// mutable ya un mutable in tuple readonly ya simple from w3 school
// async bnany ki zrorat hamen kiyun pari
// function scop
// constant loop reassign or mofification
// oops and class



// <-----------------------------------------------END-------------------------------------------->
// JavaScript Run-time Environment 4 main Components

// JavaScript run-time environment ke 4 main components hote hain: Call Stack, Asynchronous Callbacks, Task Queue, or 
// Event Loop. ye sary components aik sath mil kar JavaScript code ko execute karty hain.



// 1. Call Stack
// Call Stack aik data structure hai jo JavaScript code ke function ki calls ko track karta hai. ham Jab bhi aik function ko call
// karty hain to wo stack mein push ho jata hai, phir jab wo function complete ho jata hai, to wo stack se pop ho jata hai.
// matlab ke Jab hum kisi cheez ko stack se nikaalte hain to us operation ko "pop" kehte hain.

function first(){

  second();

};

function second(){

  console.log("Hello my name is Shoaib")

};

first();


// Note

// Jab first() function call hota hai to wo call stack mein push ho jata hai.
// Phir second() function call hota hai or wo bhi call stack mein push ho jat hai.
// Jab second() function complete ho jata hai to wo call stack se pop ho jata hai.
// Uske baad first() function bhi complete ho kar call stack se pop ho jata hai.


// <-----------------------------------------------END-------------------------------------------->
// 2. Asynchronous Callbacks

// JavaScript mein asynchronous callbacks un functions ko refer karte hain jo kisi asynchronous operation jese 
// (setTimeout, network request) ke complete hone par execute hote hain.


console.log("Start");


setTimeout(() => {

  console.log("YE Asynchronous call back hai")

}, 2000);


console.log("End");



// Notes

// console.log('Start') call hota hai or immediately execute ho jata hai.
// setTimeout function call hota hai jo aik asynchronous operation hai.
// Iska callback function 2 seconds ke baad execute hoga.
// console.log('End') call hota hai or immediately execute ho jata hai.
// 2 seconds ke baad, callback function execute hota hai or 'YE Asynchronous call back hai' print karta hai.


// <-----------------------------------------------END-------------------------------------------->
// 3. Task Queue
// Task Queue mein asynchronous callbacks ko rakha jata hai jab wo ready ho jate hain.
// Jab call stack empty hota hai tab event loop task queue se callbacks ko uthata hai or unko call stack mein 
// push kar deta hai taake wo execute ho sakein.



console.log("Start");


setTimeout(() => {

  console.log("YE Asynchronous call back hai")

}, 2000);


console.log("End");


// Notes

// setTimeout ke callback ko 2 seconds ke baad task queue mein push kiya jata hai.
// Jab call stack empty hota hai (after 'End' is printed), tab event loop task queue se callback ko uthata hai or 
// call stack mein push kar deta hai taake wo execute ho sake.


// <-----------------------------------------------END-------------------------------------------->
// 4. Event Loop

// Event Loop aik mechanism hai jo laga-taar check karta hai ke call stack empty hai ya nahi or task queue mein 
// koi pending callback hai ya nahi. Agar call stack empty hota hai or task queue mein koi callback hota hai 
// to event loop us callback ko call stack mein push kar deta hai taake wo execute ho sake.


console.log("Start");

setTimeout(() => {

  console.log("YE Asynchronous call back hai")

}, 2000);


// Note

// Event loop laga-taar monitor karta hai call stack or task queue ko.
// Jab call stack empty hota hai or task queue mein koi callback ready hota hai to event loop us callback ko
// call stack mein push karta hai.


// Summary
// Call Stack: Function calls ko track karta hai or manage karta hai.
// Asynchronous Callbacks: wo Functions jo asynchronous operations complete hone par execute hote hain.
// Task Queue: Queue jahan asynchronous callbacks ko ready hone par place kiya jata hai.
// Event Loop: Mechanism jo call stack or task queue ko monitor karta hai or ensure karta hai ke 
// asynchronous callbacks execute hon.



// <--------------------------------------------------END----------------------------------------------->
// Object-Oriented Programming (OOP)


// OOP aik programming style ya approach hai jo objects ka use kar ke data or functions ko organize karta hai. 
// ye aik tarika hai jo real-world cheezon ko programming mein represent karne ke liye use hota hai.

// Key Concepts of OOP 
// 1.Class and Object
// 2.Encapsulation
// 3.Inheritance
// 4.Polymorphism
// 5.Abstraction


// <-------------------------------------------------END-------------------------------------------------->
// 1. Class aur Object

// Class: Class aik template ya blueprint hoti hai jo objects banane ke liye use hoti hai. 
// Jaise ghar ka naqsha (blueprint) hota hai jo batata hai ke ghar kaisa banega.
// Object: Object woh cheez hoti hai jo class se banayi jati hai. Jaise ghar ka naqsha (blueprint) se jo ghar banta hai, 
// woh object hai.



