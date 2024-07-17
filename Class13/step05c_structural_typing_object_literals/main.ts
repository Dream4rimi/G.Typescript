// English:
// structural_typing_object_literals:
// refers to using structural typing in TypeScript where object literals are compared based on their shape
// (properties and methods) rather than their specific type names.

//  Urdu:
// structural_typing_object_literals: ka matlab hai
// TypeScript mein structural typing ka use karna, jahan object literals ko unki shape (properties or methods) ke
// base par compare kiya jata hai na ke unke specific type names ke base par.

// Structural Typing: 
// TypeScript mein structural typing ka matlab hai ke agar do objects  same properties ke hain
// to wo objects aik dosre ko replace kar sakte hain chahey unki type ya naam kuch bhi ho.

// <-------------------------------------------------END------------------------------------------------------>
// Fresh and stale object
// Fresh => New
// Stale => purana


// object literals bana kar hamne veriable ko assign kar ke aik object bana diyya or jo first time object create 
// hota hai ham usy Fresh object kehty hain matlab newly object abhi abhi tayyar hua huwa...

// Fresh Object
let person = {
    name: "shoaib",
    age: 23,
    skills: "Typescript",
    Exp: 3,
}


// Question: Stale Object => object purana kab hota hai matlab aik new object jo ham bnaty hain to
// wo stale object kab kehlata hai?

// Vlaue => modify
// veriable => Assign
// function => argument pass

// 3 Cases mein Fresh object Stale object kehlata hai. 
// (1.jab ham object ki koi value modify karte hain tab)
// (2.jab ham object ko kisi veriable mein assign karte hain tab)
// (3.jab us object ko ham function mein pass karte hain as an argument)
// tab hmara fresh object stale object ban jata hai.


// Case 1: Vlaue => modify
// isme hamne name ki value ko modify kar diyya dosry name se ab ye stale object kehlaega...

let person_1 = {
    name: "shoaib",
    age: 23,
    skills: "Typescript",
    Exp: 3,
}

person_1.name = "Azlaan"



// Case 2: veriable => Assign
// isme hamne object ko aik veriable mein assign kar diyya ab ye object stale object ban gaya... 

let person_2 = {
    name: "shoaib",
    age: 23,
    skills: "Tpescript",
    Exp: 3,
};

let Get = person_2;



// Case 3: function => argument pass
// isme hamne function ko argument ke tor par object pass kar diyya ab ye object stale object kehlaega...

let person_3 = {
    name: "shoaib",
    age: 23,
    skills: "Tpescript",
    Exp: 3,
};

function Obj_fun(parameter: any){

};

Obj_fun(person_3);

// <-------------------------------------------------END------------------------------------------------------>
// Structural Typing


// Case 1
// type alias have 4 propertys
type data_type1 = {
    name: string,
    age: number,
    roll_num: number,
    alive: boolean,
   
};

// ye aik fresh object hai isme agr type ke hisab se property km ya ziyada denge to ye error dega kiyun ke isko
// wahifix propertys chahiye hongi jo isme define ki gai hain... 

// object have 5 propertys
let Stale_Obj1: data_type1 = {
    name: "shoaib",
    age: 23,
    roll_num: 404428,
    alive: true,
    class: 16 // Error : kiyun ye property extra hai.
};




//Case 2

// type alias have 4 propertys
type data_type2 = {
    name: string,
    age: number,
    roll_num: number,
    alive: boolean,
   
};

// Object have 5 propertys
let Stale_Obj2 = {
    name: "shoaib",
    age: 23,
    roll_num: 404428,
    alive: true,
    class: 16
};


// yahn par new veriable ko 4 property wali data types assign kar ke usme object ko assgin karra rhy hain to object ki 
// jo extra property hai wo ignore kardi jaegi new veriable mein yahn par fresh object ki tarhn erorr nahi aega 
// isi cheez ko structural typing kehty hain...

let getting: data_type2 = Stale_Obj2;

console.log(getting)


// <-------------------------------------------------END------------------------------------------------------>
// These two interfaces are completely
// transferrable in a structural type system:


interface ball {
    diameter: number
};

interface bat {
    diameter: number
};


let Ball: ball = {diameter: 10};
let Bat: bat = {diameter: 20};

Ball = Bat
Bat = Ball

console.log(Ball) // Output: { diameter: 20 }
console.log(Bat); // Output: { diameter: 20 }

// If we add in a type which structurally contains all of
// the members of Ball and Bat, then it also can be
// set to be a ball or bat.



interface tube {
    diameter: number,
    length: number
};


let Tube: tube = {diameter: 12, length: 3};


Tube = Ball // Error genrate hoga kiyun ke Ball object ke andar sirf aik diameter ki property hai or length ki property nahi hai

Ball = Tube; // ye accepted hoga kiyun ke Ball ki property bhi Tube mein hai or aik extra property bhi assign ho rhi hai jo error genrate nahi karegi


// Because a Ball does not have a length, then it cannot be
// assigned to the Tube variable. However, all of the members
// of Ball are inside tube, and so it can be assigned.
  
// TypeScript is comparing each member in the type against
// each other to verify their equality.


// <-------------------------------------------------END------------------------------------------------------>
// Now lets do it Case By Case

// Case when "FRESH"" object literal are assigned to a variable 
// Rule: When a fresh object literal is assigned to a variable or passed for a parameter of a non-empty target type, 
// it is an error for the object literal to specify properties that don't exist in the target type.
// The rationale for the below two errors is that since the fresh types of the object literals are 
// never captured in variables, static knowledge of the excess or misspelled properties should not be silently lost. 


let myName = {name: "Shoaib", id: 3};

// Case 1
myName = {id: 1, name: "Azlaan"}; // sirf wahi types assign ho sakti hain jinki same propertys hongi.

// Case 2
myName = {id: 4, person_name: "Tom"};  //Case 2a: Error, renamed or missing property.


//Case 2b 
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:


var x: {id: number, [x: string]: any}; // Note now 'x' can have any name, just that the property should be of type string 

x = {id: 7, fullName: "Shoaib khan"};  // Ok, `fullname` matched by index signature

myName = {id: 33, name: "Shoaib", age: 23}; //Case 3: Error, excess property.


// [x: string]: any; isko index signature kaha jata hai. or isme (key) string, main or usy value kisi bhi data type ki 
// dey sakty hain or multiple key values pairs create kar sakty hain jab index signature ka use karte hain...

// <-------------------------------------------------END------------------------------------------------------>
//Case when STALE object literal are assigned to a variable 


let myName2 = {id: 8, name: "Tom"};

// Case 1
myName = myName2; // Case 1: can only assign a type which has the the same properties, rule same for fresh and stale object



let myName3 = {id: 1, name_person: "Tom"};

// Case 2
myName = myName3; //Case 2: Error, renamed or missing property, rule same for stale and fresh object.


//Case 2b
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:

var x: {id: number, [x: string]: any}; //Note now 'x' can have any name, just that the property should be of type string.

var y = {id: 1, fullName: "sir zia"};

x = y; // Ok, `fullname` matched by index signature.


var myName4 = {id: 2, name: "shoaib", age: 22};


// Case 3

myName = myName4; //Case 3: Ok, excess property allowed in case of stale object which is different from fresh object.

// <-------------------------------------------------END------------------------------------------------------>


var x1: {foo: number};

x1 = {foo: 3, baz: 2}; // Error, excess property `baz`



var y1: {foo: number, bar?: number};

y1 = {foo: 1, baz: 2}; // Error, excess or misspelled property `baz`



var a: {foo: number};

var a1 = {foo: 1, baz: 2};

a = a1  // No Error



var z: {foo: number, bar?: number};

var z1 = {foo: 1, baz: 2};

z = z1; // No Error
