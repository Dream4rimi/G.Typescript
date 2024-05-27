
// Complete Employee Management System
// Requirements:
// 1) Use the same codebase where I left.        //  from Sir Anas
// 2) Use for loop to insert multiple employees
// 3) Prepare edit, delete & updated function
// 4) Use inquirer to get input for employee id, employee name & salary



import inquirer from 'inquirer';

// Define the Employee interface to ensure type safety
interface Employee {
  id: number;
  name: string;
  salary: number;
}

// Initialize an empty array to store employee records
let main_data: Employee[] = [];

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
        message: 'Enter your id:',
        type: 'number',
      },
      {
        name: 'salary',
        message: 'Enter your salary:',
        type: 'number',
      },
    ]);

    main_data.push(employee as Employee);
  }

  console.log('Your final data :', main_data);
}




// Function to edit an employee's details
async function editEmployee() {

  const extract = main_data.map((emp, index) => ({
    name: `Name: ${emp.name}, ID: ${emp.id}, Salary: ${emp.salary}`,
    value: index,

  }));


  const selected = await inquirer.prompt([
    {
      name: 'index',
      message: 'Which employee do you want to edit?',
      type: 'list',
      choices: extract,
    },
  ]);


  const user = await inquirer.prompt([
    {
      name: 'chose',
      message: 'What do you want to edit?',
      type: 'list',
      choices: ['name', 'id', 'salary'],
    },
    {
      name: 'new',
      message: 'Enter new value:',
      type: 'input',
    },
  ]);


    if(user.chose === "name"){
         main_data[selected].name = user.new;
    }
    else if(user.chose === "id"){
      main_data[selected].id = Number(user.new)
    }
    else if(user.chose === "salary"){
      main_data[selected].salary = Number(user.new)
    }


  console.log('your list after Edit:', main_data);
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

  console.log('Your list after Delete:', main_data);
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


  
  const update_info = await inquirer.prompt([
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

  main_data[selected.index] = update_info as Employee;

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
