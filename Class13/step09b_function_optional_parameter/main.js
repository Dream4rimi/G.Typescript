// Optional parameter function
// ye aik aisa function hota hai jiske optional parameter mein han value den ya na den
// ye function hmesha exicute hoga... 
function myName(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
}
;
let get = myName("Shoaib"); // Ok
console.log(get); // Output: Shoaib
let get2 = myName("shoaib", "Khan", "Or"); // Error beacouse function calling line accept only 2 argument 
console.log(get2); // Error
let get3 = myName("Shoaib", "Khan"); // Ok
console.log(get3); // Output: Shoaib Khan
// <----------------------------------------------END-------------------------------------------->
// Anonymous function type with optional parameters
let yourName = function (firstName, lastName) {
    if (lastName !== undefined) {
        return `My first name ${firstName} and last name ${lastName}`;
    }
    else {
        return firstName;
    }
};
let print1 = yourName("shoaib"); // Accepted
console.log(print1); // Output: shoaib
let print2 = yourName("shoaib", "khan"); // Accepted
console.log(print2); // Output: shoaib khan
export {};
