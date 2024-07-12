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

let employe2: {name: string, age: number, experience: string}

employe2 = {
    name: "shoaib",
    age: 23,
    experience: "IT"
};

console.log(employe2);  // Output: { name: 'shoaib', age: 23, experience: 'IT'}