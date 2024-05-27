// Complete Employee Management System
// Requirements:
// 1) Use the same codebase where I left.        //  from Sir Anas
// 2) Use for loop to insert multiple employees
// 3) Prepare edit, delete & updated function
// 4) Use inquirer to get input for employee id, employee name & salary
import inquirer from 'inquirer';
// Initialize an empty array to store employee records
let main_data = [];
// Function to add employees
async function addEmployees() {
    let numberOfEmployees = await inquirer.prompt({
        name: 'count',
        message: 'How many employees do you want to add?',
        type: 'number',
    });
    for (let i = 0; i < numberOfEmployees.count; i++) {
        let employee = await inquirer.prompt([
            {
                name: 'name',
                message: 'Enter your name:',
                type: 'input',
            },
            {
                name: 'id',
                message: 'Enter employee ID:',
                type: 'number',
            },
            {
                name: 'salary',
                message: 'Enter employee salary:',
                type: 'number',
            },
        ]);
        main_data.push(employee);
    }
    console.log('Employees added:', main_data);
}
// Function to edit an employee's details
async function editEmployee() {
    const employeeChoices = main_data.map((emp, index) => ({
        name: `Name: ${emp.name}, ID: ${emp.id}, Salary: ${emp.salary}`,
        value: index,
    }));
    const selected = await inquirer.prompt([
        {
            name: 'index',
            message: 'Which employee do you want to edit?',
            type: 'list',
            choices: employeeChoices,
        },
    ]);
    const fieldToEdit = await inquirer.prompt([
        {
            name: 'field',
            message: 'What do you want to edit?',
            type: 'list',
            choices: ['name', 'id', 'salary'],
        },
        {
            name: 'newValue',
            message: 'Enter new value:',
            type: 'input',
        },
    ]);
    if (fieldToEdit.field === 'id' || fieldToEdit.field === 'salary') {
        main_data[selected.index][fieldToEdit.field] = Number(fieldToEdit.newValue);
    }
    else {
        main_data[selected.index][fieldToEdit.field] = fieldToEdit.newValue;
    }
    console.log('Updated employee list:', main_data);
}
// Function to delete an employee
async function deleteEmployee() {
    const employeeChoices = main_data.map((emp, index) => ({
        name: `Name: ${emp.name}, ID: ${emp.id}, Salary: ${emp.salary}`,
        value: index,
    }));
    const selected = await inquirer.prompt([
        {
            name: 'index',
            message: 'Which employee do you want to delete?',
            type: 'list',
            choices: employeeChoices,
        },
    ]);
    main_data.splice(selected.index, 1);
    console.log('Updated employee list:', main_data);
}
// Function to update multiple fields of an employee
async function updateEmployee() {
    const employeeChoices = main_data.map((emp, index) => ({
        name: `Name: ${emp.name}, ID: ${emp.id}, Salary: ${emp.salary}`,
        value: index,
    }));
    const selected = await inquirer.prompt([
        {
            name: 'index',
            message: 'Which employee do you want to update?',
            type: 'list',
            choices: employeeChoices,
        },
    ]);
    const updates = await inquirer.prompt([
        {
            name: 'name',
            message: `Enter new name (current: ${main_data[selected.index].name}):`,
            type: 'input',
            default: main_data[selected.index].name,
        },
        {
            name: 'id',
            message: `Enter new ID (current: ${main_data[selected.index].id}):`,
            type: 'number',
            default: main_data[selected.index].id,
        },
        {
            name: 'salary',
            message: `Enter new salary (current: ${main_data[selected.index].salary}):`,
            type: 'number',
            default: main_data[selected.index].salary,
        },
    ]);
    main_data[selected.index] = updates;
    console.log('Updated employee list:', main_data);
}
// Main function to manage the employee system
async function main() {
    await addEmployees();
    while (true) {
        const feature = await inquirer.prompt([
            {
                name: 'action',
                message: 'Select an action:',
                type: 'list',
                choices: ['Edit', 'Delete', 'Update', 'Exit'],
            },
        ]);
        switch (feature.action) {
            case 'Edit':
                await editEmployee();
                break;
            case 'Delete':
                await deleteEmployee();
                break;
            case 'Update':
                await updateEmployee();
                break;
            case 'Exit':
                console.log('Exiting...');
                return;
        }
    }
}
// Start the employee management system
main();
