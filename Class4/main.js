"use strict";
// mix array define string + number
// object
// ibm calculater
// student marksheet + math + english + Urdu + Scince = totals marke with percentage with grades
// <------------------------------------------End------------------------------------------------>
// // normal array 
// let personN: (string)[] = ["Shoaib", "Age", 23, "city"]                 // type error
// // define mix array
// let person2: (string | number)[] = ["Shoaib", "Age", 23, "city"]       // working
// let array: (string | number | boolean)[] = ["shoaib", "asif", 23, true, "ahsan", "baloch"];
// console.log(array)  // working
// <------------------------------------------End------------------------------------------------>
// object kya hota hai jese ye (person) hai iski khud ki kuch property hongi 
// jese iski ankhen iske baal iski body waghera
// ye interface user ki wajah se define karte hain kiyun ke agr wo hmari di hui in data types ke ilawa
// koi dosri data types enter karega to usy error milega kiyun ke ham ne already
// data types person interface mein bata rakhi hain....
// interface person {
//     name: string,
//     age: number,
//     student: true,
//     natinality: string,
// }
// // ye user ka input hai agr wo name mein (string) data type hi dalega to acces hoga warna nahi
// // ya phir (age) number hi dalega tab hi program chalega warna isme koi dosri value pass nahi kar sakta user....
// let person: person = {  // isme interface mein jis naam ki data type creat karenge usy yahn assign karne parega
//     name: 'shoaib',  // in dono ko key value paires kaha jata hai
//     age: 23,
//     student: true,
//     natinality: 'pakistan', 
// }
// console.log(person);
// // <------------------------------------------End------------------------------------------------>
// ibm calculater
// let weight = 70;
// let height = 1.75;
// let ibm: number = weight / (height * height);
// console.log("Your BMI is:", ibm); 
// // <------------------------------------------End------------------------------------------------>
// student marksheet + math + english + Urdu + Scince = totals marke with percentage with grades
let math = 3;
let english = 26;
let urdu = 70;
let scince = 8;
const Total_Number = math + english + urdu + scince;
let percentage = Total_Number / 300 * 100;
// console.log(percentage)  // output 66.33333333333333
if (percentage >= 90 && percentage <= 100) {
    console.log(`You got ${percentage}% Marks and A+ grade`);
}
else if (percentage >= 80) {
    console.log(`You got ${percentage}% Marks and B grade position`);
}
else if (percentage >= 70) {
    console.log(`You got ${percentage}% Marks and C grade position`);
}
else if (percentage >= 60) {
    console.log(`You got ${percentage}% Marks and D grade position`);
}
else if (percentage >= 40) {
    console.log(`You got ${percentage}% Marks and You are Pass`);
}
else if (percentage < 40) {
    console.log(`You got ${percentage}% Marks and You are Fail bacho`);
}
;
