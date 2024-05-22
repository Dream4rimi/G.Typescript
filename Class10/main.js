// fresh object and stail object a = b dono alag object
// arrow function kya hai or isy array mein use karty hain
// for loop
// while loop
// do while loop 
// for in loop
// for of loop
// visit programiz website for loops details
// Variable Initialization
let collectionOfEmployee = [
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
    .filter((employee) => employee.employeeId == 7487);
let filterByEmployeeName = collectionOfEmployee
    .filter((employee) => employee.employeeName.includes("Atif"));
// <-----------------------------------------------END--------------------------------------------------->
// Complete Employee Management System
// Requirements:
// 1) Use the same codebase where I left.        //  from Sir Anas
// 2) Use for loop to insert multiple employees
// 3) Prepare edit, delete & updated function
// 4) Use inquirer to get input for employee id, employee name & salary
import inquirer from 'inquirer';
let main_data = [];
let condition = false;
while (condition) {
    let information = await inquirer.prompt([
        {
            name: "ask",
            message: "What is your name",
            type: "string"
        },
        {
            name: "id",
            message: "What is your id ?",
            type: "number"
        },
        {
            name: "salary",
            message: "How much your Salery?",
            type: "number"
        }
    ]);
    main_data.push(information);
    console.log(main_data);
}
// console.log(information);
let again = await inquirer.prompt([
    {
        name: "ques",
        message: "Do you want to add more employe?",
        type: "confirm",
        default: "true"
    }
]);
if (again.ques === false) {
    condition = false;
}
;
