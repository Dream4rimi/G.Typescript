// Union Literals
// Union litterls ka use ye hota hai ke wo veriables ki values kon kon si hongi ye specific kar deta hai uske ilawa
// koi dosri value store nahi kar sakty us veriable mein...
// Union Literals ka use kyun karte hain?
// Union literals TypeScript ka aik powerful feature hai jo hmare code ko type-safe or readable banata hai. 
// Ye hamen variables ko specific set of values tak restrict karne ki sahulat deta hai jo real-world applications mein
// bohot useful ho sakta hai jaise form input validation, API response handling, or navigation management.
// Example 1
// let myName: string | null;
// myName = null;
// console.log(myName);  // Output: null
// myName = "shoaib";
// console.log(myName);  // Output: shoaib
// myName = undefined;  // Error
// myName = true      // Error
// <--------------------------------------------------END------------------------------------------------>
// Example 2
// let myAge: string | number;
// myAge = 23;  // narrowing
// console.log(myAge);  // Output 23
// // console.log(myAge.tolowercase()) // Error genrate karega kiyun ke agr aik number hai or ye lower case mein nahi sakta
// myAge = "Pata Nahi"; // narrowing
// console.log(myAge); // Output: pata nahi
// console.log(myAge.toString());  // common to both types can be called even without narrowing
// console.log(myAge.toLowerCase());  //Can be called on string because of narrowing
// <--------------------------------------------------END------------------------------------------------>
// Example 3
let newAge = Math.random() > 0.6 ? "Shoaib" : 60;
console.log(newAge);
// newAge.toLowerCase(); Error: transpiler cannot narrow
if (newAge === "Shoaib") {
    newAge.toUpperCase(); // Can be called kiyun ye ab string data type hai.
    console.log(newAge);
}
;
if (typeof newAge === "string") {
    newAge.toUpperCase(); // Can be called kiyun ye ab string data type hai.
    console.log(newAge);
}
;
//                              Ok: string             OK: number
typeof newAge === "string" ? newAge.toUpperCase() : newAge.toFixed();
console.log(newAge);
export {};
// <--------------------------------------------------END------------------------------------------------>
// Example 4
