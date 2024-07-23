// fresh object and stail object a = b dono alag object
// arrow function kya hai or isy array mein use karty hain
// for loop
// while loop
// do while loop 
// for in loop
// for of loop
// visit programiz website for loops details

// Complete Employee Management System
// Requirements:
// 1) Use the same codebase where I left. from Sir Anas
// 2) Use for loop to insert multiple employees
// 3) Prepare edit, delete & updated function
// 4) Use inquirer to get input for employee id, employee name & salary

// <-----------------------------------------------END--------------------------------------------------->
// fresh object and stale object ? a = b dono alag object

// jab hamne apni product ki price or specs online karty hain to wo fresh object kehlati hai or agr bad mein hamne
// uski price barha di ho lekin jo hmari store mein product price hai wo customer ko purani show ho rhi ho to 
//wo stale object kehlata hai ?

// Fresh Object kya hota hai?
// Fresh object wo object hota hai jisme bilkul naya or recent (updated) data hota hai. Matlab is object mein 
// jo bhi information hai wo latest or accurate hai.


// Jab aapne abhi abhi product ki price update ki ho aur aap kisi customer ko latest price dikhana chahte hain.

// let product = {
//     id: 101,
//     name: "Laptop",
//     price: 1000 // Latest price
//   };
//   console.log("Fresh Product Price: " + product.price); // Output: Fresh Product Price: 1000

  
// <-----------------------------------------------END--------------------------------------------------->
// fresh object and stale object a = b dono alag object


// Stale object wo object hota hai jo purana hai or isme outdated (purani) information hai.
// Matlab is object mein jo bhi information hai wo update nahi hui or accurate bhi nahi hai.

// Agar aapke system mein purani price save hai aur aapne ab tak update nahi ki.

    // let product = {
    //     id: 101,
    //     name: "Laptop",
    //     price: 900 // Old price
    //   };
    //   console.log("Stale Product Price: " + product.price); // Output: Stale Product Price: 900


// <-----------------------------------------------END--------------------------------------------------->
// Arrow function kya hai or isy array mein use kesy karte hain

// Arrow function aik short foam hai traditional function ka. jo function aik single statment return kar rha ho to
// uske liye hamen curly breces lgane ki zrorat nahi parti or na hi return krwany ke liye return keyword likhne ki
// zrorat parti hai ye sab apne ap kar deta hai arrow function.
// Arrow functions ko map, filter, reduce jaise array methods mein commonly use kiya jata hai.


// example 1
// Traditional function ki jagah arrow function ka syntax kuch is tarah hota hai:

// Traditional function
// function add(a, b) {
//     return a + b;
//   }
  

//   // Arrow function
//   const add = (a, b) => a + b;
  

// example 2
// Arrow functions ko ham objects ke methods ke andar bhi use kar sakte hain.

// Traditional function
// let user = {
//     name: "Ali",
//     sayHi: function() {
//       console.log("Hi, I am " + this.name);
//     }
//   };
//   user.sayHi(); // Output: Hi, I am Ali
  

//   // Arrow function
//   let user2 = {
//     name: "Sara",
//     sayHi: () => {
//       console.log("Hi, I am " + this.name);
//     }
//   };
//   user2.sayHi(); // Output: Hi, I am undefined
  

// <-----------------------------------------------END--------------------------------------------------->
// for loop

// for (initialExpression;  condition;  updateExpression) {
//      for loop body
// }



// (loop counting starts from 0)

// for (let i = 0; i < 3; i++){       // Output    // Hello world
//     console.log("Hello world")                  // Hello world
// }                                               // Hello world



// example 2

// for (let i = 0; i < 6; i ++){
    
//     if (i == 2){
//         continue;  // skip
//     }
//     console.log(i)
// }



// Initial value: let i = 0 (counting starts from 0)
// Condition: i < 3 (loop chalta hai jab tak i 3 se chhota hai)
// Increment: i++ (har iteration ke baad i ki value 1 se badh jaati hai)

// Pehla iteration: i = 0 (Hello world print hota hai)
// Doosra iteration: i = 1 (Hello world print hota hai)
// Teesra iteration: i = 2 (Hello world print hota hai)

// Jab i 3 ho jaata hai, condition i < 3 false ho jaati hai, isliye loop ruk jaata hai.

// <-----------------------------------------------END--------------------------------------------------->
// while loop

// While loop repeatedly block of code ko exicute karta rehta hai jab tak uski condition true rehti hai
// Jab condition false ho jaati hai, loop band ho jaata hai
// while loop ham tab use karte hain jab hamen nahi pata hota ke loop kitni bar chlana hai
// bas condition ke true rehny tak code ko bar bar exicute karte rehna hai...  


// // example 1
// let number = 0;

// // // is loop ki counting bhi zero se start hoti hai
// while (number <= 5) {
//     console.log(number);
//     number++;
// }

// console.log ('This is final value ', number);
// // output in seperate line  0 1 2 3 4 5



// example 2

import inquirer from 'inquirer';

let keepGoing = true;

while (keepGoing) {
    const answer = await inquirer.prompt([
        {
            name: 'response',
            message: 'Do you want to continue? (yes/no)',
            type: 'input'
        }
    ]);

    if (answer.response.toLowerCase() === 'no') {
        keepGoing = false;
    } else {
        console.log('Continuing...');
    }
}

// <-----------------------------------------------END--------------------------------------------------->
// do while loop

// do while loop ka use ham tab karte hain jab hamen block of code ko kam-se-kam aik dafa exicute kar ke.
// phir condition check karty huy decide karna hai ke loop ko dubara chlana hai ya nahi.

// do while loop se ham user se tab tak bar bar input lete rehty hain jab tak ke wo correct information
// put nahi karta acces karne ke liye...


// example 1

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 5);



// example 2
// ye loop tab tak bar bar chalta rhega jab tak isme correct answer nahi dety

// import inquirer from "inquirer"

let correctAnswer = "paris";
let userAnswer;

do {
    let response = await inquirer.prompt([
        {
            type: 'input',
            name: 'answer',
            message: 'What is the capital of France?'
        }
    ]);

    userAnswer = response.answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        console.log("Correct answer");
    } else {
        console.log("Wrong answer. Try again!");
    }
} while (userAnswer !== correctAnswer);

// is line ka matlab hai jab tak userAnswer or correctAnswer main same jawab nahi ata tab tak iski value true hai
// lekin jese hi dono mein same jawab aega inki value false ho jaegi or loop ruk jaega....

// <-----------------------------------------------END--------------------------------------------------->
// for in loop

// ye loop object ki key values paires ko aik aik kar ke apne andar get karta hai or unko sepearte line mein
// print krwa deta hai or is se ham array list ko bhi print krwa sakty hain lekin mostly ye object ke liye use hota hai
// array ke liye ham for of loop ka use karte hain...


// example 1

let shoaib: { name: string, age: number, address: string } = {
    name: "shoaib",
    age: 23,
    address: "mai nahi btao ga"
};

// Start for in loop
for (let key in shoaib) {
    console.log(`${key}: ${shoaib[key]}`);  // working in erorr
}

// <-----------------------------------------------END--------------------------------------------------->
// for of loop

// ye loop array ki list mein se har element ko aik aik kar ke apne andar get karta hai or isy seperate line mein 
// print krwa deta hai...

// let arrayName: string[] = ["shoaib", "shahzaib", 'arshad', "asif"];

// for (let arrO of arrayName){
//     console.log(arrO)     // Output in seperate line:  shoaib shahzaib arshad asif
// };


// <-----------------------------------------------END--------------------------------------------------->
// Complete Employee Management System
// Requirements:
// 1) Use the same codebase where I left.        //  from Sir Anas
// 2) Use for loop to insert multiple employees
// 3) Prepare edit, delete & updated function
// 4) Use inquirer to get input for employee id, employee name & salary


// this is work from Sir Muhamad Anas Seth

// Defining Types
interface Employee {
    employeeId: number;
    employeeName: string;
    salary: number;
}

// Variable Initialization
let collectionOfEmployee: Employee[] = [
    {
        employeeId: 7625,
        employeeName: "Fahad Khan",
        salary: 25000
    },
    {
        employeeId: 7487,
        employeeName: "Imran Sindhi",
        salary: 50000
    },
    {
        employeeId: 242536,
        employeeName: "Atif Aslam",
        salary: 100000,
    },
];

let filterBySalary = collectionOfEmployee
    .filter((employee) => employee.salary >= 50000);

let filterByEmployeeId = collectionOfEmployee
    .filter((employee: Employee) => employee.employeeId == 7487);

let filterByEmployeeName = collectionOfEmployee
    .filter((employee: Employee) => employee.employeeName.includes("Atif"))


// <-----------------------------------------------END--------------------------------------------------->
// Complete Employee Management System
// Requirements:
// 1) Use the same codebase where I left.        //  from Sir Anas
// 2) Use for loop to insert multiple employees
// 3) Prepare edit, delete & updated function
// 4) Use inquirer to get input for employee id, employee name & salary


import inquirer from 'inquirer';

// Ye hmara main data base hai
let main_data = [];

// Loop ko true/false condition assign karne wala variable 
let condition = true;

// Ye hmara loop hai. ye ham hain. or ye hmara project tayyar ho rha hai..........
while (condition) {

    // Objects se aai sari information yahan store ho rahi hai... 
    let information = await inquirer.prompt([
        {
            name: "name",
            message: "What is your name?",
            type: "string"
        },
        {
            name: "id",
            message: "What is your id?",
            type: "number"
        },
        {
            name: "salary",
            message: "How much is your Salary?",
            type: "number"
        }
    ]);

    // Objects se aai information main array mein transfer kar rahe hain...
    main_data.push(information);
    console.log(main_data);

    // Yahan ham user se pooch rahe hain ke variable dobara chalaya jaye ya nahi?...
    let again = await inquirer.prompt([
        {
            name: "ques",
            message: "Do you want to add more employees?",
            type: "confirm",
            default: "true"
        }
    ]);

    // Is question se aai true ya false ki value condition ke variable ko de rahe hain...
    if (again.ques === false) {
        condition = false;
        console.log("Your final list: ", main_data);
    }
}

// Feature provide karne ke liye user ka input le rahe hain 
let feature = await inquirer.prompt(
    {
        name: "modify",
        message: "Do you want to modify your list?",
        type: "confirm",
        default: "true"
    }
);

// User agar modification karna chahta hai to usay ye list show karwa rahe hain main_data ki...
if (feature.modify === true) {

    let choice = await inquirer.prompt(
        {
            name: "list",
            message: "Please select option",
            type: "list",
            choices: ["Edit", "Delete", "Updated_function"]
        }
    );

    // Edit ka feature apply kar rahe hain...
    if (choice.list === "Edit") {


        // ye method main_data ke andar jitne bhi objects hain un sab ko alag alag kar deta hai... 
        let edit_steps = main_data.map((item, index) => {
            return {
                name: `Name: ${item.name}, ID: ${item.id}, Salary: ${item.salary}`,
                value: index
            };
        });


        // employee list mein se jis par modification krwani ho usy select krwa rhy hain...
        let selected = await inquirer.prompt([
            {
                name: "it",
                message: "Which employee do you want to edit?",
                type: "list",
                choices: edit_steps
            }
        ]);


            // user se object ke items choose krwa rhy hain taky un par modification krwa saken...
        let item = await inquirer.prompt([
            {
                name: "choose",
                message: "Please select what you want to edit?",
                type: "list",
                choices: ["Name", "ID", "Salary"]
            },
            {
                name: 'new',
                message: "Enter new value to edit?",
                type: "input"
            }
        ]);


          // object ke har item ko user se choose krwany ke bad replace kar rhy hain....
        switch (item.choose) {
            case "Name":
                main_data[selected.it].name = item.new;
                break;
            case "ID":
                main_data[selected.it].id = Number(item.new);
                break;
            case "Salary":
                main_data[selected.it].salary = Number(item.new);
                break;
        }

        console.log("Your list after Edit", main_data);
    };


    // object information delete karne ka feature
    if(choice.list === "Delete"){

      // ye method main_data ke andar jitne bhi objects hain un sab ko alag alag kar deta hai... 
        let step_by_step = main_data.map((item, index) => {
            return {
                name: `Name: ${item.name}, ID: ${item.id}, Salary: ${item.salary}`,
                value: index
            };
        });

    // yahn se ham wo list choose krwa rhy hain jise user delete karna chahta hai
        let Del = await inquirer.prompt(
            {
                name:"delete",
                message: "Which employee information you want to delete ?",
                type: "list",
                choices: step_by_step
            }
        );

        // object ki deleted value ko aik new veriable mein assign krwa diyya
        let deleted_val = Del.delete;

        // or yahn se delete krwa diyya us value ko
        if (deleted_val >= 0) {
            let deleted = main_data.splice(deleted_val, 1);
            console.log("Your deleted: ", deleted);
            console.log("Your list after Employee information delete: ", main_data);
        }
    };


    if(choice.list === 'Updated_function'){

        let extract =  main_data.map((item, indo) => {
            return{
                name: `name: ${item.name} id: ${item.id} salary: ${item.salary}`,
                value: indo
            }
         });


         let change = await inquirer.prompt([
            {
                name: "data",
                message: "Please select option to Update Data",
                type: "list",
                choices: extract
            }
         ]);

         let Exchan = change.data;


        let newData = await inquirer.prompt([
            {
                name: "name",
                message: "What is your name?",
                type: "string"
            },
            {
                name: "id",
                message: "What is your id?",
                type: "number"
            },
            {
                name: "salary",
                message: "How much is your Salary?",
                type: "number"
            }
        ]);

        main_data[Exchan] = newData;
        // console.log("Your old data: ", change.data);
        console.log("Your data after Update: ", main_data);
      
    }

};


// <-----------------------------------------------END--------------------------------------------------->

// Ezample 3


// Complete Employee Management System
// Requirements:
// 1) Use the same codebase where I left.        //  from Sir Anas
// 2) Use for loop to insert multiple employees
// 3) Prepare edit, delete & updated function
// 4) Use inquirer to get input for employee id, employee name & salary



// import inquirer from 'inquirer';

// // Define the Employee interface to ensure type safety
// interface Employee {
//   id: number;
//   name: string;
//   salary: number;
// }

// // Initialize an empty array to store employee records
// let main_data: Employee[] = [];

// // Function to add employees
// async function addEmployees() {


//   let numberOfEmployees = await inquirer.prompt({
//     name: 'count',
//     message: 'How many employees do you want to add?',
//     type: 'number',
//   });


//   for (let i = 0; i < numberOfEmployees.count; i++) {

//     let employee = await inquirer.prompt([
//       {
//         name: 'name',
//         message: 'Enter your name:',
//         type: 'input',
//       },
//       {
//         name: 'id',
//         message: 'Enter employee ID:',
//         type: 'number',
//       },
//       {
//         name: 'salary',
//         message: 'Enter employee salary:',
//         type: 'number',
//       },
//     ]);

//     main_data.push(employee as Employee);
//   }

//   console.log('Employees added:', main_data);
// }



// // Function to edit an employee's details
// async function editEmployee() {

//   const employeeChoices = main_data.map((emp, index) => ({
//     name: `Name: ${emp.name}, ID: ${emp.id}, Salary: ${emp.salary}`,
//     value: index,

//   }));


//   const selected = await inquirer.prompt([
//     {
//       name: 'index',
//       message: 'Which employee do you want to edit?',
//       type: 'list',
//       choices: employeeChoices,
//     },
//   ]);


//   const fieldToEdit = await inquirer.prompt([
//     {
//       name: 'field',
//       message: 'What do you want to edit?',
//       type: 'list',
//       choices: ['name', 'id', 'salary'],
//     },
//     {
//       name: 'newValue',
//       message: 'Enter new value:',
//       type: 'input',
//     },
//   ]);


//   if (fieldToEdit.field === 'id' || fieldToEdit.field === 'salary') {
//     main_data[selected.index][fieldToEdit.field] = Number(fieldToEdit.newValue);
//   } else {
//     main_data[selected.index][fieldToEdit.field] = fieldToEdit.newValue;
//   }

//   console.log('Updated employee list:', main_data);
// }




// // Function to delete an employee
// async function deleteEmployee() {


//   const employeeChoices = main_data.map((emp, index) => ({
//     name: `Name: ${emp.name}, ID: ${emp.id}, Salary: ${emp.salary}`,
//     value: index,
//   }));


//   const selected = await inquirer.prompt([
//     {
//       name: 'index',
//       message: 'Which employee do you want to delete?',
//       type: 'list',
//       choices: employeeChoices,
//     },
//   ]);

//   main_data.splice(selected.index, 1);

//   console.log('Updated employee list:', main_data);
// }


// // Function to update multiple fields of an employee
// async function updateEmployee() {

//   const employeeChoices = main_data.map((emp, index) => ({
//     name: `Name: ${emp.name}, ID: ${emp.id}, Salary: ${emp.salary}`,
//     value: index,

//   }));


//   const selected = await inquirer.prompt([
//     {
//       name: 'index',
//       message: 'Which employee do you want to update?',
//       type: 'list',
//       choices: employeeChoices,
//     },
//   ]);


//   const updates = await inquirer.prompt([
//     {
//       name: 'name',
//       message: `Enter new name (current: ${main_data[selected.index].name}):`,
//       type: 'input',
//       default: main_data[selected.index].name,
//     },
//     {
//       name: 'id',
//       message: `Enter new ID (current: ${main_data[selected.index].id}):`,
//       type: 'number',
//       default: main_data[selected.index].id,
//     },
//     {
//       name: 'salary',
//       message: `Enter new salary (current: ${main_data[selected.index].salary}):`,
//       type: 'number',
//       default: main_data[selected.index].salary,
//     },
//   ]);

//   main_data[selected.index] = updates as Employee;

//   console.log('Updated employee list:', main_data);
// }

// // Main function to manage the employee system
// async function main() {
//   await addEmployees();

//   while (true) {
//     const feature = await inquirer.prompt([
//       {
//         name: 'action',
//         message: 'Select an action:',
//         type: 'list',
//         choices: ['Edit', 'Delete', 'Update', 'Exit'],
//       },
//     ]);

//     switch (feature.action) {
//       case 'Edit':
//         await editEmployee();
//         break;
//       case 'Delete':
//         await deleteEmployee();
//         break;
//       case 'Update':
//         await updateEmployee();
//         break;
//       case 'Exit':
//         console.log('Exiting...');
//         return;
//     }
//   }
// }

// // Start the employee management system
// main();
