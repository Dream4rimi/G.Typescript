// Named function with optional and default parameters
// (Note that the parameter type will be optional when used with default value)
function Name_para(def_para = "Shoaib", Opt_para) {
    if (Opt_para) {
        return def_para + " " + Opt_para;
    }
    else {
        return def_para;
    }
}
;
let print = Name_para('mithooo');
console.log(print);
// let print2 = Name_para("azlaan", "Khan", "beta"); // Error becouse extra property in calling line 
// console.log(print2); 
let print2 = Name_para("Mitho", "khan");
console.log(print2);
// <-----------------------------------------------END------------------------------------------------>
// Function normal parameter, optional parametr and default paramter
function Name_data(firstName, age, message = "Hello") {
    if (age !== undefined) {
        return `${message} this is me ${firstName} and i am ${age} year old`;
    }
    else {
        return `${message} my name is ${firstName}`;
    }
    ;
}
;
let final1 = Name_data("Shoaib");
console.log(final1);
let final2 = Name_data("Shoaib", 23);
console.log(final2);
let final3 = Name_data("Shoaib", 23, "Hi");
console.log(final3);
export {};
// <-----------------------------------------------END------------------------------------------------>
