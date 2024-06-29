
// Cover Arthmatic Operaters
// 1 + (Addition)             
// 2 – (Subtraction)
// 3 * (Multiplication)
// 4 / (Division)
// 5 % (modulus or Reminder)
// 6 ++ Unary plus (Increment) & — (Decrement) inko Unary plus & Unary minus operaters bhi kaha jata hai...
// 8 ** (Exponentiation operator)

// <------------------------------------------End-------------------------------------------->
// Addition +

let firstValue: number = 25;
let secondValue: number = 23;

let final: number = firstValue + secondValue;
console.log(final); // output 48


// Addition + second example

let firstValue2: number = 25;
let secondValue2: number = 23;
let thirdValue : number = 24

firstValue = 20;
thirdValue = 18;

let final2: number = firstValue2 + secondValue2 + thirdValue;
console.log(final2);  // output 61

// <------------------------------------------End-------------------------------------------->
// Subtraction -

let firstValue3: number = 25;
let secondValue3: number = 23;

let final3: number = firstValue3 - secondValue3;
console.log(final3);


// Subtraction - second example

let firstValue4: number = 25;
let secondValue4: number = 23;

firstValue = 3
secondValue = 2

let newValue: number = 33

let final4: number = firstValue4 - secondValue4 + newValue;
console.log(final4);  // output 34

// <------------------------------------------End-------------------------------------------->
// Multiplication *

let firstValue5: number = 5;
let secondValue5: number = 3;

let final5: number = firstValue5 * secondValue5;
console.log(final5);  // output 30


// Multiplication * second example

let firstValue6: number = 5;
let secondValue6: number = 3;
let thirdValue2: number = 2

let final6: number = firstValue6 * secondValue6 * thirdValue2;
console.log(final6);  // output 30

// <------------------------------------------End-------------------------------------------->
// // division /

let firstValue7: number = 25;
let secondValue7: number = 3;

let final7: number = firstValue7 / secondValue7;
console.log(final7);   // output 8.333333333333334


// division / second example

let firstValue8: number = 25;
let secondValue8: number = 3;

let final8: string = "firstValue8 / secondValue8";
console.log(final8); // output: firstValue / secondValue

// <------------------------------------------End-------------------------------------------->
// modulus %

let firstValue9: number = 5;
let secondValue9: number = 2;

let final9: number = firstValue9 % secondValue9;
console.log(final9); // output 1

// % ye operater first-Value ko second-Value se devide karega or wo value nikaal kar dega 
// jo equaly devide nahi ho sakti. matlab 5 rupe 2 logo ko devide karenge to sirf aik rupya bachega 
// jo un 2 logo ko equaly nahi mil sakta. isliye hmara answer wahi hoga 1......


// modulus % second example

let firstValue10: number = 2;
let secondValue10: number = 5;

let final10: number = firstValue10 % secondValue10;
console.log(final10); // output 2

// iska output isliye 2 aya kiyun ke 2 rupe equaly 5 logo ko devide nahi ho sakty...


let newName: number = 22;
let oldName: number = 22;

let final11: number = newName % oldName;
console.log(final11); // output 0




// <------------------------------------------End-------------------------------------------->
// 6_ Increment ++


// verible++
// isko post incriment kehty hain

// ++verible
// isko preincriment kehty hain




let value1: number = 5;
let value2: number = 6;

//  value1 ++

let final12: number = value1 ++ ;
console.log(final12); // output 5


// iski value 5 isliye aai kiyun ke Visual studio code Top ki left side se 
// code ko parhna shuro karta hai. isi wajah se isne pehly verible ko parha to uski 
// value hamen print kar ke dey di. or phir isne bad mein operater ko dekha to ye dosri dafa iska
// verible name run hoga to iski value ko dubara se add kar lega.....





// 6_ Increment ++ second example

let value3: number = 5;
let value4: number = 6;

value3 ++ 

let final13: number = value3 ;
console.log(final13); // output 6


// iski value 5 isliye aai thi kiyun ke Visual studio code Top ki left side se 
// code ko parhna shuro karta hai. isi wajah se isne pehly verible ko parha to uski 
// value hamen print kar ke dey di. or phir isne bad mein operater ko dekha to ye verible name jab dosri dafa 
// print krwaya jaega tab ye 1 or value ka inciment karega.....





// 6_ Increment ++ third example

let value5: number = 5;
let value6: number = 6;

value5 ++ 

console.log(++ value1); // output 7






// 6_ Increment ++ 4th example

let value7: number = 5;
let value8: number = 6;

value7++ // 5+1 = 6

console.log(value7 ++); // output 6
console.log(value7);    // output 7






// 6_ Increment ++ 5th example

let a: number = 5;
let b: number = 6;

 ++a     // 5+1 = 6
 a++     // 6+1 = 7
 ++a     // 7+1 = 8

console.log(a); // output 8





// 6_ Increment ++ 6th example

let a2: number = 10;
let b2: number = 6;

 ++a2  // 10+1 = 11

console.log(a2++); // output 11 // darect console.log mein incriment karne se iski value wahi rhegi jo thi
console.log(a2);  // lekin agr usi verible ko dubara se print krwaenge to uski value tab increase hogi...
//                  output 12


// <------------------------------------------End-------------------------------------------->
// 6 Decrement --

// verible--
// isko post decrement kehty hain

// --verible
// isko predecriment kehty hain



let a3: number = 10;
let b3: number = 6;

 --a3;  // 10-1 = 9

console.log(a3);   // output 9
console.log(a3--); // output 9
console.log(a3);   // output 8



let a4: number = 10;
let b4: number = 6;

 let c
 c = a4++ + ++a4 + ++b4 + b4++ + a4-- + b4--    // my opinion(51)
 //   10     12     7      6      10    6       gpt > output(54)
console.log(c);                        //  VS  > output(56)


// a ki initial value hai 10, aur b ki initial value hai 6.

// a++ mein, a ki value pehle use hoti hai phir increment hoti hai, to yeh 10 hai.
// ++a mein, pehle a increment hoti hai phir use hoti hai, to yeh 12 hai.
// ++b mein, b ki value pehle increment hoti hai phir use hoti hai, to yeh 7 hai.
// b++ mein, pehle b ki value use hoti hai phir increment hoti hai, to yeh 6 hai.
// a-- mein, a ki value pehle use hoti hai phir decrement hoti hai, to yeh 12 hai.
// b-- mein, b ki value pehle use hoti hai phir decrement hoti hai, to yeh 7 hai.





// // 6 Decrement -- second example from G.Class

let a5: number = 10;
let b5: number = 6;

 let c2
 c = a5++ + ++a5 + ++b + b++ +b + a5-- + b--
//    10     12     7     6   8   10     6      > output(59) my prediction... 
console.log(c);



// <------------------------------------------End-------------------------------------------->







