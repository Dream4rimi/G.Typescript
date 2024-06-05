
// example 1

import { City_country } from "./main.js";   
import { Programer } from "./main.js";

let city_Data = City_country("karachi", "pakistan") ;
let develper_data = Programer("Shoaib", 23, "Typescript");


console.log(city_Data);
console.log(develper_data);

// Note
// function ya veriable ke sath agr export keyword likh kar dosri file se import krwaenge to
// hamne import mein us function ya veriable kaa naam curly braces {...} mein likhna parega...
// or agr export default name.. ka use karenge to file ko import karte huy hamen curly braces nahi lgane parenge
//  lekin ye defaulr export sirf aik hi dafa use kar sakty hain export krwany ke liye warna agr har cheex ke liye 
// alag se export default likhenge to ye work nahi karega  

// <--------------------------------------END--------------------------------------->
// example 2

// import {heeling} from "./main.js";


// let product_ = 700
// let disco = 30

// let print = heeling(product_, disco);
// console.log(print);