import inquirer from "inquirer";
import chalk from "chalk";
let Todo_Data = [];
let looping = true;
while (looping) {
    let Todo = await inquirer.prompt([
        {
            name: "app",
            message: chalk.bold.white.bgGray("\n\n What you want to add in your Todo?"),
            type: "input"
        },
        {
            name: "loop",
            message: "Do you want to Add more?",
            type: "confirm",
            defalut: "true",
        }
    ]);
    if (Todo.app !== "") {
        Todo_Data.push(Todo.app);
        console.log(chalk.bold.green("\n\n\t (>", Todo_Data, "<)"));
    }
    if (Todo.loop === false) {
        looping = false;
        let modify = await inquirer.prompt([
            {
                name: "choice",
                message: "Do you want to Modify your list or Exit?",
                type: "list",
                choices: ["Modification", "Exit"]
            }
        ]);
        if (modify.choice === "Modification") {
            let moodi = await inquirer.prompt([
                {
                    name: "feature",
                    message: "Please select option",
                    type: "list",
                    choices: ["Add", "Delete", "Update", "Read"]
                }
            ]);
            if (moodi.feature === "Add") {
                looping = true;
            }
            ;
            if (moodi.feature === "Delete") {
                let Del = await inquirer.prompt([
                    {
                        name: "delete",
                        message: chalk.bold.white.bgRed("\n\n Please select Item to Delete"),
                        type: "list",
                        choices: Todo_Data
                    }
                ]);
                let index_value = Todo_Data.indexOf(Del.delete);
                if (index_value >= 0) {
                    Todo_Data.splice(index_value, 1);
                    console.log("Your delete: " + chalk.bold.red(Del.delete));
                    console.log("Your final list after delete: " + chalk.bold.green("(", Todo_Data, ")"));
                }
            }
            if (moodi.feature === "Update") {
                let Update = await inquirer.prompt([
                    {
                        name: "value",
                        message: chalk.bold.white.bgYellow("\n\n Please select Item to Update"),
                        type: "list",
                        choices: Todo_Data
                    },
                    {
                        name: "put",
                        message: "Please Write Updated value to Add: ",
                        type: "input"
                    }
                ]);
                Todo_Data[Todo_Data.indexOf(Update.value)] = Update.put;
                console.log("You Update: " + chalk.bold.yellow(Update.value));
                console.log("Your Final list after Update: " + chalk.bold.green("(", Todo_Data, ")"));
            }
            if (moodi.feature === "Read") {
                console.log(chalk.bold.white.bgGreen("\n\n This is your All Data: ") + chalk.bold.green("(", Todo_Data, ")"));
            }
        }
        if (modify.choice === "Exit") {
            break;
        }
    }
    ;
}
