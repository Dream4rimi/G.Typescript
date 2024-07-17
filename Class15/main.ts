// Recipe of Tea
// 1. add water
// 2. after 5 seconds add tea leaves
// 3. after 2 seconds add sugar
// 4. cook it for 1 second and after this tea is ready



// exicution contact
// global or local exicution
// call stack website in google
// call stack memory heap
// functional excution contacts or global exicution contact
// local storage call back promisese async await
//  promises se ham async await ki tarf kiyun gaye
//  call back async await or promises kis kis cheez ke liye use hoty hain 
// asynchronous code ko synchronous mein run kesy karte hain wwith tea project and same to same work with promisese
// tea bnani hai 3 tareqo se cacllback, promises or async


// <------------------------------------------------END------------------------------------------------>
// Example 1  using javascript by default behavier 

// Recipe of Tea
// 1. add water
// 2. after 5 seconds add tea leaves
// 3. after 2 seconds add sugar
// 4. cook it for 1 second and after this tea is ready


console.log("add water");

setTimeout(() => {
    console.log("add tea leaves");
}, 5000);

setTimeout(() => {
    console.log("add sugar");
}, 2000);

setTimeout(() => {
    console.log("tea is ready")
}, 1000);


// Output

    // add water              < run karte hi exicute hoga
    // tea is ready           < ye 1 second bad run hoga
    // add sugar              < ye 2 second bad run hoga
    // add tea leaves         < ye 5 second bad run hoga 


// Notes    
// is code mein sirf Add water synchronous hai baqi setTimeout methods Asynchronous hain or ye sab javascipt khud 
// identify karta hai or by default sybchronous or asynchrous code ko unke roll ke hisab se exicute kar deta hai.
// lekin ham chahty hain ke ye asynchronous ka data bhi synchronous tariqe se exicute ho taky hmara outout jesa ham
// chahty hain step by step wesy hi har line print ho bhaly wo synchronous ho ya asynchronous....


// <------------------------------------------------END------------------------------------------------>
// Example 2 CallBack function 

// TypeScript (or JavaScript) aik single-threaded application hai or agr ham us thread ko sab tasks ke liye 
// istemal karte rahenge to user ko dosri tasks perfom karne ke liye wait karna padega jo user experience ko kharab karega.
// Is maslay ko hal karne ke liye TypeScript callback functions ko support karta hai taky program asynchronous ho jaye.

// aik callback function wo function hota hai jo aik or function ko argument ke tor par diya jata hai or bad mein
// execute hota hai aksar kisi task ke mukammal hone ke baad. Yeh hamen specific code ko kisi particular task ke
// mukammal hone ke baad execute karne ki ijazat deta hai. Yeh un operations ko perform karne mein madad karta hai
// jo unpredictable waqt le sakti hain jaise file reading, API requests karna, ya user interactions ko handle karna.


function abc() {
    console.log('hello world');
}

function printConsole(cb: () => void) {
    cb();
}

printConsole(() => {});

abc();


// <------------------------------------------------END------------------------------------------------>
// Example 2 using Callback

// Recipe of Tea
// 1. add water
// 2. after 5 seconds add tea leaves
// 3. after 2 seconds add sugar
// 4. cook it for 1 second and after this tea is ready


// is code mein hamne Callback function ko use karte huy asynchronous code ko 
// synchronous tariqe se exicute krwaya hai. 

function Making_tea(Material: string, delay_Time: number, CallBack: () => void){

    setTimeout(() => {

        console.log(Material);

        CallBack();

    }, delay_Time)

};


Making_tea("Add water", 0, () => {

    Making_tea("Add tea leaves", 5000, ()=> {

        Making_tea("Add sugar", 2000, () => {

            Making_tea("Tea is ready", 1000, () => {});

        });

    });

});


// Notes
// Ye code chai banane ke steps ko sequentially (ek ke baad ek) execute kar raha hai, or is process ko
// asynchronous callbacks ke through manage kar rha hai or Har callback function ke andar dosray nested callback function
// ko call kiyya jaa rha hai jese Making_tea function call is liye kiyya gaya hai taaky pichla step 
// complete hone ke baad agla step start ho...


// <------------------------------------------------END------------------------------------------------>
// Example 2 Using Promises


// promises ke zariye asynchronous operation ko synchronous opearation mein exicute krwa rhy hain...
  
function making_Tea2(Material: string, delay_time: number): Promise<void> {

        let  Pro_Data = new Promise<void>((resolve, reject) => {
   
           let data = false;
   
           setTimeout(() => {
   
               if(data){
                   reject();
               }
               else {
                   console.log(Material);
                   resolve();
               }
   
           }, delay_time);
   
       });
   
       return Pro_Data;
   
   };
   
   making_Tea2("Add water", 0)
   
   .then(() => making_Tea2("Add tea leaves", 5000))
   .then(() => making_Tea2("Add sugar", 2000))
   .then(() => making_Tea2("Teas is ready", 1000))
   .catch(() => console.log("Somthing is went wrong"))
   .finally(() => console.log("finally is running"))




//  let  Pro_Data = new Promise<void>((resolve, reject)
//  is line mein jo Promise define kiyya gaya hai iski return value void rakhi gai hai kiyun ke ye promise
//  kuch bhi return nahi krwa rha or agr iski jagah resolve(); mein koi number ya string ya phir boolean value hoti to
//  Promise void ki jagah wo data type likh di jati

// <------------------------------------------------END------------------------------------------------>
// Example 2 Using async await




function Making_tea3(material: string, delay_time: number): Promise<void>{

    let Pro_Data: Promise<void> = new Promise((resolve, reject) => {

        let data = true;

        setTimeout(() => {

            if(data){
                console.log(material);
                resolve();
            }
            else{
                reject("Somthing went Wrong")
            }

        }, delay_time)

    });

    return Pro_Data;

};


async function Run_promises(){

    try{

        await Making_tea3("Add water", 0)
        await Making_tea3("Add leaves", 5000)
        await Making_tea3("Add sugar", 2000)
        await Making_tea3("Tea is ready", 1000)

    }

    catch(error) {
        console.log(error)
    }

    finally{
        console.log("Finally is always running")
    }

};

Run_promises()

