// const Enum

// No Extra Code: const enum bhi normal enum ki tarhn work karta hai ye JavaScript mein extra code generate nhi karta 
// jab ke normal enum javascript mein extra code genrate kar deta hai or const enum sirf values ko inline karta hai
// matlab numbers se replace kar deta hai jis ki wajah se extra code generate nahi hota.


// Case 1
// normly enum member ki value ko acces kar rhy hain...
const enum Color {Red, Green, Blue};

let get: Color = Color.Green;
console.log(get); // Output: 1


// Case 2
// member (property) ke zariye value ko acces kar rhy hain...
const enum Color1 {Red = 1, Green, Blue};

let get1: Color1 = Color1["Green"];
console.log(get1); // Output: 2



// Case 3
// const enum mein ham property ke zariye value to acces kar sakty hain
// lekin value ke zariye property ko acces nahi kar sakty...  
const enum Color2 {Red = 1, Green = 4, Blue = 6};

// let get2: Color2 = Color2[4] // Error


// <-----------------------------------------END----------------------------------------->
// Example 2


const enum Week_days {
    Monday,    // this is not value => this is property
    Tuesday,   // member = 1
    Wednesday, // member = 2
    Thursday,  // member = 3
    Friday,    // member = 4
    Saturday,  // member = 5
    Sunday     // member = 6
};

let data: Week_days = Week_days[3]; // Error becouse enum cant print property
console.log(data);


















