// Nested Object

// English:
// A nested object is an object that contains other objects as its properties. This structure allows for
// creating complex data models by embedding objects within objects.

// Roman Urdu:
// Nested object aik aisa object hai jo dosre objects ko apni properties ke tor par apne andar rakhta karta hai.
// Ye structure, complex data models bnany mein madad karta hai by embedding objects within objects.


// <-------------------------------------------------END-------------------------------------------------->
// Type alias for object


type person = {
    name: string,
    age: number,
    alive: boolean,
    dream: {
        need: string,
        how: string,
    },
    fatherName: string,
    country: string
};


// define here type alias for object data
let student: person = {
    name: "shoaib",
    age: 23,
    alive: true,
    dream:{
        need: "Want Rich",
        how: "Unlimited"
    },
    fatherName: "bashir ahmed",
    country: "Pakistan"
};


console.log(student); // All Ok


// <-------------------------------------------------END-------------------------------------------------->
// Type alias for object

type Auther = {
    firstName: string,
    lastName: string
};


type Book = {
    auther: Auther,
    name: string
};


const my_Book: Book = {

    auther: {
        firstName: "Shoaib",
        lastName: "KHan"
    },

    name: "Pata nahi"
};

console.log(my_Book); // All Ok: