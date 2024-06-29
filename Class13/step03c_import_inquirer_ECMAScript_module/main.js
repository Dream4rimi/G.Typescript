import inquirer from "inquirer";
let Question = await inquirer.prompt({
    name: "age",
    message: "Enter your age",
    type: "number"
});
console.log(`InshAllah in ${60 - Question.age} Yesrs you will be 60 years old`);
