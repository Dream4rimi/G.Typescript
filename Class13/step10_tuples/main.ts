// Tuples

// Tuple types have the advantage that you can accurately describe the type of an array of mixed types

// tuples mein ham values ki data-types or unki length fix kar dety hain sequence wise
// matlab ke jitni data-types hamne define ki hongi utni values hi tuple mein dey sakty hain us se ziyada ya km nahi
// or agr hamne data-types or values aagy peechy likh di to tuple accept nahi karega misaal ke tor pe
// 0 index pe data-type string, hai iski jagah agr hamne tuple mein 0 index pe number ya kisi dosri data-type ki
// value pass kardi to ye accept nahi ki jaegi...



// Case 1
let things: [string, number, boolean, string] = ["Shoaib", 23, true, "Develeper"];

console.log(things); // Output: [ 'Shoaib', 23, true, 'Develeper' ]
console.log(things[1]); // Output: 23
console.log(things[3])  // Output: Develeper



// Case 2
// Error genrate hoga kiyun ke hamne data-type ke index ke hisab se tuple ki values set nahi ki...

let things2: [string, number, boolean] = [23, "Shoaib", false];  // Error


// Case 3
// Error genrate hoga kiyun ke hmarry tuple ki data types ki length ziyada hai
// or tuple mein define values ki length km hai jab tak types or values ki length aik jitni nahi hoti error aega.

let things3: [string, number, boolean] = ["shoaib", 23];  // Error


// <-----------------------------------------------END---------------------------------------------------->
// Tuple Example 2 With union type array

// isko ham (mixed array) ya (union types array) kahenge kiyun ke isme multiple data types define karne ki zrorat nhai
// har aik values ke liye bas aik data-type define karny ke bad jitni values chahen utni values dey sakty hain 
// usi data-type ki or (union type array) mein inki length tuple ki tarhn fixed nahi hoti....


// Case 1
let  Uni_tuple: (string | number | boolean)[] = ["shoaib", 23, "Shahzaib", 21, true, true];

console.log(Uni_tuple);      // Output: [ 'shoaib', 23, 'Shahzaib', 21, true, true ]
console.log(Uni_tuple[2]);   // Output: Shahzaib
console.log(Uni_tuple[4]);   // Output: true


// Case 2
// (Union type array) mein koi faraq nahi parta hamne data-types kitni define ki hain 
// or array mein values kitni dey rhy hain 

let  Uni_tuple2: (string | number | boolean)[] = ["shoaib", 23,];
console.log(Uni_tuple2)  // Output: [ 'shoaib', 23 ]


// Case 3
let  Uni_tuple3: (string | number | boolean)[] = ["shoaib",];
console.log(Uni_tuple3); // Output: [ 'shoaib' ]


// <-----------------------------------------------END---------------------------------------------------->
// You can create a tuple using JavaScript's array syntax:
const faling_responce = ["Not found", 440];


// but you will need to declare its type as a tuple.
const passing_responce: [string, number] =  ["{}", 200];

// If you hover over the two variable names you can see the
// difference between an array ( (string | number)[] ) and
// the tuple ( [string, number] ).


// As an array, the order is not important so an item at
// any index could be either a string or a number. In the
// tuple the order and length are guaranteed.

if(passing_responce[1] == 200){
   let Info = JSON.parse(passing_responce[0]);
   console.log(Info)
}


// This means TypeScript will provide the correct types at
// the right index, and even raise an error if you try to
// access an object at an un-declared index.


passing_responce[2];  // Output: Error



// <-----------------------------------------------END---------------------------------------------------->
// Employee management

// A tuple can feel like a good pattern for short bits of
// connected data or for fixtures.



type staffAccount = [number, string, string, string?];


let staff: staffAccount[] = [

  [1, "Ali", "Iqbal"],
  [2, "Saim", "bahdur"],
  [3, "ALex", "Hales", 'Superwiser']

];

console.log(staff[0]);  // Output: [ 1, 'Ali', 'Iqbal' ]

console.log(staff[2]);  // Output: [ 1, 'Ali', 'Iqbal' ]
//                         Output: [ 3, 'ALex', 'Hales', 'Superwiser' ]



// When you have a set of known types at the beginning of a
// tuple and then an unknown length, you can use the spread
// operator to indicate that it can have any length and the
// extra indexes will be of a particular type:


type paystubs = [staffAccount, ...number[]];


let payStubs: paystubs[] = [

  [staff[0], 250],
  [staff[1], 250, 260],
  [staff[0], 300, 300, 300]

];

 const firstMonth_pament =  payStubs[0][1] + payStubs[1][1] + payStubs[2][1];
 const secondMonth_pament = payStubs[1][2] + payStubs[2][2];
 const thirdMonth_pament =  payStubs[2][2];

 console.log(firstMonth_pament);
 // Output:
//        [ 1, 'Ali', 'Iqbal' ]
//        [ 3, 'ALex', 'Hales', 'Superwiser' ]
//        800


console.log(secondMonth_pament);
// Output: 
//      [ 1, 'Ali', 'Iqbal' ]
//      [ 3, 'ALex', 'Hales', 'Superwiser' ]
//      560


 console.log(thirdMonth_pament);
 // Output:  
//        [ 1, 'Ali', 'Iqbal' ]
//        [ 3, 'ALex', 'Hales', 'Superwiser' ]
//        300



// You can use tuples to describe functions which take
// an undefined number of parameters with types:


declare function payFor_Employee(id: number, ...args: [...number[]]): number;

payFor_Employee(staff[0][0], payStubs[0][1]);
payFor_Employee(staff[1][0], payStubs[1][1], payStubs[1][2]);
