// full modules topic
// TS casting from W3 School
// Synchronous and  Asynchronous method
// promises
// API
// fetch
// UI
// run time envoirment 4 component call stack webApi event loop task Queue
// class
// Oops
// object oriented full program
// use Aioxs in api





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


// function delay(milliseconds: number): Promise<void> {

//    return new Promise((resolve) => {

//         setTimeout(() => {

//             resolve();
            
//         }, milliseconds)

//     })

// }


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
// API ko use karne ke liye ham HTTP requests send karte hain or responses receive karte hain.
// Commonly used HTTP methods hain:

// API endpoint matlab url ka concept samjhna hai
// API key websites par sighn in karne ke bad jo API_Key milti hai
// Token hi milta hai

// GET: Data fetch karne ke liye
// POST: Naya data create karne ke liye
// PUT: Existing data update karne ke liye
// DELETE: Data delete karne ke liye

// examle 1

fetch('https://jsonplaceholder.typicode.com/posts')

.then((response) => {
   return response.json()
})

.then((data) => {
    console.log(data)
})

.catch((error) => {
    console.log("Error: ", error)
})
 

// Notes 

// fetch function use karke aik HTTP GET request bhejte hain 
// fetch aik promise return karta hai jo HTTP response ko represent karta hai.

// Jab fetch request complete hoti jati hai to pehla .then block execute hota hai.
// response.json() method use kar ke response ko JSON format mein parse karte hain matlab convert karte hain. 
// Ye method bhi aik promise return karta hai jo parsed JSON data ko handle karta hai.

// Jab JSON data successfully parse ho jata hai tab dusra .then block execute hota hai.
// console.log(data) statement parsed data ko console mein print karta hai. 

// Agar fetch request ke dauraan koi error ata hai to .catch block execute hota hai
// console.log('Error:', error) statement error message ko console mein print karta hai.


// Full Flow:

// Request: fetch function server se data request karta hai.
// Response Parsing: Server se response milne ke baad usy JSON format mein convert karty hain.
// Data Handling: JSON data ko console mein print karte hain.
// Error Handling: Agar koi problem hoti hai to usko handle karte hain or error message console mein print karte hain.


// <--------------------------------------------END------------------------------------------------->
 // API: Example 2
// install - npm install axios

// Axios ek popular JavaScript library hai jo HTTP requests ko handle karne ke liye use hoti hai.
// Axios ko commonly RESTful APIs ke saath use kiya jata hai.

// Why Use Axios?
// Axios ka syntax fetch API se zyada readable aur concise hota hai.
// Axios automatically request bodies aur response data ko JSON format mein handle karta hai
// Hamen manually JSON.stringify aur response.json() karne ki zarurat nahi hoti.
// Axios old browsers ke saath bhi compatible hai, jabke fetch API sirf modern browsers mein support hoti hai.
 


import axios from "axios"

axios.get("https://jsonplaceholder.typicode.com/posts")

.then((response) => {
    console.log(response.data)
})

.catch((error) => {
    console.log("error: ", error)
});


// Notes

// Why we use response with data?
// Reason 1: Actual Data Access
// Jab ham server se data lety hain to wo data response.data mein hota hai.
// Agr ham sirf response print karenge to hamen bohot sara unnecessary extra extra data milega


// <--------------------------------------------END------------------------------------------------->
 // API: Example 3
  

 async function fetching(){

  try{

 let response = await fetch('https://jsonplaceholder.typicode.com/posts')

 if(response.ok){

 let data = await response.json();
 console.log("Laya gaya data: ", data);
 }

 else{
  console.log("Error hua hai yahn ", response.status);
 }

}

catch (error){
  console.log("Network Error: ", error)
 }

};

fetching();


// Notes
// async function fetching() { ... }
// async keyword function ko asynchronous banata hai or is mein await keyword use karne ki ijazat deta hai.

//  try { ... } catch (error) { ... }
// try block ke andar wo code likha jata hai jo errors throw kar sakta hai. Agar koi error ata hai to
// wo catch block mein catch ho jata hai.
// Agar try block mein koi error ata hai to control catch block mein chala jata hai.

// let response = await fetch('https://jsonplaceholder.typicode.com/posts');
// await keyword asynchronous operation ko wait karwany ke liye use hota hai.
// Jab tak fetch promise resolve yani complete nahi hota tab tak await function ko pause rakhta hai.
// Agar await use nahi karte to fetch se return hone wala promise ko handle karna mushkil ho jata.

// fetch function:
// fetch function aik HTTP request bhejta hai specified URL par or aik promise return karta hai jo
// HTTP response ko represent karta hai.

// response.ok:
// Agar response status code 200-299 ki range mein ata hai to response.ok true return karta hai.
// Agar response status code 200-299 ki range ke bahar ata hai to response.ok false return karta hai.

// else block:
// Agar response.ok false ata hai (matlab response status 200-299 range mein nahi hai) to else block execute hota hai.
// response.status property response ka status code return karti hai (jaise 404 for Not Found).

// . let data = await response.json();
// response.json() method fetch se aye huy response ko JSON format mein parse karta hai or aik promise return karta hai.
// await keyword use kar ke ham is promise ko wait krwaty hain jab tak JSON data resolve (complete) nahi ho jata
// Agar await use nahi karte to response.json() se return hone waly promise ko handle karna mushkil hota.

// console.log("Laya gaya data: ", data);:
// console.log function data ko console mein print karta hai take ham dekh saken response se kya data aaya hai. 

// Summary:
// async keyword: Function ko asynchronous banata hai taake await use kar saken.
// await keyword: Asynchronous operations ko wait krwany ke liye use hota hai. Without await promises ko handle karna mushkil hota.
// try block: Un code of lines ko wrap karta hai jo error throw kar sakti hain taake ham errors ko catch or handle kar saken.
// catch block: Errors ko handle karta hai or program ko crash hone se bachata hai.



// <--------------------------------------------END------------------------------------------------->
 // API: Example 4
  

 fetch("https://www.7timer.info/doc.php?lang=en")

 .then((response) => {
 
    let Con_Data = response.headers.get('content-type')
 
    if(Con_Data && Con_Data.indexOf('application/json') !== -1){
 
    return response.json()
 
    }
 
    else{
        return response.text()
    }
 
 })
 
 
 .then((data) => {
 
     if(typeof data === "string"){
         console.log("Recieved html Data: ", data)
     }
 
     else{
         console.log("Recived Json data:", data)
     }
 
 })
 
 .catch((error) => {
     console.log("Error", error)
 })



 // Notes

// response:
// response: Yeh fetch function ka response object hai. Jab ham fetch request bhejte hain to server se aik response 
// ata hai jo 2 parts mein hota hai headers or body contain karta hai.

// let Con_Data = response.headers.get('content-type')
// is line ka matlab hai ke response ke andar jo headers ki property hai usme mein konsy format ka data hai? 
// matlab jese 'application/json', 'text/html', etc. or us data ko get kar ke aik new veriable mein store krwa dety hain

// if(Con_Data && Con_Data.indexOf('application/json') !== -1) { return response.json() }
// Con_Data ye wahi veriable hai jisme hamne response ke andar jo header ka data hai wo jis format mein bhi hai usy save krwa diyya 
// Con_Data.indexOf('application/json') ye method ye check kar rha hai ke Con_Data string ke andar application/json substring hai ya nahi
// !== -1 Iska matlab hai ke agar indexOf method ka result -1 nahi aata, to iska matlab hai ke specified data
// Con_Data mein moujood hai. Agar ye data Con_Data mein moujood na hota, to indexOf method -1 return karta.




  // <--------------------------------------------END------------------------------------------------->
 // API: Example 5

 
 const owner = 'octocat'; // GitHub username ya organization
 const repo = 'Hello-World'; // Repository ka naam
 const token = 'YOUR-TOKEN'; // Aapka GitHub personal access token
 
 const url = `https://api.github.com/repos/${owner}/${repo}/issues`;
 
 fetch(url, {

   method: 'GET',
   headers: {
     'Accept': 'application/vnd.github+json',
     'Authorization': `Bearer ${token}`,
     'X-GitHub-Api-Version': '2022-11-28'
   }

 })

   .then(response => {

     if (!response.ok) {
       throw new Error('Network response was not ok');
     }
     return response.json();

   })

   .then(data => console.log(data))
   .catch(error => console.error('Error:', error));
 
 
 
 // Headers HTTP requests mein important role play karte hain kyun ke ye client or server ke beech 
 // information exchange ko control or customize karte hain. Chalo har aik specified header ke bare mein detail se
 // discuss karte hain