// English:
// Intersection types in TypeScript allow you to combine multiple types into one. This means an object
// can have properties and methods from all the combined types.
;
;
let Objected = {
    teacher_name: "Sir Anas",
    exp: 8,
    student_name: "Shoaib",
    age: 23
};
console.log(Objected.student_name); // Output: Shoaib
console.log(Objected["teacher_name"]); // Output: Sir Anas
console.log(Objected); // Output: { teacher_name: 'Sir Anas', exp: 8, student_name: 'Shoaib', age: 23 }
;
;
let person_data = {
    name: "shoaib",
    age: 23,
    skills: "Typscript",
    exp: 3,
};
console.log(person_data);
export {};
