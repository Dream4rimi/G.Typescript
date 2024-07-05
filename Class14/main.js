// Javascript run time Envoirment 4 Component
// What is Call Stack 
// Asynchrnous Call back
// Task Queue
// Event Loop
// V8 Engine 
// mutable ya un mutable in tuple from w3 school
// async bnany ki zrorat hamen kiyun pari
// function scop
// <-----------------------------------------------END-------------------------------------------->
// JavaScript Run-time Environment 4 main Components
// JavaScript run-time environment ke 4 main components hote hain: Call Stack, Asynchronous Callbacks, Task Queue, or 
// Event Loop. In components ka kaam aik sath mil kar JavaScript code ko execute karna hota hai.
// 1. Call Stack
// Call Stack aik data structure hai jo JavaScript code ke function calls ko track karta hai. Jab bhi aik function call
// hota hai, wo stack mein push ho jata hai, or jab function complete ho jata hai, to wo stack se pop ho jata hai.
// matlab ke Jab hum kisi cheez ko stack se nikaalte hain to us operation ko "pop" kehte hain.
function first() {
    second();
}
;
function second() {
    console.log("Hello my name is Shoaib");
}
;
first();
export {};
