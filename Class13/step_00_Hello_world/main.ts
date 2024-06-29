let veriable: string = "shoaib";

console.log(veriable);    // output shoaib


// Notes

// tsc --init tsconfig file

// TS config file, yaani TypeScript configuration file, ek file hoti hai jo ek TypeScript project ke root directory mein
//  hoti hai. Is file mein TypeScript compiler ko project ke behavior aur settings ke bare mein bataya jata hai. 
//  TypeScript compiler, jo tsc command ke through invoke hota hai, is config file ko dekhta hai aur uske according 
//  TypeScript code ko compile karta hai JavaScript mein.
//  Yeh config file typically tsconfig.json naam se hoti hai, lekin aapko manually bhi define ki ja sakti hai aur custom 
//  name bhi de sakte hain, jaise ki my-tsconfig.json


// npm init -y package.json file

// tsc --init ek command hai jo TypeScript compiler (tsc) ke through use ki jati hai. Is command ka use karke aap 
// apne TypeScript project ke liye ek default configuration file (tsconfig.json) generate kar sakte hain. Yeh file
// TypeScript compiler ko batati hai ki kaise aapke TypeScript code ko JavaScript mein compile karna hai. Aayiye isko
// simple words mein samjhte hain:


// npm i @types/node -D

// npm i @types/node -D ek command hai jo Node.js ke liye TypeScript type definitions install karne ke liye use hoti hai.
// TypeScript ek strongly typed superset hai JavaScript ka, aur type definitions TypeScript ko batati hain ki modules 
// ke functions, variables, aur objects ka type kya hai. @types/node package Node.js ke built-in modules (jaise ki fs,
// http, path, etc.) ke liye type definitions provide karta hai. -D flag batata hai ki is package ko development 
// dependencies (devDependencies) mein save kiya jaye, jo development phase mein zaroori hote hain, lekin production
// mein nahi. Ye command run karne par @types/node package node_modules mein install ho jata hai aur package.json file
// mein devDependencies section mein add ho jata hai, jisse TypeScript project mein Node.js modules ke types available 
// ho jate hain, aur better type checking aur IntelliSense support milta hai.