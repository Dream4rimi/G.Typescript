// Synchronous
// Asynchronous
// Define functions defrent data types
// Concurrency
// Promises using .then .catch
// Promises using  async await
// Concurrency => Multi tasking behavier achive karna. matlab aik time par bohut sary kaam karna
// or Concurrency ko achive karne ke liye ham Callbacks, Promises, or Async Await ka use kar ke
// Multiple kaam aik hi time mein kar sakty hain...
// <------------------------------------------------END---------------------------------------------------->
// In sab function ko define karny ka matlab ye hai ke hamen pata hona chahiye ke function mein 
// kya kya pass kar sakty hain primitive ya non primitve;
// function jese number, data type string, boolean, Array, or Object accept kar rha hai
// wesy aik or function bhi accept kar sakta hai...x
// // Expect number
// function add(a: number, b: number): number {
//     return a + b;
// };
// // Expect string
// function greet(name: string): string {
//     return `Hello ${name}`;
// };
// // Expect boolean
// function powerOutage(light: boolean): void{
//     if(light){
//         console.log("Light Aa gai");
//     }
//     else{
//         console.log("Light nahi aai")
//     };
// };
// // Expect Array
// function customFind(arr: string[], element: string): boolean | void {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === element){
//             return true;
//         }
//     };
// };
// // Expect Object
// function logPersonName(person: TPerson): void {
//     console.log(person.name);
// };
// type TPerson = {
//     name: string,
//     age: number
// };
// let person: TPerson = {
//     name: "SHoaib",
//     age: 23,
// };
// // CallBack function => Callback function ko invoke karne ki power sirf parent function ke pass hoti hai...
// // Expect function
// function parent_Function(func: () => void){
//     console.log("I am the Parent function");
//     func(); // child function call
// };
// function child_Function(){                      // function define and pass in Parent function
//     console.log("I am the Child function")
// };
// parent_Function(child_Function);            // parent function ke andar hamne aik callback function pass kiyya hai
// // parent_Function(function(){                    // darect define function
// //     console.log("I am the Child function");
// // });
// // example 1
// setTimeout(() => {
//     console.log("Hi this is shoaib")
// }, 1000);
// // example 2
// function greet(){
//     console.log("Hi this is shoaib")
// }
// setTimeout(greet, 1000)
// <------------------------------------------------END---------------------------------------------------->
// Code wrtiting Using Callbacks functions
// Code Exicuting
// 1. Washing started... 
// 2. Washing done!
// 3. Soaking started...
// 4. Soaking done!
// 5. Drying started...
// 6. Drying done!
// // case 1
// function washing(callback: () => void ){
//     console.log("Washing started...");
//     setTimeout(() => {
//         console.log("Washing done!");
//         callback();
//     }, 5000);
// };
// // case 2
// function soaking(callback: () => void ){
//     console.log("Soaking started...");
//     setTimeout(() => {
//         console.log('Soaking done!');
//         callback();
//     }, 3000);
// };
// // case 3
// function drying(){
//     console.log("Drying started...");
//     setTimeout(() => {
//         console.log("Drying done!");
//     }, 2000);
// };
// // console.log("folding loundry")
// // Now functions calling
// washing(() => {
//     soaking(() => {
//         drying();
//     })
// });
// // console.log("I Am making biryani");
// <------------------------------------------------END---------------------------------------------------->
// Promises Structure using .then .catch
// Promise have 3 States => 
// 1. Pending => promise abhi tak process mein hai.
// 2. resolve => Promise Fullfiled ho chuka hai yani succesfully data mil gaya hai.
// 3. reject  => Promise reject yani data nahi mila.
// resolve => .then() method exicute
// reject  => .catch() method exicute
// finally => always exicute promise resolve or reject
// let promise = new Promise((resolve, reject) => {
//    setTimeout(() => {
//     // resolve("Success")
//     reject("Faliure!!!");
//    },3000);
// });
// promise
//        .then((value) => {
//         console.log(value);
//         console.log("Thank you for returning money")
//        })
//        .catch((value) => {
//         console.log(value)
//         console.log("Sorry I am unable to return money");
//        })
//  .finally(() => {
//    console.log("Ainda mai tujhe pese nahi dunga")
//  })
// <------------------------------------------------END---------------------------------------------------->
// Promises Code writing using .then .catch
// Code Exicuting
// 1. Washing started... 
// 2. Washing done!
// 3. Soaking started...
// 4. Soaking done!
// 5. Drying started...
// 6. Drying done!
// Promise ke andar ham ne sab se pehly jo cheez htai wo hai callacks parmeters
// // step: 1
// function washing(){
//    console.log("Washing started....");
//    return new Promise((resolve, reject) => {  // Promise exicute hoga or ye koi value return karega function ko resolve ya reject.
//       setTimeout(() => {
//          resolve("washing done!");
//       }, 5000)
//    })
// };
// // step: 2
// function soaking(){
//    console.log("Soaking started...");
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          resolve("soaking done!");
//       },3000);
//    })
// };
// // step: 3
// function drying(){
//    console.log("Drying started...");
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          resolve("drying done!")
//       }, 2000);
//    })
// };
// // now invoking function kiyun ke isme aik promise return ho ke aya hai or us promise ko ham .then se handle karty hain
// washing().then((value) => {
//    console.log(value);
//    return soaking();
// }).then((value) => {
//    console.log(value);
//    return drying();
// }).then((value) => {
//    console.log(value);
// }).catch((error) => {
//    console.log(error);
// });
// NOTES
// sab se pehly hamne washing function call krwaya jese hi washing function exicute hoga ye aik promise return karega
// us promise ko ham .then ke method se handle karte hain agr wo promises successfully return hota hai tab.
// promise resolve hony ke bad uski jo value hoti hai wo .then ke arraow function parameter mrin ati hai...
// uske bad jese hi hmara washing done hota hai usi .then ke method mein ham dosra function soaking invoke krwa denge
// jese hi wo function chalega wo bhi aik promise return karega jisko ham return keyword laga kar return kar denge
// phir ham us return promise ko dubara se .then method laga kar us promise ki resolve value ko handle karenge...
// bilkul aisy hi drying ka function call krwa denge soaking ke .then method mein phir ham isko bhi return karwa ke
// .then se handle kar lenge...
// pehly function ke .then mein ham dosry function ko call krwa ke return isliye karte hain ke agr pehla function
// succesfully exicute hoga tanhi to dosray function ka data kaam aega
// matlab agr washing function reject ho jata to soaking function exicute hony ka koi faida nahi hota kiyun ke jab
// tak kapre wash nahi hoty to sookhty kesy ?... 
// <------------------------------------------------END---------------------------------------------------->
// Promises Code writing using, async await
// Code Exicuting
// 1. Washing started... 
// 2. Washing done!
// 3. Soaking started...
// 4. Soaking done!
// 5. Drying started...
// 6. Drying done!
// step: 1
function washing() {
    console.log("Washing started....");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("washing done!");
        }, 5000);
    });
}
;
// step: 2
function soaking() {
    console.log("Soaking started...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("soaking done!");
        }, 3000);
    });
}
;
// step: 3
function drying() {
    console.log("Drying started...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("drying done!");
        }, 2000);
    });
}
;
// promise handling using async await
async function washing_Machine() {
    // ye try ka block hai iske andar ka code tab tak exicute hota rhega jab tak hmara promise resolve rhega jese hi koi promise reject hoga wesy hi try ki exicution ruk jaegi.   
    try {
        // yahn par hmare ye function sirf invok ho rhy hain but inke andar promise ki value bhi return ho kar aai hui hai isliye ham un values ko veriable mein store krwa lenge
        let result1 = await washing(); // wait karo jab tak washing function completely exicute nahi ho jata or await hamne isliye lgaya hai kiyun ke ye function foran exicute nahi hoga ye thora time lega or jab tak time lega tab tak koi dosra function exicute nahi hony dega... 
        console.log(result1);
        let result2 = await soaking(); // wait karo jab tak soaking function completely exicute nahi ho jata.
        console.log(result2);
        let result3 = await drying(); // wait karo jab tak drying function completely exicute nahi ho jata.
        console.log(result3);
    }
    // jese hi promise reject return karega usko catch ka method handle karega. 
    catch (error) {
        console.log(error);
    }
    // ye hmesha exicute hoga promise resolve ho ya reject.
    finally {
        console.log("I will run always");
    }
}
;
// console.log("folding laundry")             check kya hamne concurrency achive ki ya nahi.
// invoking async await function results.
washing_Machine();
export {};
// console.log("I am making biryani")          check kya hamne concurrency achive ki ya nahi.
