// rest para meter
// mutable ya un mutable in tuple
// from w3 school
// async bnany ki zrorat hamen kiyun pari
// run time envoirment 4 component call stack webApi event loop task Queue
// function scop
// v8 engine 

let tuple: [string, number, boolean] = ["shoaib", 23, true];

let tuple2: (number | string | boolean)[] = ["shoaib", true, "Haseeb", 23];


function add(num: number, num2: number): number;
function add(first: string, last: string): string;
function add(Fname: string, age: number): string;
function add(Fname: number, age: string): string;
function add(Fname: boolean, age: boolean): boolean;

function add(value1: any, value2: any): any {
  return value1 + " " + value2;
}

console.log(add("shoaib", "haseeb"));
console.log(add(23, 26));
console.log(add("shoaib", 23));
