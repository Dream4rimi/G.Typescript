// Named function with optional and default parameters
// (Note that the parameter type will be optional when used with default value)



function Name_para(def_para: string = "Shoaib", Opt_para?: string){

    if(Opt_para){
        return def_para + " " + Opt_para;
    }
    else {
       return def_para;
    }


};

let print = Name_para('mithooo');
console.log(print);

// let print2 = Name_para("azlaan", "Khan", "beta"); // Error becouse extra property in calling line 
// console.log(print2); 

let print2 = Name_para("Mitho", "khan");
console.log(print2);    


// <-----------------------------------------------END------------------------------------------------>
// Function normal parameter, optional parametr and default paramter


function Name_data(firstName: string, age?: number, message: string = "Hello"): string{

    if(age !== undefined){
        return `${message} this is me ${firstName} and i am ${age} year old`;
    }
    else{
        return `${message} my name is ${firstName}`;
    };

};

let final1 = Name_data("Shoaib");  // Accepted
console.log(final1); // Output: Hello my name is Shoaib

let final2 = Name_data("Shoaib", 23);  // Accepted
console.log(final2);  // Output: Hello this is me Shoaib and i am 23 year old

let final3 = Name_data("Shoaib", 23, "Hi"); // Accepted
console.log(final3);  // Output: Hi this is me Shoaib and i am 23 year old 

// <-----------------------------------------------END------------------------------------------------>
//anonymous function type with defult parameters 
//(Note that the parameter type will be optional when used with defult value)


// agr hamne function ke liye anonymous data type bnani hai or aik parameter ko default value deni hai to usko data type
// mein define karty huy optional denge or jab function define karenge tab us parameter ko default value set kar denge

let Addop_def: (name: string, fName?: string) => string = 

function(name: string, fName: string = "Khan"): string {

    if(fName){
    return name + " " + fName;
    }
    else{
        return name;
    }
};

let val1 = Addop_def("Shoaib"); // Accepted
console.log(val1);  // Output: Shoaib Khan

let val2 = Addop_def("Shoaib", 'Ahmed'); // Accepted
console.log(val2);  // Output: Shoaib Ahmed