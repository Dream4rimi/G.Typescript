// Synchronous
// Asynchronous
// Define functions defrent data types
// Concurrency
// Promises using .then .catch
// Promises using  async await
// <------------------------------------------------END---------------------------------------------------->
// In sab function ko define karny ka matlab ye hai ke hamen pata hona chahiye ke function mein 
// kya kya pass kar sakty hain primitive ya non primitve;
// function jese number, data type string, boolean, Array, or Object accept kar rha hai
// wesy aik or function bhi accept kar sakta hai...x
// // Expect number
// function add(a: number, b: number): number {
//     return a + b;
// };
// // Expect string
// function greet(name: string): string {
//     return `Hello ${name}`;
// };
// // Expect boolean
// function powerOutage(light: boolean): void{
//     if(light){
//         console.log("Light Aa gai");
//     }
//     else{
//         console.log("Light nahi aai")
//     };
// };
// // Expect Array
// function customFind(arr: string[], element: string): boolean | void {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === element){
//             return true;
//         }
//     };
// };
// // Expect Object
// function logPersonName(person: TPerson): void {
//     console.log(person.name);
// };
// type TPerson = {
//     name: string,
//     age: number
// };
// let person: TPerson = {
//     name: "SHoaib",
//     age: 23,
// };
// // CallBack function => Callback function ko invoke karne ki power sirf parent function ke pass hoti hai...
// // Expect function
// function parent_Function(func: () => void){
//     console.log("I am the Parent function");
//     func(); // child function call
// };
// function child_Function(){                      // function define and pass in Parent function
//     console.log("I am the Child function")
// };
// parent_Function(child_Function);            // parent function ke andar hamne aik callback function pass kiyya hai
// // parent_Function(function(){                    // darect define function
// //     console.log("I am the Child function");
// // });
// // example 1
// setTimeout(() => {
//     console.log("Hi this is shoaib")
// }, 1000);
// // example 2
// function greet(){
//     console.log("Hi this is shoaib")
// }
// setTimeout(greet, 1000)
// <------------------------------------------------END---------------------------------------------------->
// Concurrency => Multi tasking behavier achive karna. matlab aik time par bohut sary kaam karna
// or Concurrency ko achive karne ke liye ham Callbacks, Promises, or Async Await ka use kar ke
// Multiple kaam aik hi time mein kar sakty hain...
// Code Exicuting
// 1. Washing started... 
// 2. Washing done!
// 3. Soaking started...
// 4. Soaking done!
// 5. Drying started...
// 6. Drying done!
// // case 1
// function washing(callback: () => void ){
//     console.log("Washing started...");
//     setTimeout(() => {
//         console.log("Washing done!");
//         callback();
//     }, 5000);
// };
// // case 2
// function soaking(callback: () => void ){
//     console.log("Soaking started...");
//     setTimeout(() => {
//         console.log('Soaking done!');
//         callback();
//     }, 3000);
// };
// // case 3
// function drying(){
//     console.log("Drying started...");
//     setTimeout(() => {
//         console.log("Drying done!");
//     }, 2000);
// };
// // console.log("folding loundry")
// // Now functions calling
// washing(() => {
//     soaking(() => {
//         drying();
//     })
// });
// // console.log("I Am making biryani");
// <------------------------------------------------END---------------------------------------------------->
// Promises Structure using Async Await
// Promise have 3 States => 
// 1. Pending => promise abhi tak process mein hai.
// 2. resolve => Promise Fullfiled ho chuka hai yani succesfully data mil gaya hai.
// 3. reject  => Promise reject yani data nahi mila.
// resolve => .then() method exicute
// reject  => .catch() method exicute
// finally => always exicute promise resolve or reject
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Success")
        reject("Faliure!!!");
    }, 3000);
});
promise
    .then((value) => {
    console.log(value);
    console.log("Thank you for returning money");
})
    .catch((value) => {
    console.log(value);
    console.log("Sorry I am unable to return money");
});
export {};
// <------------------------------------------------END---------------------------------------------------->
// Promises Code writing using Async Await
// Code Exicuting
// 1. Washing started... 
// 2. Washing done!
// 3. Soaking started...
// 4. Soaking done!
// 5. Drying started...
// 6. Drying done!
