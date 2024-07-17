// callBack function

// Key Points:
// Function Reference Pass Karna: Jab ham callback function ko argument ke tor pe kisi function mein pass karte hain
// to ham us function ka reference pass kar rhy hoty hain. Iska matlab ye hota hai ke ham bata rahy hain
// doosre function ko ke ye wo function hai jo tumhy baad mein call karna hai.

// Callback Function Ko Call Karna: Doosra function us reference ko use karke callback function ko call karta hai.
// or callback function tab call hota hai jab uska time ata hai.
// Callback functions ko samjhna programing mein bohut zarori hai kiyun ke 
// ye asynchronous oprations ko handle karty hain...



function for_callBack(text: string){

    console.log("This is callBack function:", text);

};


function get(anotherPara: string, callBack: (text: string) => void){

    callBack(anotherPara)

}

get("Awais", for_callBack)


// <-----------------------------------------------END------------------------------------------------->
// Promises using .then .catch .finally methods


// Promise JavaScript ka aik object hai jo asynchronous operations ka result represent karta hai jisy ham asani se
// handle kar sakte hain operation successful ho ya fail ho. Iska main purpose ye hai ke asynchronous code ko
// readable or maintainable banana, taky deeply nested callbacks (callback hell) se bach sakein.


function delay(miliseconds: number): Promise<void>{

    return new Promise((resolve) => {
 
         setTimeout(() => {

             resolve()

         }, miliseconds)
 
     });
 };
 

 delay(2000)
            .then(() => {  // ye method tab exicute hota hai jab data succesfull ho...
             console.log("Data transfer succesfully")
            })
 
            .then((error) => { // ye method tab exicute hota hai 
             console.log("Somthing went wrong:", error)
            })
 
            .finally(() => { // ye method dono surton mein exicute hota hai data succecfull ho ya error aye
             console.log("This method Always exicute")
            });




// <-----------------------------------------------END------------------------------------------------->
// Promises using async .await with try catch method


// async or await JavaScript mein asynchronous code ko handle karne ka modern tariqa hai.
// async Ye keyword function ko asynchronous banata hai yani wo promise return karega.
// await: Yeh keyword promise ke resolve hone ka wait karta hai or is se function execution 
// temporarily stop ho jati hai jab tak promise resolve ya reject nahi ho jata.
// async await se asynchronous code likhna asaan or readable ho jata hai bina callback hell ke.



            function delay2(miliseconds: number){

                return new Promise<void>((resolve) => {
              
                  setTimeout(() => {
              
                      resolve();
              
                  }, miliseconds)
              
                 });
              };
              
              
              
              try{
              
                  await delay2(1000)
                  console.log("Await: Data succesfully exicuted")
              
              }
              catch(error){
                  console.log("Await: Somthing went wrong")
              }
              finally{
                  console.log("Await: This method is always exicuted")
              }



              
//Now Do Coding from the following Article
//https://blog.logrocket.com/async-await-in-typescript/


//Review the tutorial and convert the code in TypeScript
//https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript  
  