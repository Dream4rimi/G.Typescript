// Rest parameter function
// Rest parameter mein ham multiple values ko store kar sakty hain...
function Rest_func(firstName, ...lastName) {
    return firstName + " " + lastName.join(" ");
}
;
let print = Rest_func("Bob", 'lucos', "Alex", "Piter");
console.log(print);
export {};
