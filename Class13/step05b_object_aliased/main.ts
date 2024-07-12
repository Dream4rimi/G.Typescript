// Anonymous

// ye aik anonymous object hai kiyun ke hamne iski type sirf isi ke liye define ki hai or ye type kahi or call
// nahi ki jaa sakti kiyun ke ye single time use hoti hai or sirf usi object mein jis mein bnai hoti hai

let teacher: {name: string, exp: number} = {

    name: "Sir Anas",
    exp: 3,

};

console.log(teacher); // Output: { name: 'Sir Anas', exp: 3 }


// <------------------------------------------------END--------------------------------------------------->
// Aliased object type


// English:
// A type aliased object in TypeScript is an object whose type is defined using a type alias. It allows you to create a 
// custom name for an object type, making the code more readable and reusable.

// Urdu:
// TypeScript mein object ko type type alias ka use karke define karty hain. Ye hamen aik custom structure banane ki 
// sahulat deta hai object ke liye jo code ko ziada readable or reusable banata hai. or is data type structure ko ham 
// multiple object ko assigne kar ke use kar sakty hain..



type student = {
    name: string,
    age: number,
    class: string
};


let Student_data: student = {
    name: "shoaib",
    age: 23,
    class: "Governer sindh IT classes"
};

console.log(Student_data.name);    // Output: shoaib
console.log(Student_data["class"]) // Output: Governer sindh IT classes

// <------------------------------------------------END--------------------------------------------------->
// interface type object 

// English:
// An interface object type in TypeScript defines the shape of an object, specifying the properties and their types. 
// It provides a contract that objects must adhere to, ensuring consistent structure and type safety across the code.

// Roman Urdu:
// Interface object type TypeScript mein object ki shape ko define karta hai properties or unke types ko specify karta hai.
// Ye aik contract provide karta hai ji sse objects ko follow karna hota hai jis se code mein consistent structure or
// type safety ensure hoti hai.



interface student2 {
    name: string,
    age: number,
};

let student2: student2 = {
    name: "shoaib",
    age: 23,
}


// <------------------------------------------------END--------------------------------------------------->
// anonymous, type alias, interface

// Anonymous Objects are quick and easy for single-use scenarios but lack reusability.

// Type Alias Objects offer a named type for reuse and flexibility in defining complex types.

// Interface Objects provide a structured contract supporting extension and implementation ideal for
// object-oriented and consistent design practices.