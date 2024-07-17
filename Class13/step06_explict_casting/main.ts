
// Explicit casting,
// TypeScript mein ka matlab hai ke developer manually aik value ko ek type se doosri type mein convert karta hai.
// Ye tab use hota hai jab aap TypeScript ko specifically batana chahte hain ke aapko pata hai ke ek value ek certain type ki hai, aur aap TypeScript ko us value ko us type mein treat karne ke liye keh rahe hain.

let my_Name: unknown = "Shoaib";

console.log( (my_Name as string).length ); // Output: 6
console.log((<string> my_Name).length);   // Output: 6



let heera: unknown = "misba";
heera = "ali";

let new_Heera = heera as number

console.log(new_Heera);