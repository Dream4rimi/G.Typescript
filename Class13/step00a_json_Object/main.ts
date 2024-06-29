// JSON subject

// JSON ek lightweight data-interchange format hai jo human-readable aur machine-readable dono hota hai. Ye mainly 
// data ko exchange karne ke liye use hota hai, specially web applications aur servers ke beech. JSON JavaScript se 
// inspire hua hai, lekin almost har programming language mein isko parse aur generate kiya ja sakta hai.
// JSON mein sirf primitive data types (strings, numbers, booleans), null, arrays, objects, aur nested objects
// allowed hote hain.

// JSON Ki Syntax     
// JSON ka structure simple aur clear hota hai:

// Objects: Key-value pairs { "key": "value" }.
// Arrays: Ordered list of values [ "value1", "value2" ].
// Values: Strings, numbers, objects, arrays, true, false, null.


// <----------------------------------------------END----------------------------------------->
// example 1

// let json_ = {
//     "name": "shoaib",
//     "age": 23,
//     "isstudent": true,
//     "courses": ["HTML", "CSS", "Javascript", "Typescript"],
//     "adress": {
//         "city": "karachi",
//         "location": "New Karachi",
//     }
// };


// console.log(json_)


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


// let convert = JSON.stringify(dream); // JSON object print krwany ke liye pehly string mein convert karte hain...

// let extract = JSON.parse(convert);   // is method se ham string ko javascript object mein convert kar sakty hain...


// console.log(extract); // pore object ko print krwa sakty hain
// console.log(extract.name); // output shoaib
// console.log(extract.habbits); // output [ 'crickect', 'Video Games', 'Watching Movies' ]


// <----------------------------------------------END----------------------------------------->
// example 3


// let person = {
//     name: "shoaib",
//     age: 23,
//     city: "karachi"
// }


// let nowString = JSON.stringify(person);
// console.log(nowString);    // ye ab json string hai      {"name":"shoaib","age":23,"city":"karachi"}


// let return_Ob = JSON.parse(nowString);
// console.log(return_Ob);   // wapas javascript object mein     { name: 'shoaib', age: 23, city: 'karachi' }