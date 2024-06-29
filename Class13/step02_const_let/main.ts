// // use const where variable values do not change

// const a = 5;
// const b: number = 33;
// const c = "shoaib";


// I suggest use let instead of var everywhere, 
// becuase let has blocked scope

// if (true){

//     z = 23;

// }
// else {

//     z = "shoaib";

// };

// console.log("let: " + z); // Error: main.ts:22:23 - error TS2304: Cannot find name 'z'.


// <----------------------------------------------END----------------------------------------------------->
// example 2


// // Block Scope Kya Hai?

// // Block scope ka matlab hai ke ek variable sirf us block ke andar accessible hai jahan wo declare kiya gaya hai. 
// // Ek block generally curly braces {} ke andar likha hota hai, jaise ki if statements, loops, functions, etc.

// // let Aur const Ke Sath Block Scope
// // let aur const dono hi block-scoped variables hain. Iska matlab ye hai ke ye variables sirf us block ke andar
// // accessible hotey hain jahan ye declare kiye gaye hain.


// if (true){

//     let x = 25;
//     let y = 30;

//     console.log(x); // accessible 
//     console.log(y); // accessible

// }

// console.log(x); // Error: Cannot find name 'x'.
// console.log(y); // Error: Cannot find name 'y'.


// <----------------------------------------------END----------------------------------------------------->
// example 3

// Higher-Order Functions 

// A function jo ek aur function ko return karta hai ya function ko as an argument accept karta hai, 
// usse higher-order function kehte hain. prime function is category mein aata hai.


// Closures

// Closure ek function hai jo apne lexical scope (parent function ke scope) ko "remember" karta hai, chahe wo 
// function us scope ke bahar hi kyun na execute ho raha ho. agent function is concept ko demonstrate karta hai,
// kyunki wo money variable ko access kar sakta hai jo uske parent function prime ke scope mein defined hai.



// function main(){

//     let value = 10;

//     return function small(){
//        let Rest = value + 1;

//       return Rest; 
//     }

// };


// let print = main();

// console.log(print());


// <----------------------------------------------END----------------------------------------------------->
// example 3


function f(){

    let a = 1;

    a = 2;

    let b = g();

    a = 3;

    return b;

    function g(){

        return a;

    }

};

console.log(f());  // out put 2