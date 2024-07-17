//Note: Rest, optional and default parameters can only
// be at the end of the parameter list


// Rest parameter function

// Rest parameter mein ham multiple values ko store kar sakty hain...
function Rest_func(firstName: string, ...lastName: string[]){

    return firstName + " " + lastName.join(" ");

};

let print = Rest_func("Bob", 'lucos', "Alex", "Piter");
console.log(print);


// <--------------------------------------------END---------------------------------------------->
//anonymous function type with Rest parameters


// Anonymous function Rest parameter data type bnany ke bad function assign kar ke run krwa rhy hain...
let ResAnoy_func: (first: string, ...last: string[]) => string =

function(firstName: string, ...lastName: string[]): string {

    return firstName + " " + lastName.join(" ");

};


let print2 = ResAnoy_func("Bob", "Alex", "Hales", "newton", "Einstien"); // Accepted
console.log(print2);  // Output: Bob Alex Hales newton Einstien