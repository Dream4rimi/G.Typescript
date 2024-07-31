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
// case 1
function washing(callback) {
    console.log("Washing started...");
    setTimeout(() => {
        console.log("Washing done!");
        callback();
    }, 5000);
}
;
// case 2
function soaking(callback) {
    console.log("Soaking started...");
    setTimeout(() => {
        console.log('Soaking done!');
        callback();
    }, 3000);
}
;
// case 3
function drying() {
    console.log("Drying started...");
    setTimeout(() => {
        console.log("Drying done!");
    }, 2000);
}
;
// Now functions calling
washing(() => {
    soaking(() => {
        drying();
    });
}, yh);
export {};
