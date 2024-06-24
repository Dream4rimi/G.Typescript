// full modules topic
// TS casting from W3 School
// Synchronous and  Asynchronous method
// promises
// API
// fetch
// UI
// start union lttrals 
// type alias
// enum
// class
// Oops
// object oriented full program
// <--------------------------------------END--------------------------------------->
// module example 1
//  function 1
// export function City_country(City: string, Country: string):string {
//     return `${City} is in ${Country}`
//  };
//  // funtion 2
//  export function Programer(Name: string, age: number, skills: string){
//      let develperdetails = `programer Name: ${Name}, he is ${age} years old And he is ${skills} language expert`;
//      return develperdetails
//  };
// <--------------------------------------END--------------------------------------->
// module example 2
// function heeling(product_price: number, discount: number){
//    let disc =  product_price * discount / 100;
//    let final = product_price - disc;
//    return final;
// };
// export default heeling;
// <--------------------------------------END--------------------------------------->
// module example 3
// function add(val_1: number, val_2: number){
//   return val_1 + val_2
// };
// // function 2
// function subtract(val_1: number, val_2: number){
//    return val_1 - val_2
//  };
// // function 3
//  function devide(val_1: number, val_2: number){
//    return val_1 / val_2
//  };
// // All functions in one object
//  let tranfer = {
//    add,
//    subtract,
//    devide,
//  };
//  // object export
//  export default tranfer;
// <--------------------------------------------END------------------------------------------------->
// module example 4
// const a = 9;
// const b = 10;
// const c = 5;
// export {b , c, a};
// <--------------------------------------------END------------------------------------------------->
// Ts casting from w3 school
// let x: unknown = "Shoaib";
// console.log((x as string).length); // Output 6
// example 2
// let x2: unknown = 4;
// console.log((x2 as string).length) // output undefined
// example 3
// let x3: unknown = "hello";
// console.log((x3 as string).length)  // output 5
// example 3
// let x4: unknown = "hello";
// let x5 = (x4 as number);
// x5 = "hello";  // output error kiyun ke ab ye veriable number type ban chuka hai....
// <--------------------------------------------END------------------------------------------------->
// Synchronous method
// Synchronous mthod mein code aik ke baad aik line-by-line execute hota hai. Har pehli statement execute hone ke baad 
// dosri statement execute hoti hai. Yeh ek tarteebi (sequential) execution hoti hai.
// Real-World Example
// Aap sochiye aap bakery par gaye or aik ke baad aik kaam karte hain
// Aap order dete hain.
// Bakery wala apka order leta hai.
// Bakery wala cake banata hai.
// Aap cake le kar wapas aate hain.
// Yeh sab steps ek ke baad ek hote hain. Har step ke baad agla step hota hai.
// console.log(1)   // 1
// console.log(2)   // 2
// console.log(3)   // 3
// console.log(4)   // 4
// console.log(5)   // 5
// <--------------------------------------------END------------------------------------------------->
// Asynchronous method
// Asynchronous mthod mein kuch operations background mein run hote hain or code apni execution ko continue 
// karta rehta hai bina rukawat ke. Jab background operation complete ho jata hai tab callback ya promise use kar ke
// result handle kiya jata hai
// Real-World Example
// Ap phir se bakery par gaye lekin is bar ap kaam asynchonously karte hain:
// Ap order dete hain.
// Bakery wala aapko token deta hai or kehta hai ke cake banne mein waqt lagega.
// Ap wapas apne kaam karne lagte hain.
// Jab cake ban jata hai, bakery wala apko notify karta hai.
// Aap cake le kar wapas ate hain.
// Is example mein ap cake ban-ne tak ka wait nahi kartay, ap apne doosre kaam karte rehte hain or cake 
// ready hone par wapas bakery jate hain.
// example 1
// console.log(1);             // 1
// console.log(2);             // 2
// setTimeout(function () {    // in process
//    console.log(3);
// }, 2000);
// console.log(4);             // 4
// console.log(5);             // 5
//                             // 3
// <--------------------------------------------END------------------------------------------------->
// example 2
// let a: number = 1;
// let b: number = 2;
// setTimeout(function () {
//    console.log(a);       // second ye print kiyya jaega  
// }, 1000);
// console.log(b); // first ye prnit kiyya jaega
// a = 10;
//  output 2
//         1
// (a) ki value 1 hai but jab aik second ka time lagega (a) ki value exicute hony mein tab tak vs code (b) ki value 
// print kar ke (a) ki dosri neechy wali value parh lega or uski jo value define hogi usy print kar dega...  
// <--------------------------------------------END------------------------------------------------->
// example 3
// console.log(1);
// console.log(2);
// setTimeout(() => {
//    console.log(3);
// }, 500);
// for(let i = 1; i < 5; i++){
//    console.log(`inside loop ${i}`)
// };
// output
// 1
// 2
// inside loop  1
// inside loop  2
// inside loop  3
// inside loop  4
// 3
// is example mein sab se pehly 1 ka console print hoga phir 2 ka uske bad jab dekha jaega ke 3 ka console thora time 
// lega exicute hony mein tab tak neechy wala loop chala diyya jaega jese hi loop complete hoga wesy hi 3 print ho jaega.
// <--------------------------------------------END------------------------------------------------->
// example 4
// console.log(1);
// console.log(2);
// setTimeout(() => {
//    console.log(3);
// }, 500);
// for(let i = 1; i < 5; i++){
//    console.log(`Inside loop ${i}`)
// };
// console.log(4);
// console.log(4);
// console.log(4);
// output
// 1
// 2
// Inside loop 1
// Inside loop 2
// Inside loop 3
// Inside loop 4
// 4
// 4
// 4
// 3
// <--------------------------------------------END------------------------------------------------->
// example 5
// console.log(1);
// console.log(2);
// setTimeout(() => {
//    console.log(3);
// }, 500);
// for(let i = 1; i < 5; i++){
//    console.log(`Inside loop ${i}`)
// };
// console.log(4);
// setTimeout(() => {
//    console.log(5)
// }, 1000);
// console.log(6);
// Output 
// 1
// 2
// Inside loop 1
// Inside loop 2
// Inside loop 3
// Inside loop 4
// 4
// 6
// 3
// 5
// Note
// is example mein sab se pehly 1 ka console print hua phir 2 ka uske bad 3 ke console mein time lag rha tha isliye usy
// chor kar vs code ne loop exicute kar diyya uske bad aik or 4 ka console print krwa diyya phir 4 ke bad 
// 5 ka print hona tha lekin usme time lag rha tha isliye pehly 6 print kra diyya uske bad wo opar wala 3 ka
//  console print krwa diyya phir last mein 5 ka console print krwa diyya kiyun ke isme ziyada der lag rhi thi 
// <--------------------------------------------END------------------------------------------------->
// Promises
// Promises JavaScript mein asynchronous operations ko handle karne ke liye use kiyye jate hain. Ye a future mein kisi
// value ko represent karty hain. Promises ke andar 2 resolve aur reject functions define karte hain 
// Agar operation successful ho to resolve call hota hai or Agar operation fail ho to reject call hota hai.
// .then method resolve hone ke baad execute hota hai or uske result ko handle karta hai.
// .catch method reject hone ke baad execute hota hai or error ko handle karta hai.
// .finally method dono cases mein execute hota hai chahy promise resolve ho ya reject....
// Asynchronous Code?
// JavaScript ek single-threaded language hai, matlab ek waqt mein sirf ek hi kaam execute kar sakti hai. 
// Agar hum synchronous (blocking) code likhte hain jo time-consuming hai, toh wo baaki ke code ko rok deta hai jab tak
// wo complete nahi ho jata. Isse user experience kharab hota hai.
// Promises Kaise Kaam Karte Hain?
// Promises ke paas teen states hoti hain:
// Pending: Initial state, operation abhi tak complete nahi hua.
// Fulfilled: Operation successful tha, aur promise ne result (value) return kiya.
// Rejected: Operation fail hua, aur promise ne error return kiya.
// Promises example 1
function delay(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}
export {};
//Using `then`, `catch`, and `finally`:
// delay(1000)
//           .then(() => {
//             console.log('the delay is over')
//           })
//           .catch((error) => {
//             console.log("Somthing went wrong", error)
//           })
//           .finally(() => {
//             console.log("this is always executed")
//           })
// //Using `async/await`:  
// try {
//     await delay(1000);
//     console.log("Await: The delay is over");
//   }
//   catch (erorr) {
//     console.error("Await: somthing went wrong", error);
//   }
//   finally {
//     console.log("Await: This is always executed")
//   }
//Now Do Coding from the following Article
//https://blog.logrocket.com/async-await-in-typescript/
//Review the tutorial and convert the code in TypeScript
//https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript  
// <--------------------------------------------END------------------------------------------------->
// Promises example 2
// let myPromis = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let succes = true;
//         if (succes){
//             resolve("Operation is Succesfull");
//         }
//         else {
//             reject("Opeartion is failed")
//         }
//     }, 2000); // 2 second
// });
// // yahn promise ko use kar rhy hain...
// myPromis
//        .then((result) => {
//         console.log(result);    //  Output Operation is Succesfull
//        })
//        .catch((error) => {
//         console.log(error);
//        })
// <--------------------------------------------END------------------------------------------------->
// Promises example 3
// function fetchData(){
//   return  new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let data = {id: 1, name: "Shoaib khan"};
//             resolve(data);
//         }, 3000); // 3een second
//     });
// }
// fetchData()
//           .then((data) => {
//             console.log("data fetch data ", data)
//           })
//           .catch((erorr) => {
//             console.log("Erorr ", erorr);
//           })
// <--------------------------------------------END------------------------------------------------->
// Promises example 4
// function der_kardi(second: number){
//    return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`apke message ka ${second} millisecond tak wait kiyya maine`)
//         }, second);
//     })
// }
// der_kardi(2000)
//               .then((message) => {
//                 console.log(message)
//               })
//               .catch((erorr) => {
//                 console.log(erorr)
//               })
// Promises Ko Kaha Use Karein?
// Data fetching from a server (API calls)
// File reading/writing
// Database queries
// Timers (setTimeout, setInterval)
// User interactions (like button clicks, form submissions)
// Note Faida
// Error Handling: Promises ke sath ham errors ko easily handle kar sakte hain using .catch() method.
// Chaining: Promises ko chain kiya ja sakta hai using .then(), jo asynchronous operations ko sequentially run karne mein
//  madad karta hai. Readability: Promises asynchronous code ko synchronous code ki tarah readable banate hain, 
//  jo maintenance ko asaan banata hai.
// <--------------------------------------------END------------------------------------------------->
// API: Introduction
// API ka full form hai Application Programming Interface. Ye ek interface hota hai jo do applications ke beech 
// communication ko allow karta hai. Simplified way mein kaha jaye to, API kisi bhi application ko doosri application
// ke saath interact karne ka tareeqa provide karta hai.
// API ka Use
// API ko use karne ke liye aap HTTP requests send karte hain aur responses receive karte hain.
// Commonly used HTTP methods hain:
// GET: Data fetch karne ke liye
// POST: Naya data create karne ke liye
// PUT: Existing data update karne ke liye
// DELETE: Data delete karne ke liye
// Example using fetch() to get data from an API
// Function to fetch data from a sample API
// async function fetchData() {
//     try {
//       // Sending GET request to the API
//       let response = await fetch('https://jsonplaceholder.typicode.com/posts');
//       // Checking if the response is OK
//       if (response.ok) {
//         // Parsing the JSON data from the response
//         let data = await response.json();
//         console.log('Fetched Data:', data);
//       } else {
//         // If response is not OK, logging the error status
//         console.log('Error: ', response.status);
//       }
//     } 
//     catch (error) {
//       // Logging any network errors
//       console.log('Network Error: ', error);
//     }
//   }
//   // Calling the function to fetch data
//   fetchData();
