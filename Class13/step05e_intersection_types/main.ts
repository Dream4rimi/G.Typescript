// English:
// Intersection types in TypeScript allow you to combine multiple types into one. This means an object
// can have properties and methods from all the combined types.


// Roman Urdu:
// TypeScript mein hamen Intersection types multiple types ko combine karne ki sahulat detey hain. 
// Iska matlab hai ke aik object mein sari combined types ki properties or methods rakh sakty hain.


// data type = type
// union = | (options)
// litrals = exact value
// alias = nickname

interface student {
    student_name: string,
    age: number
};


interface teacher {
    teacher_name: string,
    exp: number 
};


type Intersection_type = student & teacher;


let Objected: Intersection_type = {

    teacher_name: "Sir Anas",
    exp: 8,
    student_name: "Shoaib",
    age: 23

};


console.log(Objected.student_name);     // Output: Shoaib
console.log(Objected["teacher_name"]);  // Output: Sir Anas
console.log(Objected);     // Output: { teacher_name: 'Sir Anas', exp: 8, student_name: 'Shoaib', age: 23 }



// <-----------------------------------------------END-------------------------------------------->
// example 2


interface person1 {
    name: string,
    age: number
};

interface person2 {
    skills: string,
    exp: number
};


let person_data: person1 & person2 = {  // darect intersection type assign

    name: "shoaib",
    age: 23,
    skills: "Typscript",
    exp: 3,

};

console.log(person_data); // Output: { name: 'shoaib', age: 23, skills: 'Typscript', exp: 3 }