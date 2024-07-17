// Union Literals

// Union litterls ka use ye hota hai ke wo veriables ki values kon kon si hongi ye specific kar deta hai uske ilawa
// koi dosri value store nahi kar sakty us veriable mein.


// Union Literals ka use kyun karte hain?
// Union literals TypeScript ka aik powerful feature hai jo hmare code ko type-safe or readable banata hai. 
// Ye hamen variables ko specific set of values tak restrict karne ki sahulat deta hai jo real-world applications mein
// bohot useful ho sakta hai jaise form input validation, API response handling, or navigation management.


// <--------------------------------------------------END------------------------------------------------>
// Example 0

// data type = type
// union = | (options)
// litrals = exact value
// alias = nickname


// agr ham type ke keyword ko use kar ke sath pipe ka sighn use karty huy data type bnaenge to wo union type kehlaegi.
type ID = string | number | boolean;


// or agr ham agr ham veriable ko koi fix data type value bana kar define karenge to wo union litterls kehalegi
// hard coted value ko hi litterls kehty hain...

let person: "shoaib" = "shoaib"; // accepted

let person1: "shoaib" = "azlaan"; // Error 


// ab in dono mein se koi bhi littrel value accepteble hogi or litteral ka matlab hai exactly wahi jo hamne define ki hai
let person2: "shoaib" | "azlaan" = "azlaan";


// ye bhi union litterls kehlaega kiyun ke union ki type ke sath aik specific fixed valie assign ki gai hai..
type check = string | number | "Week";

// <--------------------------------------------------END------------------------------------------------>
// Example 1

let myName: string | null;

myName = null;
console.log(myName);  // Output: null

myName = "shoaib";
console.log(myName);  // Output: shoaib


myName = undefined;  // Error

myName = true      // Error


// <--------------------------------------------------END------------------------------------------------>
// Example 2


let myAge: string | number;

myAge = 23;  // narrowing
console.log(myAge);  // Output 23

// console.log(myAge.tolowercase()) // Error genrate karega kiyun ke agr aik number hai or ye lower case mein nahi sakta

myAge = "Pata Nahi"; // narrowing
console.log(myAge); // Output: pata nahi


console.log(myAge.toString());  // common to both types can be called even without narrowing


console.log(myAge.toLowerCase());  // Can be called on string because of narrowing

// <--------------------------------------------------END------------------------------------------------>
// Example 3


let newAge = Math.random() > 0.6 ?  "Shoaib" : 60;

console.log(newAge);

// newAge.toLowerCase(); Error: transpiler cannot narrow


if(newAge === "Shoaib"){

    newAge.toUpperCase(); // Can be called kiyun ye ab string data type hai.
    console.log(newAge);
};




if(typeof newAge === "string"){

    newAge.toUpperCase(); // Can be called kiyun ye ab string data type hai.
    console.log(newAge);
};





//                              Ok: string             OK: number
typeof newAge === "string" ? newAge.toUpperCase() : newAge.toFixed();

console.log(newAge);

// <--------------------------------------------------END------------------------------------------------>
// Example 4


let Age: number | "Died" | "unknown";

Age = 90 ;       // Accepted 
Age = "Died"     // Accepted 
Age = "unknown"  // Accepted 

// Age = "Living"   // Error: genrate hoga kiyun ke ye property type litterls mein define nahi hai...

// <--------------------------------------------------END------------------------------------------------>
// Example 5


let shoaib: "shoaib";

shoaib = "shoaib";   
shoaib = "Azlaan";  // Output: Erorr


let family: "Mitho" | "Awais" | "Azlaan";

family = "Mitho";  // Output: ok
family = "Awais";  // Output: ok
family = "Azlaan"; // Output: ok


// <--------------------------------------------------END------------------------------------------------>
// Example 6


let My_Name = Math.random() > 0.6 ? "Shoaib" : undefined;

if(My_Name){

    My_Name.toUpperCase();  // OK: hai kiyun ke ye ab string value hai..

};


My_Name.toUpperCase():  // Erorr Aega kiyun kr ye abhi String bhi ho sakta hai or Number bhi...

My_Name?.toUpperCase();  // Ye Erorr nahi dega kiyun ke hamne question mark se ye define kar diyya hai ke ye 
//                          agr string ho .toUpperCase() method ko apply kar diyya jaye


// <--------------------------------------------------END------------------------------------------------>
// Example 7


// Isme ham type alias define kar sakty hain
type RawData = number | string | boolean | undefined | null;


let data: RawData;

// ham inko apas mein Combine bhi karwa sakty hain..

type id = number | string;

type new_ID = id | undefined | null ;


// <--------------------------------------------------END------------------------------------------------>
// Example 8

// Union literals mein ham multiple literal types ko combine kar sakty hain. matlab ke veriable sirf wahi value 
// accept karega jo ham usy define karenge type bana kar iske ilawa wo koi bhi values accept nahi karega.


let myName1: "Shoaib" = "Shoaib";
// is example mein veriable ne sirf wahi value li jo hamne litterly usy define ki iske ilawa koi values nahi lega.



let direction: "north" | "south" | "east" | "west";


// <--------------------------------------------------END------------------------------------------------>
// Example 9
// Real World Example

// Agar ham aikk form bana rahe hain jisme gender select karna hai to ham gender ko union literals ke zariye 
// restrict kar sakte hain...


type Gender = "male" | "female" | "other";

function setGender(gender: Gender) {
    // Function body
}

setGender("male");    // Valid
setGender("female");  // Valid
setGender("other");   // Valid
setGender("unknown"); // Error: Argument of type '"unknown"' is not assignable to parameter of type 'Gender'.


// <--------------------------------------------------END------------------------------------------------>
// Example 10
// API Responses:

// Kisi API se status codes handle karne ke liye:


type Status = "success" | "error" | "loading";

function handleResponse(status: Status) {

    if (status === "success") {
        console.log("Request was successful!");
    } 

    else if (status === "error") {
        console.log("There was an error with the request.");
    } 

    else {
        console.log("The request is still loading.");
    }
}

handleResponse("success"); // Valid
handleResponse("error");   // Valid
handleResponse("loading"); // Valid
handleResponse("completed"); // Error: Argument of type '"completed"' is not assignable to parameter of type 'Status'.



// <--------------------------------------------------END------------------------------------------------>
// Example 11


// Union Types
// Union types TypeScript mein wahn use hoty hain jahan aik variable ko multiple types assign ki ja rhi hon. 
// Ham pipe (|) symbol ka use karte huy multiple types define karte hain.

let value: string | number | boolean;

value = "Hello";   // accepted
value = 42;       // accepted
value = true;    // accepted



// Union Literals
// Union literals aik specific set of values ko represent karty hain ye bhi union types ki tarhn hi use hote hain
// lekin isme ham specific values define karte hain jo variable ko assign ho sakti hain.


type Direction = "North" | "South" | "East" | "West";

let currentDirection: Direction;

currentDirection = "North";    // accepted
currentDirection = "South";   // accepted
currentDirection = "Up";     // invalid because "Up" is not part of the defined literals
