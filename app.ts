#! /usr/bin/env node
import inquirer from "inquirer";
const input = await inquirer.prompt([
    { message: "give me first no:", type: "number", name: "firstNo" },
    { message: "give me second no:", type: "number", name: "secondNo" },
    {
        message: "what do you want me to do",
        type: "list",
        name: "operator",
        choices: ["Multiplication", "Division", "Substraction", "Addition", "Modulus", "Exponentiation"],
    },
]);
//Conditional Statment
if(input.operator === "Addition"){
    console.log(`your answer is ${input.firstNo+input.secondNo}`);
}else if (input.operator === "Multiplication"){
    console.log(`your answer is ${input.firstNo*input.secondNo}`);
}else if (input.operator === "Substraction"){
    console.log(`your answer is ${input.firstNo-input.secondNo}`);
}else if (input.operator === "Division"){
    console.log(`your answer is ${input.firstNo/input.secondNo}`);
}else if (input.operator === "Modulus"){
    console.log(`your answer is ${input.firstNo%input.secondNo}`);
}else if (input.operator === "Exponentiation"){
    console.log(`your answer is ${input.firstNo**input.secondNo}`);
}
else { "Please select a proper operator" };