// Union Literals

// Union litterls ka use ye hota hai ke wo veriables ki values kon kon si hongi ye specific kar deta hai uske ilawa
// koi dosri value store nahi kar sakty us veriable mein...

// Union Literals ka use kyun karte hain?
// Union literals TypeScript ka aik powerful feature hai jo hmare code ko type-safe or readable banata hai. 
// Ye hamen variables ko specific set of values tak restrict karne ki sahulat deta hai jo real-world applications mein
// bohot useful ho sakta hai jaise form input validation, API response handling, or navigation management.


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


console.log(myAge.toLowerCase());  //Can be called on string because of narrowing

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


// Isme ham type alias bhi define kar sakty hain
type RawData = number | string | boolean | undefined | null;


let data: RawData;

// ham inko apas mein Combine bhi karwa sakty hain..

type id = number | string;

type new_ID = id | undefined | null ;


// <--------------------------------------------------END------------------------------------------------>
// Example 8

// Union literals me hum multiple literal types ko combine karte hain. Example ke taur par

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
// Navigation:

// Web applications me routes ko handle karne ke liye


type Route = "home" | "about" | "contact";

function navigateTo(route: Route) {

    console.log(`Navigating to ${route}`);

}

navigateTo("home");    // Valid
navigateTo("about");   // Valid
navigateTo("contact"); // Valid
navigateTo("faq");     // Error: Argument of type '"faq"' is not assignable to parameter of type 'Route'.
