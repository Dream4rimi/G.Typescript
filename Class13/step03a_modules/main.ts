import a from './first.js'
console.log(a);

import { hero, yours as my } from './first.js';  // import karte waqt file ka name bhi change kar sakty hain...
let value = hero;
let value2 = my;

console.log(value);
console.log(value2);


import { myName, myBrother } from './second.js'
console.log(myName + " " + myBrother);


import {add, sub} from './third.js'
console.log(add(3, 7), sub(7, 3));


import All_Data from './fouth.js'

let data1 = All_Data.devide(15, 3);
console.log(data1);

let data2 = All_Data.modulus(31,4);

let data3 = All_Data.power(3, 3);

console.log(data2);
console.log(data3);


// ES6 Modules:

// 1.Named Exports
// 2.Default Export
// 3.Importing Entire Module


// Notes
// English:
// Modules in programming are self-contained units of code that encapsulate related functions, classes, or variables.
// They help in organizing code, improving reusability, and managing dependencies by allowing code to be imported and
// exported between different files.

// Urdu:
// Modules programming mein self-contained code ke units hote hain jo related functions, classes, ya variables ko
// encapsulate karte hain. Yeh code ko organize karne, reusability improve karne, aur dependencies manage karne mein
// madad karte hain by allowing code ko different files ke beech import aur export karne ke zariye.