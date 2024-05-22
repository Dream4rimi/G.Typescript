// fresh object and stail object a = b dono alag object
// arrow function kya hai or isy array mein use karty hain
// cover all loops total 4 loops
// programiz website for loops details
// length for loop se define karte hain 
// lenght hmesha 1 se start hoti hai. or index zero se start hota hai
//// revise employ project
// interface Employee {
//     employeeId: any  
// }
// aik object banana hai 
// <-----------------------------------------------END--------------------------------------------------->
// fresh object and stale object ? a = b dono alag object
// jab hamne apni product ki price or specs online kie to wo fresh object kehlati hai or agr bad mein hamne
// uski price barha di ho lekin jo hmari store mein product price hai wo customer ko purani show ho rhi ho to 
//wo stale object kehlata hai ?
// Fresh Object kya hota hai?
// Fresh object wo object hota hai jisme bilkul naya or recent (updated) data hota hai. Matlab is object mein 
// jo bhi information hai wo latest or accurate hai.
// Jab aapne abhi abhi product ki price update ki ho aur aap kisi customer ko latest price dikhana chahte hain.
// let product = {
//     id: 101,
//     name: "Laptop",
//     price: 1000 // Latest price
//   };
//   console.log("Fresh Product Price: " + product.price); // Output: Fresh Product Price: 1000
// <-----------------------------------------------END--------------------------------------------------->
// fresh object and stale object a = b dono alag object
// Stale object wo object hota hai jo purana hai or isme outdated (purani) information hai.
// Matlab is object mein jo bhi information hai wo update nahi hui or accurate bhi nahi hai.
// Agar aapke system mein purani price save hai aur aapne ab tak update nahi ki.
// let product = {
//     id: 101,
//     name: "Laptop",
//     price: 900 // Old price
//   };
//   console.log("Stale Product Price: " + product.price); // Output: Stale Product Price: 900
// <-----------------------------------------------END--------------------------------------------------->
// Arrow function kya hai or isy array mein use kesy karte hain
// Arrow function aik short foam hai traditional function ka. jo function aik single statment return kar rha ho to
// uske liye hamen curly breces lgane ki zrorat nahi parti or na hi return krwany ke liye return keyword likhne ki
// zrorat parti hai ye sab apne ap kar deta hai arrow function.
// Arrow functions ko map, filter, reduce jaise array methods mein commonly use kiya jata hai.
// example 1
// Traditional function ki jagah arrow function ka syntax kuch is tarah hota hai:
// Traditional function
// function add(a, b) {
//     return a + b;
//   }
//   // Arrow function
//   const add = (a, b) => a + b;
// example 2
// Arrow functions ko ham objects ke methods ke andar bhi use kar sakte hain.
// Traditional function
// let user = {
//     name: "Ali",
//     sayHi: function() {
//       console.log("Hi, I am " + this.name);
//     }
//   };
//   user.sayHi(); // Output: Hi, I am Ali
//   // Arrow function
//   let user2 = {
//     name: "Sara",
//     sayHi: () => {
//       console.log("Hi, I am " + this.name);
//     }
//   };
//   user2.sayHi(); // Output: Hi, I am undefined
// <-----------------------------------------------END--------------------------------------------------->
// for loop
// for (initialExpression;  condition;  updateExpression) {
//      for loop body
// }
// (loop counting starts from 0)
// for (let i = 0; i < 3; i++){       // Output    // Hello world
//     console.log("Hello world")                  // Hello world
// }                                               // Hello world
// Initial value: let i = 0 (counting starts from 0)
// Condition: i < 3 (loop chalta hai jab tak i 3 se chhota hai)
// Increment: i++ (har iteration ke baad i ki value 1 se badh jaati hai)
// Pehla iteration: i = 0 (Hello world print hota hai)
// Doosra iteration: i = 1 (Hello world print hota hai)
// Teesra iteration: i = 2 (Hello world print hota hai)
// Jab i 3 ho jaata hai, condition i < 3 false ho jaati hai, isliye loop ruk jaata hai.
// <-----------------------------------------------END--------------------------------------------------->
// while loop
// While loop repeatedly block of code ko exicute karta rehta hai jab tak uski condition true rehti hai
// Jab condition false ho jaati hai, loop band ho jaata hai
// while loop ham tab use karte hain jab hamen nahi pata hota ke loop kitni bar chlana hai
// bas condition ke true rehny tak code ko bar bar exicute karte rehna hai...  
// // example 1
// let number = 0;
// // // is loop ki counting bhi zero se start hoti hai
// while (number <= 5) {
//     console.log(number);
//     number++;
// }
// console.log ('This is final value ', number);
// // output in seperate line  0 1 2 3 4 5
// example 2
// import inquirer from 'inquirer';
// let keepGoing = true;
// while (keepGoing) {
//     const answer = await inquirer.prompt([
//         {
//             name: 'response',
//             message: 'Do you want to continue? (yes/no)',
//             type: 'input'
//         }
//     ]);
//     if (answer.response.toLowerCase() === 'no') {
//         keepGoing = false;
//     } else {
//         console.log('Continuing...');
//     }
// }
// <-----------------------------------------------END--------------------------------------------------->
// do while loop
// do while loop ka use ham tab karte hain jab hamen block of code ko kam-se-kam aik dafa exicute kar ke.
// phir condition check karty huy decide karna hai ke loop ko dubara chlana hai ya nahi.
// do while loop se ham user se tab tak bar bar input lete rehty hain jab tak ke wo correct information
// put nahi karta acces karne ke liye...
// example 1
// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 5);
// example 2
// ye loop tab tak bar bar chalta rhega jab tak isme correct answer nahi dety
// import inquirer from "inquirer"
// let correctAnswer = "paris";
// let userAnswer;
// do {
//     let response = await inquirer.prompt([
//         {
//             type: 'input',
//             name: 'answer',
//             message: 'What is the capital of France?'
//         }
//     ]);
//     userAnswer = response.answer.toLowerCase();
//     if (userAnswer === correctAnswer) {
//         console.log("Correct answer");
//     } else {
//         console.log("Wrong answer. Try again!");
//     }
// } while (userAnswer !== correctAnswer);
// is line ka matlab hai jab tak userAnswer or correctAnswer main same jawab nahi ata tab tak iski value true hai
// lekin jese hi dono mein same jawab aega inki value false ho jaegi or loop ruk jaega....
// <-----------------------------------------------END--------------------------------------------------->
// for in loop
// ye loop object ki key values paires ko aik aik kar ke apne andar get karta hai or unko sepearte line mein
// print krwa deta hai or is se ham array list ko bhi print krwa sakty hain lekin mostly ye object ke liye use hota hai
// array ke liye ham for of loop ka use karte hain...
// example 1
// let shoaib: {name: string, age: number, adress: string} = {
//     name: "shoaib",
//     age: 23,
//     adress: "mai nahi btao ga"
// };
// // start for in loop
// for (let data in shoaib){
//     console.log(`${data} ${shoaib[data]}`)
// }
let shoaib = {
    name: "shoaib",
    age: 23,
    address: "mai nahi btao ga"
};
// Start for in loop
for (let key in shoaib) {
    console.log(`${key}: ${shoaib[key]}`);
}
export {};
// <-----------------------------------------------END--------------------------------------------------->
// for of loop
// ye loop array ki list mein se har element ko aik aik kar ke apne andar get karta hai or isy seperate line mein 
// print krwa deta hai...
// let arrayName: string[] = ["shoaib", "shahzaib", 'arshad', "asif"];
// for (let arrO of arrayName){
//     console.log(arrO)     // Output in seperate line:  shoaib shahzaib arshad asif
// };
// <-----------------------------------------------END--------------------------------------------------->
