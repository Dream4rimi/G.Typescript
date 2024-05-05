// Logic Statments > if and else-if
// Conditional Ternary operators
// Switch statments
// Self check quiz using if else
// Evaluating a Number Guess Game
// Friend checker game simple and using inquirer
// Rock Paper Scissors Game 
// Home Work > [+ - * / ** % ] Addition, Subtraction, Multiplication, Devision, Exponentiation, 
// Modulus, and  using inquirer and chalk
// Functions
// Return Functions values
// Function parameters and arguments
// function add number parameter
// function calculate [*]
// function default parameter
// function default parameter assign again in calling line
// // function Reset operater
// slide complete 190
// 1 assci code working

// <-------------------------------------------END----------------------------------------------->
// Logic Statments > if, and else-if, else


// if aur else-if logic statements TypeScript (aur baki programming languages mein bhi) 
// Inka istemal hota hai program mein aik ya multiple conditions ko check karne ke liye, 
// aur phir unke accordingly unko actions perform kiye jate hain.

// 1_ if statement: if statement aik single condition ko check karti hai aur agar ye condition true hoti hai
// to uss condition ke andar wale block ko execute karti hai. Agar condition false hoti hai, 
// to block ko skip karke program next statement pe move karta hai....

// 2_ else-if statement: else-if statement multiple conditions ko check karne ke liye use hota hai.
// Agar pehli condition true nahi hoti to dusri condition check ki jati hai.
// Agar koi bhi condition true ho jati hai to uss condition ke andar wale block ko execute kiya jata hai.

// 3_ else statment: Agar koi bhi condition true nahi hoti  to else block execute hota hai...


// let weather: string = "cloudy";

// if(weather === "Raining"){
//     console.log("You wear a raincoat")
// }
// else if(weather === "cloudy"){
//     console.log("You wear a light jacket")
// }
// else{
//     console.log("You wear a sunglasses")
// }

// <-------------------------------------------END----------------------------------------------->
// Conditional Ternary operators


// Conditional ternary operator, ? mark aur : symbol se represent kiya jata hai, 
// ye aik condition ko check karta hai, aur phir doosre 2 expressions mein se 
// aik ko return karta hai, depending on whether the condition true hai ya false.

// conditional ternary operator mein sirf 2 values hoti hain jo condition ke basis par choose kie jati hain: 
// aik jab condition true hoti hai aur doosri jab condition false hoti hai.


// // let isHungry: boolean = true;      // output apple
// let isHungry: boolean = false;       // output water

// let snack = isHungry ? "apple" : "water";
// console.log(`You should have some ${snack}.`);

// <-------------------------------------------END----------------------------------------------->
// Switch statments

// Switch statement ek aisa programming construct hai jo ek variable ya expression ki
// alag-alag values ko check karta hai or Uske basis par wo alag-alag actions ko execute karta hai. 
// Ye multiple if-else if-else statements ki jagah use kiya jata hai,
// specially jab aapko ek variable ke kuch alag-alag values ke liye alag-alag kaam karna hota hai.

// let dayOff: string = "Sunday";

// switch (dayOff) {

//     case "Saturday":
//         console.log("Go Hiking");
//      break;

//     case "Sunday":
//         console.log("Read a book");
//      break;

//     default:
//          console.log("Work on a hobby")
// }

// <-------------------------------------------END----------------------------------------------->
// Self check quiz using if else

// let answer: string = "correct";

// if(answer === "correct"){
//     console.log("You guess right!")
// }
// else{
//     console.log("sorry this is not correct")
// }

// <-------------------------------------------END----------------------------------------------->
// Evaluating a Number Guess Game

// let guess: number = 7;
// let target: number = 5;

// if (guess < target){
//     console.log("You guess is too low");
// }
// else if(guess > target){
//     console.log("You guess too high")
// }
// else{
//     console.log("You guessed correctly!")
// }


// <-------------------------------------------END----------------------------------------------->
// Friend checker game 


// // let isFriend: string = "Ameen";  // output Ameen is your friend
// let isFriend: string = "Hamza";     // output Hamza is not your frind

// if(isFriend === "Ameen" || isFriend === "Daniyal Nagori"){
//     console.log(`${isFriend} is Your friend!`)
// }
// else{
//     console.log(`${isFriend} is not your friend`)
// }


// example 2

// Friend checker game simple and using inquirer


// import inquirer from 'inquirer'

// let Check_friend = await inquirer.prompt([
//     {
//         name: "name",
//         message: "What is your friend Name?",
//         type: "string"
//     }
// ]);

// if(Check_friend.name === "Ameen" || Check_friend.name === "Danyal Nagori" || Check_friend.name === "Shoaib"){

//     console.log(`${Check_friend.name} is your friend`)
// }
// else{
//     console.log(`${Check_friend.name} is not your friend`)
// }
// <-------------------------------------------END----------------------------------------------->
// Rock Paper Scissors Game 

// let player1: string = "Rock";
// let player2: string = "Scissors"

// if(player1 === player2){
//     console.log("its a tie!")
// }
// else if((player1 === "Rock" && player2 === "Scissors") ||
//         (player1 === "Scissors" && player2 === "paper") ||
//         (player1 === "paper" && player2 === "Rock")) {

//     console.log("Player 1 win!")
// }
// else {
//     console.log("Player 2 win!")
// }


// <-------------------------------------------END----------------------------------------------->
// Home Work > [+ - * / ** % ] Addition, Subtraction, Multiplication, Devision, Exponentiation, 
// Modulus, and  using inquirer and chalk



// import inquirer from "inquirer";
// import chalk from 'chalk'

// let lamboCalcu = await inquirer.prompt([
//     {
//         name: "q1",
//         message: chalk.bgYellowBright.black.bold("Enter your first number:"),
//         type: "number"
//     },
//     {
//         name: "q2",
//         message: chalk.bgBlue.white("Enter your second number:"),
//         type: "number"
//     },
//     {
//         name: "op",
//         message: chalk.bgGray.black("Please select operater to perform opration:"), 
//         type: "list",
//         choices: [ chalk.green("Addition"), chalk.red("Subtraction"), chalk.yellow("Multiplication"), 
//         chalk.blue("Devision"), chalk.hex("Exponentiation"), chalk.italic.redBright("Modulus")]
//     }
// ]);

// if(lamboCalcu.op === chalk.green("Addition")){
//    let final: number = lamboCalcu.q1 + lamboCalcu.q2;
//    console.log( chalk.red.bold("Your Result: ") + chalk.green(final) );
// }
// else if(lamboCalcu.op === chalk.red("Subtraction")){
//     let final: number = lamboCalcu.q1 - lamboCalcu.q2;
//     console.log( chalk.red.bold("Your Result: ") + chalk.green(final));
// }
// else if(lamboCalcu.op === chalk.yellow("Multiplication")){
//     let final: number = lamboCalcu.q1 * lamboCalcu.q2;
//     console.log( chalk.red.bold("Your Result: ") + chalk.green(final));
// }
// else if(lamboCalcu.op === chalk.blue("Devision")){
//     let final: number = lamboCalcu.q1 / lamboCalcu.q2;
//     console.log( chalk.red.bold("Your Result: ") + chalk.green(final));
// }
// else if(lamboCalcu.op === chalk.hex("Exponentiation")){
//     let final: number = lamboCalcu.q1 ** lamboCalcu.q2;
//     console.log( chalk.red.bold("Your Result: ") + chalk.green(final));
// }
// else if(lamboCalcu.op === chalk.italic.redBright("Modulus")){
//     let final: number = lamboCalcu.q1 % lamboCalcu.q2;
//     console.log( chalk.red.bold("Your Result: ") + chalk.green(final));
// }



// <-------------------------------------------END----------------------------------------------->
// Functions

// Code Reusability: Function ko bana kar ham code ko dohraney se bach sakte hain 
// Agar hamen kisi functionality ko baar baar use karna hai to ham aik function bana kar usko multiple times
// call kar sakte hain is se code ko chota or behtar bana sakty hain.

// Functions ka istemal karke ham code ko chote chote parts mein divide kar sakte hain jise ham
//  alag alag jagahon par re-use kar sakte hain is tarhan ham code ko aik sath likhne ke bajaye usy small manageable
//  pieces mein divide kar sakte hain jo code ki readability or maintainability ko improve karta hai.


// // keyword     name()  statment
//    function  halfFryEgg() {

//     let cocked = 1 + 1.5 + 2;
// //             Egg + Butter + Salt

//     console.log(cocked) // printing 4.5
// }

// halfFryEgg() // function calling line

// <-------------------------------------------END----------------------------------------------->
// Return Functions values


// function halfFryEgg(){

//     let cocked = 1 + 1.5 + 2;

//     return cocked;
// }

// let responce: number = halfFryEgg();
// console.log(responce);  // output 4.5

// <-------------------------------------------END----------------------------------------------->
// Function parameters and arguments


// function halfFryEgg(egg: number, butter: number, salt: number): number {

//    return egg + butter + salt;
// }

// let responce = halfFryEgg(1, 1.5, 2);
// console.log(responce); // output 4.5


// <-------------------------------------------END----------------------------------------------->
// function add number parameter


// function addNumbers(a: number, b: number): number{

//     return a + b;
// }

// let responce = addNumbers(5, 3);
// console.log(responce); // output 8

// <-------------------------------------------END----------------------------------------------->
// function calculate [*]


// function calculateArea(width: number, height: number): number{

//     return width * height;
// }

// let responce: number = calculateArea(100, 50);
// console.log(responce); // output 5000


// <-------------------------------------------END----------------------------------------------->
// function default parameter
// If you forget an ingredient, you have a backup...


// function halfFryEgg(
//     egg: number = 1, butter: number = 1.5, salt: number = 2
// ): number {

//     return egg + butter + salt;
// };

// let responce: number = halfFryEgg();
// console.log(responce);  // output 4.5

// <-------------------------------------------END----------------------------------------------->
// function default parameter assign again in calling line


// function halfFryEgg(
//     egg: number = 1, butter: number = 1.5, salt: number = 2
// ): number {

//     return egg + butter + salt;
// };

// let responce: number = halfFryEgg(1, 1.5, 3);
// console.log(responce);  // output 5.5

// <-------------------------------------------END----------------------------------------------->
// // function Reset operater
// // accepting an unknown number of ingredients

// Rest operator ... ka use karte hain jab hamen aik function mein bohut sary arguments ka istemal karna hota hai
// Jab ham function define karte hain to ham ... ke sath aik parameter specify kar sakte hain jo rest parameter hota hai
// Yeh parameter baki sab arguments ko aik array mein collect karta hai.
// Iska faida ye hai ke hamen function ke parameters ki tadad pehle se pata nahi hoti ham jitne bhi 
// arguments pass karenge woh sab rest parameter ke array mein collect ho jayenge.

// Imagine karen ke ham aik online shopping website develop kar rahe hain or hamen aik function chahiye jo users ke
// cart mein add kiye gaye sab items ka total calculate karen. Kyun ke USERS alag alag quantities mein alag alag items ko 
// add kar sakte hain to hamen function ko flexible banana hoga taaky wo jitne bhi items ka total calculate karna chahen
// wo kar saken.

// function halfFryEgg(egg: number = 1, ...ingredients: number[]){

//     console.log(egg);
//     console.log(ingredients);
// };

// halfFryEgg(1, 1.5, 2, 5);   // output  1 [1.5 2, 5]


// Example 2

// function calculateTotal(discount: number, ...items: number[]) {
//     let total = 0;
//     for (let item of items) {
//         total += item;
//     }
//     return total - discount;
// }

// // Function call with variable number of arguments
// let totalAmount = calculateTotal(50, 100, 200, 300);
// console.log(totalAmount);    // Output: 550


// Notes
// Is example mein calculateTotal function ka ...items: number[] rest parameter hai jis mein jitne bhi arguments pass
// karenge wo unko aik hi array mein collect kar leta hai. Phir total calculate kiya jata hai aur discount subtract kiya
// jata hai Is se users ko jitne bhi items ka total calculate karna hai wo kar sakta hai or function flexible bana
// rehta hai.

// <-------------------------------------------END----------------------------------------------->
// Home Work function Salery tex 


// function taxSlab(salery: number){

//     let slab = ""

//     if(salery >= 100000){
//         slab = '17%'
//     }
//     else if(salery >= 70000){
//         slab = "15%"
//     }
//     else if(salery >= 25000){
//         slab = "10%"
//     }
//     else{
//         console.log("Koi faida nahi kutty ki tarhn mehnat karne ka");
//     }

//     return slab;
// }

// let print = taxSlab(25000);
// console.log(print);  // 10%

// <-------------------------------------------END----------------------------------------------->
// Home work function

// ek online store hai jahan ap products ki prices ko calculate karte hain .aap different discount laga sakty hain
// jaise 10% 20% etc. to ap aik function create kar sakty hain jo discount percentage ko le or phir uss percentage ke
// hisab se final price ko calculate kare.



function online_store(product_price: number, discount: number){

    let discount_vew = (product_price * discount) / 100;
 
    let total_price = product_price - discount_vew;
 
    return total_price;
 }
 
 let product: number = 700;
 let disco: number = 30;
 
 let final_price = online_store(product, disco);
 console.log(`Your final price is ${final_price}, after ${disco}% discount.`);


 // <-------------------------------------------END----------------------------------------------->
