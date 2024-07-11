// type erorr

// English:
// A type error occurs when an operation is performed on a value of an inappropriate data type.
// It happens when the code expects a certain type of data but gets a different type instead.

// Urdu:
// Type error tab ata hai jab aik operation ko galat data type ki value par perform kiya jaye. 
// Ye us waqt hota hai jab code kisi specific type ka data expect kar raha ho lekin usay mukhtalif type mil jaye.


let message = "Hello world";
console.loger(message)



// main.ts:2:9 - error TS2551: Property 'loger' does not exist on type 'Console'. Did you mean 'log'?

// 	2 console.loger(message);
//       ~~~~~

// 	../../../../../../usr/local/lib/node_modules/typescript/lib/lib.dom.d.ts:17095:5
// 	17095     log(...data: any[]): void;
//           ~~~~~~~~~~~~~~~~~~~~~~~~~~
// 	'log' is declared here.


// 	Found 1 error in main.ts:2