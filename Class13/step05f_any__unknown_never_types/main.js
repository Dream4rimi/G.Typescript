// Any
import { error } from "console";
// any data type ke veriable ko ham kisi bhi data type ki value se reassign kar sakty hain...
let my_Value;
my_Value = true; // Accepted
my_Value = 43; // Accepted
my_Value = "shoaib"; // Accepted
my_Value = []; // Accepted
my_Value = {}; // Accepted
my_Value = Math.random; // Accepted
my_Value = null; // Accepted
my_Value = undefined; // Accepted
my_Value = () => { console.log("Hello its shoaib"); }; // Accepted
// <-----------------------------------------------END------------------------------------------------>
// Unknown
// unknown data type ke veriable ko ham kisi bhi data type ki value se reassign kar sakty hain...
let your_Value;
your_Value = true; // Accepted
your_Value = 45; // Accepted
your_Value = "Hurrr"; // Accepted
your_Value = []; // Accepted
your_Value = {}; // Accepted
your_Value = Math.random; // Accepted
your_Value = null; // Accepted
your_Value = undefined; // Accepted
your_Value = () => { console.log("Hello is me again"); }; // Accepted
// <-----------------------------------------------END------------------------------------------------>
// Assigning a value of type unknown to variables of other types
// unknown data type ke veriable ko ham kisi dosry data type ke veriable mein Assigning karwa rhy hain...
let val;
let val1 = val; // Accepted
let val2 = val; // Accepted
let val3 = val; // Error aega
let val4 = val; // Error aega
let val5 = val; // Error aega
let val6 = val; // Error aega
let val7 = val; // Error aega
let val8 = val; // Error aega
// <-----------------------------------------------END------------------------------------------------>
// Never
// TypeScript mein never type un functions ke liye use hoti hai jo kabhi bhi successfully terminate nahi karte.
// Ye usually do cases mein aati hai:
// Usage: Error handling or type safety ensure karne ke liye.
// Real-World Example: Login valid
// 1.Errors throw karte waqt.
// 2.Infinite loops ke waqt.
// Function returning never must not have a reachable end point
// Jo function never return karta hai, uska end point kabhi reachable nahi hona chahiye
// function Error(message: string): never{
//     throw new Error(message)
// }
// Inferred return type is never
function fail() {
    return error("Somthing went wrong");
}
fail(); // Output: Somthing went wrong
// Function returning never must not have a reachable end point
function infiniteLoop() {
    while (true) { }
}
;
infiniteLoop();
