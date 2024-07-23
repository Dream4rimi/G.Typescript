// Functions 
// Hum functions ko isliye define karte hain taaky code ko bar bar likhne ki zarorat na pary or hmara code
// maintainble organized rhy. function ko ham bar bar call kar ke multiple jaghon pe use kar sakty hain...


// English:
// A function is a piece of code that completes a specific task. We use functions to avoid rewriting code, 
// making it easier to manage and keep our code organized.


// <---------------------------------------------End--------------------------------------------->
// Named function


function add(val_1: number, val_2: number): number {
    return val_1 + val_2;
};

console.log(add(2,4)); // Output: 6


// <---------------------------------------------End--------------------------------------------->
// Anonymous function

// Urdu:
// Anonymous function wo function hota hai jiska koi naam nahi hota. Ham  anonymous function ko isliye define karte hain
// kyun ke ye sirf aik bar use hota hai or dubara use nahi hota.

// English:
// An anonymous function is a function that does not have a name. We define it anonymously because it is needed for a 
// specific task and won't be reused later. 




let Fun_Name = function(val_1: number, val_2: number): number {
    return val_1 + val_2
};

console.log(Fun_Name(2,5)); // Output: 7


// <---------------------------------------------End--------------------------------------------->
// Anonymous function explicit type define

// Urdu:
// Anonymous function ki explicit type define karne se ham function ka input or output ki type specify kar sakty hain.
// Is se code zyada clear or error-free rehta hai or TypeScript ki type-checking se bugs kam aty aty hain.

// English:
// By defining an anonymous function with an explicit type, we can specify the types of the function's inputs and outputs.
// This makes the code clearer and less prone to errors, as TypeScript's type-checking helps reduce bugs


// Case 1
let myAdd: (x: number, y: number) => number = function(x: number, y: number): number {

    return x + y;

};

console.log(myAdd(32,3)); // Output: 35



// Case 2
// anonymous function ki explicit type define karte huy agr hamne type ke paramter ke naam alag rakh diyye or
// anonymous function define karty waqt uske parameter ke naam alag rakh diyye to excute ho jaega error nahu dega
// kiyun ke Typescript sirf types ko check karta hai names ko nahi...

let myAdd_2: (value_1: number, value_2: number) => number = function(x: number, y: number): number {

    return x + y;

};

console.log(myAdd_2(6,8)); // Output: 14


// <---------------------------------------------End--------------------------------------------->
// Lambda function => Arrow function

// ye function ham isliye istmal karte hain kiyun ke iska syntax chota hai or isme single line statment ke liye
// return keyword or curly braces likhny ki zrorat nahi parti...


let myAdd_4 = (a: number, b: number) => a + b;

console.log(myAdd_4(22,2)); // Output: 24


// <---------------------------------------------End--------------------------------------------->
// type alias function signature


// type alias fuction signature bnaya hai taky function ke parameter mein iski data type assign kar saken... 
type greetFunction = (value: number) => void;


// ye function aik callbacj function lega as an argument 
function getting(para: greetFunction){

    para(7); // function call krwa ke usko value assign kar rhy hain...

};


// ye callback function hai jo argument mein pass kiyya jaega 
let solve: greetFunction = (a: number) => {

    console.log(`This is my value ${a}`)

}

getting(solve); 