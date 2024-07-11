// JavaScript mein var ke saath declare kiya gaya variable function scope mein hota hai
// jab ke let or const block scope mein hotay hain.

// English:
// 1. let: Used to declare variables with block scope, meaning the variable is only accessible within the 
// block it's defined in. It allows for reassignment of values.

// 2. const: Used to declare variables with block scope that cannot be reassigned after their initial assignment. 
// It ensures that the variable’s reference remains constant, though the value it holds can still be mutable if it is an object.

// 3. var: Used to declare variables with function scope, meaning the variable is accessible throughout the function
// where it's defined. It can be reassigned and is hoisted to the top of its scope.



// Urdu:
// 1. let: Variables block scope ke sath declare karne ke liye use hota hai, yani variable sirf us block ke andar
// accessible hota hai jahan define kiya gaya hai. Is se values ko dubara assign karna mumkin hota hai.

// 2. const: Variables block scope ke sath declare karne ke liye use hota hai jis se initial assignment ke baad 
// dobara assign nahi kiya ja sakta. Yeh ensure karta hai ke variable ka reference constant rahe, lekin agar object hai
// to value mutable reh sakti hai.

// 3. var: Variables function scope ke sath declare karne ke liye use hota hai, yani variable puri function ke andar 
// accessible hota hai jahan define kiya gaya hai. Isse values ko dobara assign kiya ja sakta hai aur yeh hoisted hota hai
// apne scope ke top par


// use const where variable values do not change

const a = 5;
const b: number = 33;
const c = "shoaib";


// <----------------------------------------------END----------------------------------------------------->
// Example 1:

// I suggest use let instead of var everywhere, 
// becuase let has blocked scope


if (true){

    z = 23;

}
else {

    z = "shoaib";

};

console.log("let: " + z); // Error: main.ts:22:23 - error TS2304: Cannot find name 'z'.


// <----------------------------------------------END----------------------------------------------------->
// Example 2: Correct code

let z;

if (false){

    z = 23;

}
else {

    z = "shoaib";

};

console.log("let: " + z); // Output: shoaib becaouse value is false if value is true then Output is 23;


// <----------------------------------------------END----------------------------------------------------->
// example 2


// // Block Scope Kya Hai?

// // Block scope ka matlab hai ke ek variable sirf us block ke andar accessible hai jahan wo declare kiya gaya hai. 
// // Ek block generally curly braces {} ke andar likha hota hai, jaise ki if statements, loops, functions, etc.

// // let Aur const Ke Sath Block Scope
// // let aur const dono hi block-scoped variables hain. Iska matlab ye hai ke ye variables sirf us block ke andar
// // accessible hotey hain jahan ye declare kiye gaye hain.


if (true){

    let x = 25;
    let y = 30;

    console.log(x); // accessible 
    console.log(y); // accessible

}

console.log(x); // Error: Cannot find name 'x'.
console.log(y); // Error: Cannot find name 'y'.


// <----------------------------------------------END----------------------------------------------------->
// example 3

// Higher-Order Functions 

// Aik function jo aik or function ko return karta hai ya function ko as an argument accept karta hai, 
// usse higher-order function kehte hain. prime function is category mein aata hai.


// Closures

// Closure aik function hai jo apne lexical scope (parent function ke scope) ko "remember" karta hai, chahe wo 
// function us scope ke bahar hi kyun na execute ho raha ho. agent function is concept ko demonstrate karta hai,
// kyunki wo money variable ko access kar sakta hai jo uske parent function prime ke scope mein defined hai.



function main(){

    let value = 10;

    return function small(){
       let Rest = value + 1;

      return Rest; 
    }

};


let print = main();

console.log(print());


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