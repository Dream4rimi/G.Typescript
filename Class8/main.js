"use strict";
// Function Call twice - Arrow Function => with 6 Examples
// Variable Scope > Global variables = Local variables
// Hoisting
// Anonymous Function
// Immedently Invoked Function Expression 
// Recursive Functions
// Learn array methods
// .push(...)
// .unshift(...)
// .pop(...)
// .shift(...)
// .filter(...)
// .map(...)
// .join(...)
// .concat(...)
// .flat(...)
// .slice(...)
// <----------------------------------------------END---------------------------------------------->    
// Function Call twice - Arrow Function =>
// Arrow function TypeScript mein aik concise syntax hai jo functions ko define karne aur istemal karne mein madad 
// karta hai. Iska basic format {} ki jagah =>  ko istmal karta hai. 
// "Concise syntax" ka matlab hai aik chota or seedha syntax jo code ko likhne aur parhne dono mein asaan banata hai.
// TypeScript mein, concise syntax arrow functions ke liye bhi istemal hota hai. Arrow functions ka syntax
// traditional function expressions se chhota hota hai jisse code ko parhne aur likhne mein km time lagta hai.
// Traditional function expressions mein function keyword ka istemal hota hai, curly braces {} ke andar function body
// ko define kiya jata hai, aur return keyword ka istemal hota hai agar koi value return karni ho.
// Lekin arrow functions mein function keyword ki bajaye => arrow operator ka istemal hota hai, aur function body ko
// define karne ke liye curly braces {} ki zarurat nahi hoti agar sirf ek expression return karna ho to.
// Example.1
// Traditional function expression
// let multiply = function(a: number, b: number): number {
//     return a * b;
// };
// console.log("Traditional Function Expression:", multiply(5, 3));
// <----------------------------------------------END---------------------------------------------->    
// Example.2
// // Arrow function
// let multiplyArrow = (a: number, b: number): number => a * b;
// console.log("Arrow Function:", multiplyArrow(5, 3));
// <----------------------------------------------END---------------------------------------------->    
//Example.3
// let halfFryEgg = () => 1 + 1.5 + 3;
// let responce: number = halfFryEgg();
// console.log(responce);  // output 5.5
// <----------------------------------------------END---------------------------------------------->    
// Example.4
// let halfFryEgg = (egg: number, butter: number, salt: number): number => (
//     egg + butter + salt
// ) 
// let responce: number = halfFryEgg(1, 1.5, 3);
// console.log(responce);  // output 5.5
// <----------------------------------------------END---------------------------------------------->    
// Example.5
// let halfFryEgg = () => { return 1  +  1.5   + 3}
// //                             egg + butter + salt  
// let responce: number = halfFryEgg();
// console.log(responce); // 5.5
// <----------------------------------------------END---------------------------------------------->    
// Example.6
// let halfFryEgg = () => {
//     let cocked = 1 + 1.5 + 3;
//     return cocked;
// };
// let responce: number = halfFryEgg();
// console.log(responce); // output 5.5
// <----------------------------------------------END---------------------------------------------->    
// Example.6
// let halfFryEgg = (egg: number, butter: number, salt: number) => {
//     let cocked = 1 + 1.5 + 3;
//     return cocked;
// }
// let responce: number = halfFryEgg(1, 1.5, 3);
// console.log(responce);  // output 5.5
// Function Body Complexity: Arrow functions ko typically short expressions ya concise functions ke liye istemal
// kiya jata hai. Agar function ki body complex hai ya multiple lines ki hai, to traditional function expressions
//  ka istemal zyada suitable ho sakta hai.
// <----------------------------------------------END---------------------------------------------->    
// Variable Scope > Global variables = Local variables
// Is statement ka matlab hai ki local variables, yani ki jo variables kisi function ya block ke andar define 
// kiye gaye hain, unka scope unke define kiye gaye block tak hi hota hai. Global variables, yani ke jo variables kisi 
// function ya block ke bahar define kiye gaye hain unka scope puri file ya script ke andar hota hai.
// Ye statement kehti hai ke agar aik variable local scope mein define kiya gaya hai to woh
// sirf us block ya function ke andar tak hi accessible hoga, jabke agar woh global scope mein 
// define kiya gaya hai, to woh puri file ya script ke andar kahin bhi accessible hoga.
// let globalVar = "Accessible everywhere";
// function showExample(){
//     let localVar = "Accessible only inside this funtion";
//     console.log(globalVar) // its Work
// }
// console.log(localVar);  // error localVar is not defined
// <----------------------------------------------END---------------------------------------------->    
// Hoisting
// Hoisting ka matlab hai javascipt engine apne code ko exicute karne se pehly sabhi veriables or functions ko
// unke scop ke opar ley jata hai lekin ke var ke case mein sirf declration hoti hai initialization nahi hoti.
// iske ilawa let or const ke case mein hoisting hoti hai lekin unki value acces karne ki koshish par TDZ ka 
// refrence error ata hai. TDZ mean Temporal Dead Zone....
// var Example
// console.log(x); // output undefined
// var x = 10;
// console.log(x); // output 10
// let Example
// console.log(x); // Error: Cannot access 'x' before initialization
// let x = 10;
// console.log(x); // outout 10
// const Example
// console.log(x);
// const x = 10;
// console.log(x)
// <----------------------------------------------END---------------------------------------------->    
// Anonymous Function
// Anonymous function aik aisa function hai jo bagher naam ke define kiyya jata hai is function ko mostly aisi
// jaghon par use kiyya jata hai jahan ham sirf aik bar function use karna chahty hain isliye isko naam se define 
// karne ki zrorat nahi parti or ye commonly callbacks ki surat mein istmaal kiyya jata hai jahan ham aik function ko
// dosry function ke argument mein pass kar sakty hain...
// Anonymous function ka sab se bara faida ye hai ke ham isy dinymicly define kar sakty hain or isy code ke kisi bhi
// hissy mein use kar sakty hain...
// let halfFry = function(){
//     let cocked = 1 + 1.5 + 3;
//     console.log(cocked);
// }
// halfFry();
// example 2
// Ek array hai jismein numbers hain
// let numbers = [1, 2, 3, 4, 5];
// Hum ye array ko double karna chahte hain, lekin humein ek naye array banane ki zarurat nahi hai
// Hum forEach method ka istemal karke anonymous function ka istemal kar sakte hain
// numbers.forEach(function(num) {
//     console.log(num * 2);
// });
// Example 3
// setTimeout(function(){
//     console.log("Hello Shoaib");
// }, 6000)
// ye function apne code ko 1 minute bad run karega....
// <----------------------------------------------END---------------------------------------------->    
// Immedently Invoked Function Expression 
// (IIFE) Ye Aik javascript expression hai jo function ko foran exicute karta hai
// or ye aik local scope creat karta hai jiski wajah se iske andar define kiyye huy veriables
// or functions glbal scop ko effect nahi karte...
// (function(){
//     console.log("Code run immedently")
// }) 
// ();
// Example 2
// let result = (function() {
//     let x = 10;
//     let y = 20;
//     return x + y;
// })();
// console.log(result); // Output: 30
// <----------------------------------------------END---------------------------------------------->    
// Recursive Functions
// ye aik aisa function hai jo khud ko call krwata rehta hai jab tak iske andar ki condition ki value
// pori na ho jaye tab tak ye chalta rehta hai.
// Iska sab se bara faida ye hai ke ham is se complex problem ko chote chote parts mein divide karke solve kar sakte hain
// function countDown(Numbers: number): void{
//     if (Numbers <= 0){
//         console.log("Working properly!");
//         return;
//     }
//     console.log(Numbers);
//     countDown(Numbers - 1);
// };
// countDown(5);
// <----------------------------------------------END---------------------------------------------->    
// .push(...)
// push ka method value ko array ke end mein add krwata hai...
// let legends: string[] = ["Shoaib", "Asif", "Arshad",];
// legends.push("Masoom");
// console.log(legends);     // output [ 'Shoaib', 'Asif', 'Arshad', 'Masoom' ]
// <----------------------------------------------END---------------------------------------------->    
// .unshift(...)
// Ye method array ke starting mein value add krwata hai...
// let legends: string[] = ["Shoaib", "Asif", "Arshad",];
// legends.unshift("Billa");
// console.log(legends);     // output [ 'Billa', 'Shoaib', 'Asif', 'Arshad' ]
// <----------------------------------------------END---------------------------------------------->    
// .pop(...)
// Ye method array ki last wali value ko delete karta hai or apne andar save kar leta hai...
// let legends: string[] = ["Shoaib", "Asif", "Arshad",];
// legends.pop();
// console.log(legends)     // Output [ 'Shoaib', 'Asif' ]
// <----------------------------------------------END---------------------------------------------->    
// .shift(...)
// ye method array ki starting value ko delete karta hai or usko apne andar save kar leta hai...
// let legends: string[] = ["Shoaib", "Asif", "Arshad",];
// legends.shift();
// console.log(legends)    // Output  [ 'Asif', 'Arshad' ]
// <----------------------------------------------END---------------------------------------------->    
// .filter(...)
// ye aik JavaScript array method hai jo array ke har element ko test function ke through check karta hai 
// aur jinke liye test pass hota hai, un elements ko naye array mein shamil karta hai aur return karta hai.
// Yeh method original array ko modify nahi karta balki aik naya array return karta hai jismein sirf test
// pass karne wale elements shamil hote hain.
// let sample: number[] = [1, 2, 5, 7, 8];
// sample.filter((a) => a % 2 == 0);
// Example 2
// let numbers = [1, 2, 3, 4, 5];
// let evenNumbers = numbers.filter(function(num) {
//     return num % 2 === 0;
// });
// console.log(evenNumbers); // Output: [2, 4]
// Is example mein .filter() method ka istemal kiya gaya hai numbers array mein se sirf even numbers ko select karne
// ke liye. Callback function har number ko check karta hai ki wo even hai ya nahi, aur jo numbers even hote hain, 
//unhe naye array evenNumbers mein shamil kiya jata hai.
// <----------------------------------------------END---------------------------------------------->    
// .map(...)
// ye method array ki value ko aik aik kar ke apne andar leta hai or unko alag alag kar ke seprate line mein
// print kar deta hai...
// let legends: string[] = ["Shoaib", "Asif", "Arshad",];
// legends.map((item) => console.log(item));   // Output  // Shoaib
// //                                                     // Asif  
// //                                                     // Arshad   
// <----------------------------------------------END---------------------------------------------->    
// .join(...)
// is method ka original use array ke elements ko aik sath join kar ke unhey aik string mein convert karna hai.
// Is method ka primary use array ke elements ko aik string format line mein convert hai
// Yeh method original array ko modify nahi karta balke aik naya string return karta hai jismein array ke 
// elements aik dusre ke saath jude hote hain.
// let fruits = ["Apple", "Banana", "Orange"];
// let fruitString = fruits.join(", ");
// console.log(fruitString); // Output: "Apple, Banana, Orange"
// <----------------------------------------------END---------------------------------------------->    
// .concat(...)
// is array method se 2 ya zyada arrays ko aik sath concatenate (combine) karke aik naya 
//array return karta hai. Yani ye method 2 arrays ko merge kar deta hai or unhey aik naya array banata hai.
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [7, 8, 9];
// let combinedArray = arr1.concat(arr2, arr3);
// console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// <----------------------------------------------END---------------------------------------------->    
// .flat(...)
//is array method se nested arrays ko aik flat (seedhay) array mein convert kar sakty hain
// Yani agar aik array ke andar or arrays hain to .flat() method se un nested arrays ke elements ko bahar la kar
// unhey aik seedhey array mein convert kar deta hai...
// let nestedArray = [1, 2, [3, 4], [5, [6, 7]]];
// let flatArray = nestedArray.flat();
// console.log(flatArray); // Output: [1, 2, 3, 4, 5, [6, 7]]
// example 2
// agar hamen sare nested arrays ko flatten karna hai, chahe kitne bhi depths mein nested arrays kiyun na hon
// is method ko ek parameter dena padega jo nested arrays ki jitni bhi depths hogni un sab ko flatten kar dega...
// let nestedArray = [1, 2,[3, 4], [5, [6, 7]]];
// let flatArray = nestedArray.flat(Infinity); // Infinity: Sabhi depths tak flatten karna
// console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6, 7]
// <----------------------------------------------END---------------------------------------------->    
// .slice(...)
// is array method se array ke jis specified portion ko slice matlab (kaat) karke aik naya array return karta hai
// Yani is method ka istemal kar ke aik array ke selected elements ko aik naye array mein shamil karta hai
// bina original array ko modify kiye.
// isme ham methos ko slicing ka starting or end wala index denge. ke is starting index se ley kar is end waly index tak
// jitni bhi values ain sab nikal kar do... agr starting index nahi denge to slicing 0 se start kar dega or agr 
// end wala index mahi denge to ye end vali value tak slice nikal kar dey dega....
let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
let subset = fruits.slice(1, 4);
console.log(subset); // Output: ["Banana", "Orange", "Mango"]
