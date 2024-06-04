// Complete Employee Management System
// Requirements:
// 1) Use the same codebase where I left.        //  from Sir Anas
// 2) Use for loop to insert multiple employees
// 3) Prepare edit, delete & updated function
// 4) Use inquirer to get input for employee id, employee name & salary
// <------------------------------------------END------------------------------------------->
import chalk from "chalk";
import inquirer from "inquirer";
;
// Main data base list
let Employee_Data_Base = [];
async function Management_system() {
    console.log(chalk.red("********** Welcome To Employee Management System **********"));
    console.log("\n");
    // Employee details options hain ye
    let Employees = await inquirer.prompt([
        {
            name: "options",
            message: "Please select option from this list",
            type: "list",
            choices: ["Add Employee", "Vew Employee", "Delete Employee", "Update Employee", "Exit"]
        }
    ]);
    // user ke option select karne ke bad switch stament se opration perform kar rhy hain....
    switch (Employees.options) {
        case "Add Employee":
            AddingEmployee();
            break;
        case "Vew Employee":
            VewEmployees_data();
            break;
        case "Update Employee":
            UpdateEmployee();
            break;
        case "Delete Employee":
            DeleteEmployee();
            break;
        default:
            process.exit();
    }
}
;
// start Add Employee function
async function AddingEmployee() {
    console.log("\n");
    let Employee_details = await inquirer.prompt([
        {
            name: "name",
            message: "Please enter Employee name",
            type: "input"
        },
        {
            name: "id",
            message: "Please enter Employee ID",
            type: "number"
        },
        {
            name: "salary",
            message: "Please enter Employee salary",
            type: "number"
        }
    ]);
    Employee_Data_Base.push({
        name: Employee_details.name,
        id: Employee_details.id,
        salary: Employee_details.salary
    });
    console.log("\n");
    console.log(chalk.green("******** Employee Added Succesfully ********"));
    console.log("\n");
    console.log(Employee_Data_Base[Employee_Data_Base.length - 1]);
    Management_system();
}
;
// yahan se ham vew employee ka function bana rhy hain...
async function VewEmployees_data() {
    console.log("*********** Vew All of your Employees ***********");
    console.log("\n");
    for (let data = 0; data < Employee_Data_Base.length; data++) {
        console.log(Employee_Data_Base[data]);
        console.log("\n");
    }
    Management_system();
}
;
// Yahn se ham delete Employee ka function bana rhy hain...
async function DeleteEmployee() {
    let employee = await inquirer.prompt([
        {
            name: "delete",
            message: "Please enter employee ID",
            type: "number"
        }
    ]);
    Employee_Data_Base = Employee_Data_Base.filter((item) => item.id != employee.delete);
    console.log("******** Employee Deleted Succesfully ********");
    console.log("\n");
    Management_system();
}
;
// Management_system();
// yahn se ham update employee ki details bnana shuro karenge
async function UpdateEmployee() {
    let Update_Choose = await inquirer.prompt({
        name: "info",
        message: "Please enter Employee ID to Update",
        type: "list",
        choices: Employee_Data_Base
    });
    let Updated_data = await inquirer.prompt([
        {
            name: "name",
            message: "Please enter Employee name",
            type: "input"
        },
        {
            name: "id",
            message: "Please enter Employee ID",
            type: "number"
        },
        {
            name: "salary",
            message: "Please enter Employee salary",
            type: "number"
        }
    ]);
    // Employee_Data_Base.filter((item) => item.id === Update_Choose.info   Employee_Data_Base = Updated_data)
}
