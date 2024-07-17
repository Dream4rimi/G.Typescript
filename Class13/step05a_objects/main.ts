// English:
// An object is a collection of related data and methods that represent a real-world entity. It is used to 
// encapsulate properties and behaviors.

// Urdu:
// Object aik related data or methods ka collection hota hai jo aik real-world entity ko represent karta hai.
// Ye properties or behaviors ko encapsulate karne ke liye use hota hai.




let employe = {
    name: "Shoaib",
    age: 23,
    experience: "IT"
};

console.log(employe); // Output: { name: 'Shoaib', age: 23, experience: 'IT' }

console.log(employe.name); // Output: Shoaib
console.log(employe["experience"])  // Output: IT


// <----------------------------------------END-------------------------------------------->
// type declration

// inline type and anonymous bhi kehty hain
let employe2: {name: string, age: number, experience: string}  // strong typing

employe2 = {
    name: "shoaib",
    age: 23,
    experience: "IT"
};

console.log(employe2);  // Output: { name: 'shoaib', age: 23, experience: 'IT'}


// {
//     name: "shoaib",
//     age: 23,
//     experience: "IT"
// };

// isko object litterls kehty hain or jab ham isko veriable mrin define karte hain tan isko object kaha jata hai..


// <----------------------------------------END-------------------------------------------->
// Object using object methods


type obj_type = {
    name: string,
    age: number,
    result: boolean
};


let Data: obj_type[] = [];


let object: obj_type = {
    name: "shoaib",
    age: 23,
    result: true
};


Data.push({
    name: "ali",
    age: 20,
    result: false
});

console.log(object, object.name); // Pora object or us object mein se name ki property ko print kiyya jaa rha hai...

console.log(Data, Object.keys(Data[0])); // Object ki keys ko nikaal rhy hain array mein moujod us object ka index 
// number dey kar jis object ki keys ko nikalna hai..

console.log(Data, Object.values(Data[0])); // Object ki values ko nikal rhy hain array mein moujod us object ka index 
// number dey kar jis object ki values hamen chahiye

console.log(Data, Object.entries(Data[0])); // Object ki entries ko nikal rhy hain object ki key or uski value ke sath 
// pairs ki shakal mein array mein moujood us object ka index number dey kar jiski entries hamen chahiye...



// Output:

// { name: 'shoaib', age: 23, result: true } shoaib

// [ { name: 'ali', age: 20, result: false } ] [ 'name', 'age', 'result' ]

// [ { name: 'ali', age: 20, result: false } ] [ 'ali', 20, false ]

// [ { name: 'ali', age: 20, result: false } ] [ [ 'name', 'ali' ], [ 'age', 20 ], [ 'result', false ] ]