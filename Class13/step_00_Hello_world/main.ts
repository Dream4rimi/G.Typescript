let veriable: string = "shoaib";

console.log(veriable);    // output shoaib



// Notes

// 1. tsc --init => tsconfig.json

// Ye command aik default tsconfig.json file create karti hai jo TypeScript compiler ki
// configuration options ko specify karti hai.
// Use Case:
// Is se ham apne TypeScript project ke liye settings configure kar sakte hain jaise source files,
// target JavaScript version, or other compiler options.


// <-----------------------------------------------END-------------------------------------------------->
// 2. npm init -y => package.json

// Ye command aik default package.json file create karti hai bina kisi prompt ke or 
// sari default settings ko accept karte huy.
// Use Case:
// Is se ham Node.js project ka basic configuration setup ho jata hai jisme project metadata or dependencies ki
// information hoti hai.

// <-----------------------------------------------END-------------------------------------------------->
// 3. npm i @types/node -D => 

// Ye command Node.js ke type definitions ko install karti hai as a development dependency.
// Use Case:
// Is se hamem Node.js APIs ke liye TypeScript ki type information milti hai jo hmary development process mein
// madad karti hai, taky ham TypeScript ke strict type checking ka fayda utha sakein.