// Enum

// Enum (Enumeration) TypeScript or kuch or programming languages mein aik special data type hai jo constants ke set ko
// define karta hai. Enums ka use kar ke ham apne code mein kuch specific values ko aik readable or understandable 
// naam ke sath represent kar sakte hain.

// English:
// Enum (Enumeration) is a special data type in TypeScript and some other programming languages that defines a set of
// named constants. Enums allow you to represent a group of related values with more readable and understandable names in your code.


// Constants aisi values hoti hain jo program ke execution ke douran change nahi hoti. Enums ka use karte huy ham aik
// group ya set of constants ko aik jagah define kar sakty hain.

// Example: Sochiye ke ham aik traffic light system bana rahe hain. Traffic lights teen colors (red, yellow, green) mein
// hoti hain. In teen colors ko ham constants ke set ke tor par define kar sakte hain.


// <----------------------------------------------END-------------------------------------------->
// enum example 1

enum color {Red, Blue, Green}; // starts with 0 index

let get: color = color.Green;
console.log(get);    // Output: 2  



// agr ham khud se kisi enum member ko by default value denge to uske aagy waly enums ki value bhi
// usi hisab se incrment ho jaegi (Red = ko 1) assaign ki hai to (Blue = 2) ho gaya hoga or (Green = 3)

enum color1 {Red = 1, Blue, Green};

let colorName: string = color1[2];
console.log(colorName);   // Output: Blue



// or agr ham khud se enum members ko value assign karenge apni marzi ki to har enum member wahi value contain 
// karega jo hsmne usy di hogi

enum color2 {Red = 1, Blue = 2, Green = 4};  // can assign value to all

let colorIndex = color2["Blue"];
console.log(colorIndex);   // Output: 2



// After compile into Javascript



// <----------------------------------------------END-------------------------------------------->
// enum example 2
// enum ko ham fix values ke liye use karte hain



// enum is option for selecting, and enums property called members, enum start from 0 index automaticaly and also 
// we can change index number 
enum Week_days {
    Monday,    // this is not value => this is property
    Tuesday,   // member = 1
    Wednesday, // member = 2
    Thursday,  // member = 3
    Friday,    // member = 4
    Saturday,  // member = 5
    Sunday     // member = 6
};

//   verible   data-type     enum value
let Class_day: Week_days = Week_days.Sunday;

console.log(Class_day); // Output: 6



// <------------------------------------------END------------------------------------------->
// example 3


// Case 2
// enum ko ham number ke ilawa string string value se bhi initilize kar sakty hain...
enum Week_days2 {
    Monday    = "mon",    
    Tuesday   = "tus",
    Wednesday = "wed", 
    Thursday  = "thu",  
    Friday    = "fri",   
    Saturday  // yahn par error aega kiyun typescript mein agr number assign karty hain to wo pichli number value ko 
    Sunday    // agli enum property ko value assign kar deta hai incriment ki but string mein hamen sari value initilize karni parengi
};




// Case 3
// enum ko ham number ke ilawa string string value se bhi initilize kar sakty hain...
enum Week_days3 {
    Monday    = "mon",    
    Tuesday   = "tus",
    Wednesday = "wed", 
    Thursday  = "thu",  
    Friday    = "fri",   
    Saturday  = "sat",
    Sunday    = "sun",
};

let get_val: Week_days3 = Week_days3.Sunday;

console.log(get_val); // Output: sun => jo hamne value assign ki hogi wahi aegi...

// <------------------------------------------END------------------------------------------->
// example 4


// case 1
let person = {
    name: "shoaib",
    age: 23
};

console.log(
    person["name"] // Output: shoaib => object mein ham key se value ko acces kar sakty hain...
);



// case 2    
let person2 = {
    name: "shoaib",
    age: 23
};

console.log(
    person2["shoaib"] // Error => object mein ham value ke zariye key ko acces nahi kar sakty..
);



// case 3 => (Reverse mapping) matlab key se value or value se key ko acces kar sakty hain...
enum Week_days4 {
    Monday,    // member = 0
    Tuesday,   // member = 1
    Wednesday, // member = 2
    Thursday,  // member = 3
    Friday,    // member = 4
    Saturday,  // member = 5
    Sunday     // member = 6
};

console.log(
   Week_days4[0] // Output: Monday => enum mein ham key se value acces kar sakty hain 
);               // or value se key acces kar sakty hain.

// enum mein ham value se key or key se value acces kar sakty hain or agr hamne enum members ko by-default values
// assign ki hui hain to hamen unki property acces karwany ke liye wahi default value hi likhni paregi
