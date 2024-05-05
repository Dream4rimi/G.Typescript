
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

// let firstValue: number = 25;
// let secondValue: number = 23;

// let final: number = firstValue + secondValue;
// console.log(final); // output 48


// Addition + second example

// let firstValue: number = 25;
// let secondValue: number = 23;
// let thirdValue : number = 24

// firstValue = 20;
// thirdValue = 18;

// let final: number = firstValue + secondValue + thirdValue;
// console.log(final);  // output 61

// <------------------------------------------End-------------------------------------------->
// Subtraction -

// let firstValue: number = 25;
// let secondValue: number = 23;

// let final: number = firstValue - secondValue;
// console.log(final);


// // Subtraction - second example

// let firstValue: number = 25;
// let secondValue: number = 23;

// firstValue = 3
// secondValue = 2

// let newValue: number = 33

// let final: number = firstValue - secondValue + newValue;
// console.log(final);  // output 34

// <------------------------------------------End-------------------------------------------->
// Multiplication *

// let firstValue: number = 5;
// let secondValue: number = 3;

// let final: number = firstValue * secondValue;
// console.log(final);  // output 30


// // Multiplication * second example

// let firstValue: number = 5;
// let secondValue: number = 3;
// let thirdValue: number = 2

// let final: number = firstValue * secondValue * thirdValue;
// console.log(final);  // output 30

// <------------------------------------------End-------------------------------------------->
// // division /

// let firstValue: number = 25;
// let secondValue: number = 3;

// let final: number = firstValue / secondValue;
// console.log(final);    output 8.333333333333334


// // division / second example

// let firstValue: number = 25;
// let secondValue: number = 3;

// let final: string = "firstValue / secondValue";
// console.log(final); // output: firstValue / secondValue

// <------------------------------------------End-------------------------------------------->
// modulus %

// let firstValue: number = 5;
// let secondValue: number = 2;

// let final: number = firstValue % secondValue;
// console.log(final); // output 1

// % ye operater first-Value ko second-Value se devide karega or wo value nikaal kar dega 
// jo equaly devide nahi ho sakti. matlab 5 rupe 2 logo ko devide karenge to sirf aik rupya bachega 
// jo un 2 logo ko equaly nahi mil sakta. isliye hmara answer wahi hoga 1......


// modulus % second example

// let firstValue: number = 2;
// let secondValue: number = 5;

// let final: number = firstValue % secondValue;
// console.log(final); // output 2

// iska output isliye 2 aya kiyun ke 2 rupe equaly 5 logo ko devide nahi ho sakty...


// let newName: number = 22;
// let oldName: number = 22;

// let final: number = newName % oldName;
// console.log(final); // output 0




// <------------------------------------------End-------------------------------------------->
// 6_ Increment ++


// verible++
// isko post incriment kehty hain

// ++verible
// isko preincriment kehty hain




// let value1: number = 5;
// let value2: number = 6;

// //  value1 ++

// let final: number = value1 ++ ;
// console.log(final); // output 5


// iski value 5 isliye aai kiyun ke Visual studio code Top ki left side se 
// code ko parhna shuro karta hai. isi wajah se isne pehly verible ko parha to uski 
// value hamen print kar ke dey di. or phir isne bad mein operater ko dekha to ye dosri dafa iska
// verible name run hoga to iski value ko dubara se add kar lega.....





// 6_ Increment ++ second example

// let value1: number = 5;
// let value2: number = 6;

//  value1 ++ 

// let final: number = value1 ;
// console.log(final); // output 6


// iski value 5 isliye aai thi kiyun ke Visual studio code Top ki left side se 
// code ko parhna shuro karta hai. isi wajah se isne pehly verible ko parha to uski 
// value hamen print kar ke dey di. or phir isne bad mein operater ko dekha to ye verible name jab dosri dafa 
// print krwaya jaega tab ye 1 or value ka inciment karega.....





// 6_ Increment ++ third example

// let value1: number = 5;
// let value2: number = 6;

//  value1 ++ 

// console.log(++ value1); // output 7






// 6_ Increment ++ 4th example

// let value1: number = 5;
// let value2: number = 6;

//  value1++ // 5+1 = 6

// console.log(value1 ++); // output 6
// console.log(value1);    // output 7






// 6_ Increment ++ 5th example

// let a: number = 5;
// let b: number = 6;

//  ++a     // 5+1 = 6
//  a++     // 6+1 = 7
//  ++a     // 7+1 = 8

// console.log(a); // output 8





// 6_ Increment ++ 6th example

// let a: number = 10;
// let b: number = 6;

//  ++a  // 10+1 = 11

// console.log(a++); // output 11 // darect console.log mein incriment karne se iski value wahi rhegi jo thi
// console.log(a);  // lekin agr usi verible ko dubara se print krwaenge to uski value tab increase hogi...
// //                  output 12


// <------------------------------------------End-------------------------------------------->
// 6 Decrement --

// verible--
// isko post decrement kehty hain

// --verible
// isko predecriment kehty hain


// let a: number = 10;
// let b: number = 6;

//  --a;  // 10-1 = 9

// console.log(a);   // output 9
// console.log(a--); // output 9
// console.log(a);   // output 8



// let a: number = 10;
// let b: number = 6;

//  let c
//  c = a++ + ++a + ++b + b++ + a-- + b--    // my opinion(51)
//  //   10   12     7     6     10    6       gpt > output(54)
// // console.log(c);                           VS  > output(56)


// a ki initial value hai 10, aur b ki initial value hai 6.

// a++ mein, a ki value pehle use hoti hai phir increment hoti hai, to yeh 10 hai.
// ++a mein, pehle a increment hoti hai phir use hoti hai, to yeh 12 hai.
// ++b mein, b ki value pehle increment hoti hai phir use hoti hai, to yeh 7 hai.
// b++ mein, pehle b ki value use hoti hai phir increment hoti hai, to yeh 6 hai.
// a-- mein, a ki value pehle use hoti hai phir decrement hoti hai, to yeh 12 hai.
// b-- mein, b ki value pehle use hoti hai phir decrement hoti hai, to yeh 7 hai.





// // 6 Decrement -- second example from G.Class

// let a: number = 10;
// let b: number = 6;

//  let c
//  c = a++ + ++a + ++b + b++ +b + a-- + b--
// //    10   12     7     6   8    10   6      > output(59) my prediction... 
// console.log(c);



// <------------------------------------------End-------------------------------------------->







