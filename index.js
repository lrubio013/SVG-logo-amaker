const inquirer = require("inquirer");
const {Circle, Triangle, Square} = require("./lib/shapes");
const Svg = require("./lib/svg");
const { readFile, writeFile } = require("fs").promises

const question = [
{
    type: "input",
    name: "text",
    message: "Type 3 or less letters for your logo"
},

{
    type: "input",
    name: "textColor",
    message: "What color would you like your text to be?"
},

{
    type: "list",
    name: "shape",
    message: "Select a shape for the logo:",
    choices: ["Circle", "Triangle", "Square"]
},

{
    type: "input",
    name: "shapeColor",
    message: "What color would you like your shape to be?"
},
]
