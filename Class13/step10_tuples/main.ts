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

