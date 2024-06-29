import inquirer from "inquirer"
import chalk from "chalk"

let Question = await inquirer.prompt({
    name: "age",
    message: "Enter your age",
    type: "number"
});

console.log(chalk.bold.blue(`InshAllah in ${60 - Question.age} Yesrs you will be 60 years old`));