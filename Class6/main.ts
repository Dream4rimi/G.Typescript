// [**] Exponentiation power operater
// [%] modulus operater
// [++] [--] Unary operaters > prefix and postfix opearter  
// [+-*/] Combining operater BODMAS rules... learn
// Addition Calculater
// BMI Calculater = (Body Mass Index)
// [+= -=] Assigment operaters 
// [== != > <] Comparisson operaters 
// [ && || ! ] Logical operaters

// <-------------------------------------------END------------------------------------------->
// [**] Exponentiation power operater

// Exponentiation power operator (**) 2 numbers ko mathematical operations mein use karke
// aik number ko doosre number ki power mein raise karta hai. Iska introduction ES2016 (ES7) mein hua tha.


let layer = 5;
let apple= 5;

let power = layer ** 2;
console.log(power);   // output 25


// is quetion mein 5 ko khud 5 se multiply kiyya hai kiyun ke ye quetion aik squire hai 
// matlab iski layer mein bhi 5 apples hain or layers ki line bhi 5 hain....


console.log( 3 ** 4); // output 81


// is question mein ham 3 ko 4 ki power mein rise karna chah rhy hain
// isko kuch is tarhn solve karna hoga 3 ko 4 dafa khud se multiply karna hoga
// 3 * 3 * 3  * 3
// 3 * 9 * 27 * 81  // output 81



console.log(6 ** 3);      // output 216

console.log(6 * 6 * 6);  // output 216


// <-------------------------------------------END------------------------------------------->
// [%] modulus operater

// modulud operater value ko equally devide karta hai or jo value equally devide nahi ho rhi hoti
// to ye usko print krwa deta hai jese 11 ko 3 pe divide krwaenge to sab ko rounded value yani 3/3 rupe 
// hi milenge or baqi jo 2 bachenge unko ham remainder jehty hain....


console.log(5 % 2); // output 1

let apple2 = 5;
let bags = 2;

let answer = apple2 % bags;
console.log(answer); // output 1


// <-------------------------------------------END------------------------------------------->
// [++]  Unary operater 
// (++a) > prefix opearter  
// (a++) > postfix opearter 

// incriment krwana prefix or postfix ke zariye (++a) is mein pehly aik value ka incriment hua hai
// phir wo value (a) ke varible ko assigne hui hai isliye iska output increase ho kar aega...

// incriment krwana prefix or postfix ke zariye (a++) is mein pehly varible ki value print hogi uske bad 
// incriment ki value assign hogi iska matlab (a) ka varible jab dubara declare hoga tab postfix ki value 
// add ho jaegi...


let a2 = 10;

++a2 // 11
++a2 // 12
a2++ // 12 > pending 1
++a2 // 14 > add here 
a2++ // 14 > pending 1  ye neechy console mein add hogi value

console.log(a2); // out put 15


let a3 = 5;
let b2 = 2;

let check = ++a3;
console.log(check); // output 6


let a4 = 5;
let b3 = 2;

let check2 = a4++;
console.log(check2); // output 5

// <-------------------------------------------END------------------------------------------->
// [--]  Unary operater 
// (--a) > prefix opearter  
// (a--) > postfix opearter

// (--a) > prefix opearter mein jese hi value print hogi to aik number ki value ka decriment ho jaega...
// (a--) > postfix opearter mein sab se pehly (a) ki value get ko jaegi jitni bhi hogi uske bad uske 
// decriment ki value ko read kiyya jaega iska matlab (a) ka varible jab dubara declare hoga tab us se
// aik value decrease kar di jaegi.... 



let a5 = 10;
--a5 // 9
--a5 // 8
a5-- // 8 > 1
--a5 // 6
a5-- // 6 > 1
a5-- // 4
console.log(a5); // output 4

// <-------------------------------------------END------------------------------------------->
// [++] [--] Unary operaters > prefix and postfix opearter  
// Home Work

let a6: number = 5;
let b5: number = 2;
let c: number;

c = ++a6 + a6++ + --b5 + b5-- + a6 + b5++ + b5;
//   6   +  6   +   1  + 1    +  6 +  1   +  2
//  p add > 1    p sub > 1

console.log(c)

// <-------------------------------------------END------------------------------------------->
// [+-*/] Combining operater


let result1 = 3 + 4 * 5;

console.log(result1); // output 23

let result2 = 2 + 5 - 8 * 3 / 29;

console.log(result2); // drop


// <-------------------------------------------END------------------------------------------->
import inquirer from 'inquirer'


const Calculater = await inquirer.prompt([
    {
        name: "num1",
        message: "Kindly enter your first num:",
        type: "number"
    },

    {
        name: "num2",
        message: "Kindly enter your second num:",
        type: "number"
    }
]);

let total: number = Calculater.num1 + Calculater.num2;
console.log(total);

// <-------------------------------------------END------------------------------------------->
// BMI Calculater


let weightInKg = 70;          // 70 kg
let heightInMeters = 1.75;   // 1.75

let bmi = weightInKg / (heightInMeters * heightInMeters);
console.log(`Your BMI is ${bmi}`);

console.log(70 / 1.75 * 1.75);


// <-------------------------------------------END------------------------------------------->
// // assigment operater +

let c2: number = 10;
c2 += 5 // 15
c2 += 7 // 22
c2 += 9 // 31
c2 += 3 // 34
console.log(c2); // output 34


// assigment operater +-

let c3: number = 10;
c3 -= 5 // 5
c3 += 7 // 12
c3 -= 9 // 3
c3 -= 3 // 0
c3 += 33 // 33
c3 -= 22 // 11
c3 -= 3  // 8
console.log(c3); // output 8

// <-------------------------------------------END------------------------------------------->
// [== != > <] Comparisson operaters 

5 == 2  // false
5 != 2  // true
5 > 2   // true
5 < 2   // false


let a7: number = 5;
let b6: number = 2;

let isEqual = (a7 == b6); // false
let isNotEqual = (a7 != b6); // true
let isGreaterThen = (a7 > b6);  // true
let isLessThen = (a7 < b6);  // false

// <-------------------------------------------END------------------------------------------->
// [ && || ! ] Logical operaters


let a: number = 5;
let b: number = 2;

let logicalAnd = (a > 0) && (b > 0)
console.log(logicalAnd); // true

let logicalOr = (a > 10) || (b > 1); 
console.log(logicalOr);  // true

let logicalNot = !(a > 0); 
console.log(logicalNot); // false
