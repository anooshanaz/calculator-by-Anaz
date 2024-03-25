import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        message: "Enter your first number",
        name: "firstNumber",
        type: "number"
    },
    {
        message: "Enter your second number",
        name: "secondNumber",
        type: "number"
    },
    {
        message: "select one operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiply", "division", "modules"]
    }
]);
if (answer.operator === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiply") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "modules") {
    console.log(answer.firstNumber % answer.secondNumber);
}
else {
    console.log("is not valid operator");
}
