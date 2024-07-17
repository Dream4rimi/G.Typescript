// JSON subject

// JSON ek lightweight data-interchange format hai jo human-readable or machine-readable dono hota hai. Ye mainly 
// data ko exchange karne ke liye use hota hai, specially web applications or servers ke beech. JSON JavaScript se 
// inspire hua hai, lekin almost har programming language mein isko parse or generate kiya ja sakta hai.
// JSON mein sirf primitive data types (strings, numbers, booleans), null, arrays, objects, or nested objects
// allowed hote hain.

// English
// JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and
// write and easy for machines to parse and generate. It is primarily used to transmit data between a server and 
// web application as text.


// JSON Ka Syntax     
// JSON ka structure simple or clear hota hai:

// Objects: Key-value pairs { "key": "value" }.
// Arrays: Ordered list of values [ "value1", "value2" ].
// Values: Strings, numbers, objects, arrays, true, false, null.


// <----------------------------------------------END----------------------------------------->
// example 1

let json_ = {
    "name": "shoaib",
    "age": 23,
    "isstudent": true,
    "courses": ["HTML", "CSS", "Javascript", "Typescript"],
    "adress": {
        "city": "karachi",
        "location": "New Karachi",
    }
};


console.log(json_)


// Notes
// Jab ham console.log(json_); karte hain JavaScript engine object ko as a standard JavaScript object mein
// display karta hai. JavaScript objects mein keys quotes ke bina bhi valid hoti hain.

// Agar hamen exactly JSON format mein data print karna hai to ham JSON.stringify(...) method use kar sakte hain.
// Or agr ham JSON string ko javascipt object mein convert karna chahty hain to JSON.parse(...) method use kar sakty hain.

// <----------------------------------------------END----------------------------------------->
// example 2

let dream: any = {
    "name": "shoaib",
    "age": 23,
    "country": "pakistan",
    "isStudent": true,
    'habbits': ["crickect", "Video Games", "Watching Movies"],
    "favouritePlayers": {
        "Hitting": "Shahid Afridi",
        "from": "Pakistan",

        "Mr 360": "AB Dveleir",
        "from2": "South Africa"
    }
};

console.log(dream); // darect print 


let convert = JSON.stringify(dream); // is method se ham javascript object ko JSON string mein convert kar rhy hain...

let extract = JSON.parse(convert);   // is method se ham json string ko javascript object mein convert kar rhy hain...


console.log(extract);        // pore object ko print krwa sakty hain
console.log(extract.name);    // output shoaib
console.log(extract.habbits);  // output [ 'crickect', 'Video Games', 'Watching Movies' ]


// <----------------------------------------------END----------------------------------------->
// example 3


let person = {
    name: "shoaib",
    age: 23,
    city: "karachi"
}


let nowString = JSON.stringify(person);
console.log(nowString);    // ye ab json string hai      {"name":"shoaib","age":23,"city":"karachi"}


let return_Ob = JSON.parse(nowString);
console.log(return_Ob);   // wapas javascript object mein     { name: 'shoaib', age: 23, city: 'karachi' }