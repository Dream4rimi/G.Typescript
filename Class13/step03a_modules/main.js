import a from './first.js';
console.log(a);
import { hero, yours as my } from './first.js'; // import karte waqt file ka name bhi change kar sakty hain...
let value = hero;
let value2 = my;
console.log(value);
console.log(value2);
import { myName, myBrother } from './second.js';
console.log(myName + " " + myBrother);
import { add, sub } from './third.js';
console.log(add(3, 7), sub(7, 3));
import All_Data from './fouth.js';
let data1 = All_Data.devide(15, 3);
console.log(data1);
let data2 = All_Data.modulus(31, 4);
let data3 = All_Data.power(3, 3);
console.log(data2);
console.log(data3);
// yahn par ham ne alag alg files se data liya hai module ka use kar ke import export ke zariye
// 2 tariqo se 1 export name keyword se or 2 export default key word se.........
