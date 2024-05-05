// [**] Exponentiation power operater
// [%] modulus operater
// [++] [--] Unary operaters > prefix and postfix opearter  
// [+-*/] Combining operater BODMAS rules... learn
// Addition Calculater
// BMI Calculater = (Body Mass Index)
// Home Work > Addition, Subtraction, Multiplication, Devision, Exponentiation, 
// Modulud, and BMI calculater using inquirer
// [+-] Assigment operaters 
// [== != > <] Comparisson operaters 
// [ && || ! ] Logical operaters
// <-------------------------------------------END------------------------------------------->
// [**] Exponentiation power operater
// Exponentiation power operator (**) 2 numbers ko mathematical operations mein use karke
// aik number ko doosre number ki power mein raise karta hai. Iska introduction ES2016 (ES7) mein hua tha.
// let layer = 5;
// let apple= 5;
// let power = layer ** 2;
// console.log(power);   // output 25
// is quetion mein 5 ko khud 5 se multiply kiyya hai kiyun ke ye quetion aik squire hai 
// matlab iski layer mein bhi 5 apples hain or layers ki line bhi 5 hain....
// console.log( 3 ** 4); // output 81
// is question mein ham 3 ko 4 ki power mein rise karna chah rhy hain
// isko kuch is tarhn solve karna hoga 3 ko 4 dafa khud se multiply karna hoga
// 3 * 3 * 3  * 3
// 3 * 9 * 27 * 81  // output 81
// console.log(6 ** 3);      // output 216
// console.log(6 * 6 * 6);  // output 216
// <-------------------------------------------END------------------------------------------->
// [%] modulus operater
// modulud operater value ko equally devide karta hai or jo value equally devide nahi ho rhi hoti
// to ye usko print krwa deta hai jese 11 ko 3 pe divide krwaenge to sab ko rounded value yani 3/3 rupe 
// hi milenge or baqi jo 2 bachenge unko ham remainder jehty hain....
// console.log(5 % 2); // output 1
// let apple = 5;
// let bags = 2;
// let answer = apple % bags;
// console.log(answer); // output 1
// <-------------------------------------------END------------------------------------------->
// [++]  Unary operater 
// (++a) > prefix opearter  
// (a++) > postfix opearter 
// incriment krwana prefix or postfix ke zariye (++a) is mein pehly aik value ka incriment hua hai
// phir wo value (a) ke varible ko assigne hui hai isliye iska output increase ho kar aega...
// incriment krwana prefix or postfix ke zariye (a++) is mein pehly varible ki value print hogi uske bad 
// incriment ki value assign hogi iska matlab (a) ka varible jab dubara declare hoga tab postfix ki value 
// add ho jaegi...
// let a = 10;
// ++a // 11
// ++a // 12
// a++ // 13
// ++a // 14
// a++ // 15
// console.log(a); // out put 15
// let a = 5;
// let b = 2;
// let check = ++a;
// console.log(check); // output 5
// let a = 5;
// let b = 2;
// let check = a++;
// console.log(check); // output 6
// <-------------------------------------------END------------------------------------------->
// [--]  Unary operater 
// (--a) > prefix opearter  
// (a--) > postfix opearter
// (--a) > prefix opearter mein jese hi value print hogi to aik number ki value ka decriment ho jaega...
// (a--) > postfix opearter mein sab se pehly (a) ki value get ko jaegi jitni bhi hogi uske bad uske 
// decriment ki value ko read kiyya jaega iska matlab (a) ka varible jab dubara declare hoga tab us se
// aik value decrease kar di jaegi.... 
// let a = 10;
// --a // 9
// --a // 8
// a-- // 8 > 1
// --a // 6
// a-- // 6 > 1
// a-- // 4
// console.log(a); // output 4
// <-------------------------------------------END------------------------------------------->
// [++] [--] Unary operaters > prefix and postfix opearter  
// Home Work
// let a: number = 5;
// let b: number = 2;
// let c: number;
// c = ++a + a++ + --b + b-- + a + b++ + b;
// //  6   +  5  +  1  + 2     6 + 1   +  3
// console.log(c)
// <-------------------------------------------END------------------------------------------->
// [+-*/] Combining operater
// let result = 3 + 4 * 5;
// console.log(result); // output 23
// let result = 2 + 5 - 8 * 3 / 29;
// console.log(result); // drop
// <-------------------------------------------END------------------------------------------->
// import inquirer from 'inquirer'
// const Calculater = await inquirer.prompt([
//     {
//         name: "num1",
//         message: "Kindly enter your first num:",
//         type: "number"
//     },
//     {
//         name: "num2",
//         message: "Kindly enter your second num:",
//         type: "number"
//     }
// ]);
// let total: number = Calculater.num1 + Calculater.num2;
// console.log(total);
// <-------------------------------------------END------------------------------------------->
// BMI Calculater
// let weightInKg = 70;          // 70 kg
// let heightInMeters = 1.75;   // 1.75
// let bmi = weightInKg / (heightInMeters * heightInMeters);
// console.log(`Your BMI is ${bmi}`);
// console.log(70 / 1.75 * 1.75);
// <-------------------------------------------END------------------------------------------->
// Home Work > Addition, Subtraction, Multiplication, Devision, Exponentiation, 
// Modulud, and BMI calculater using inquirer
// import inquirer from "inquirer";
// let lamboCalcu = await inquirer.prompt([
//     {
//         name: "q1",
//         message: "Enter your first number:",
//         type: "number"
//     },
//     {
//         name: "q2",
//         message: "Enter your second number:",
//         type: "number"
//     },
//     {
//         name: "op",
//         message: "Please select operater to perform opration:",
//         type: "list",
//         choices: ["Addition", "Subtraction", "Multiplication", "Devision", "Exponentiation", "Modulus"]
//     }
// ]);
// if(lamboCalcu.op === "Addition"){
//    let final: number = lamboCalcu.q1 + lamboCalcu.q2;
//    console.log("Your Result: " + final);
// }
// else if(lamboCalcu.op === "Subtraction"){
//     let final: number = lamboCalcu.q1 - lamboCalcu.q2;
//     console.log("Your Result: " + final);
// }
// else if(lamboCalcu.op === "Multiplication"){
//     let final: number = lamboCalcu.q1 * lamboCalcu.q2;
//     console.log("Your Result: " + final);
// }
// else if(lamboCalcu.op === "Devision"){
//     let final: number = lamboCalcu.q1 / lamboCalcu.q2;
//     console.log("Your Result: " + final);
// }
// else if(lamboCalcu.op === "Exponentiation"){
//     let final: number = lamboCalcu.q1 ** lamboCalcu.q2;
//     console.log("Your Result: " + final);
// }
// else if(lamboCalcu.op === "Modulus"){
//     let final: number = lamboCalcu.q1 % lamboCalcu.q2;
//     console.log("Your Result: " + final);
// }
// <-------------------------------------------END------------------------------------------->
// // assigment operater +
// let c: number = 10;
// c += 5 // 15
// c += 7 // 22
// c += 9 // 31
// c += 3 // 34
// console.log(c); // output 34
// assigment operater +-
// let c: number = 10;
// c -= 5 // 5
// c += 7 // 12
// c -= 9 // 3
// c -= 3 // 0
// c += 33 // 33
// c -= 22 // 11
// c -= 3  // 8
// console.log(c); // output 8
// <-------------------------------------------END------------------------------------------->
// [== != > <] Comparisson operaters 
// 5 == 2  // false
// 5 != 2  // true
// 5 > 2   // true
// 5 < 2   // false
// let a: number = 5;
// let b: number = 2;
// let isEqual = (a == b); // false
// let isNotEqual = (a != b); // true
// let isGreaterThen = (a > b);  // true
// let isLessThen = (a < b);  // false
// <-------------------------------------------END------------------------------------------->
// [ && || ! ] Logical operaters
let a = 5;
let b = 2;
// let logicalAnd = (a > 0) && (b > 0)
// console.log(logicalAnd); // true
// let logicalOr = (a > 10) || (b > 1); 
// console.log(logicalOr);  // true
let logicalNot = !(a > 0);
console.log(logicalNot); // false
export {};
