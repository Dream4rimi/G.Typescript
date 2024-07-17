// Function overloads give us type-checked calls
// Function overloading se code ko maintain karna asan hota hai kyun ke ham aik function ko alag alag data type ki 
// values assign karenge to wo error dega isliye ham function overloads ka istmal karte hain taky opration 
// perform kar saken bjaye iske ke har aik data-type ki value ke liye alag se function define karen...


// its customary to order overloads from most specific to least specific 

function add(arg1: string, arg2: string): string;    // option 1
function add(arg1: number, arg2: number): number;    // option 2 
function add(arg1: boolean, arg2: boolean): boolean; // option 3

//this is not part of the overload list, 
//so it has only three overloads

function add(arg1: any, arg2: any): any {

    return arg1 + arg2;

};

//Calling 'add' with any other parameter types would cause an error except for the three options
console.log(add(23,3));                // Accepted
console.log(add("Hello", "Shoaib"));   // Accepted
console.log(add(true, false));         // Accepted
console.log(add("Azlaan", "Awais"));   // Accepted

console.log(add(true, "Shoaib"))       // Error Becouse this function signature data type not define... 