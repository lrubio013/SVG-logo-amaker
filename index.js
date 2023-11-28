const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shapes");
const { writeFile } = require("fs").promises

const questions = [
    {
        type: "input",
        name: "initials",
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
];

function init() {
    inquirer.prompt(questions)
        .then((data) => {
            let userSvg; 
            if (data.shape === "Circle") {
                userSvg = new Circle(data.initials, data.textColor, data.shapeColor);
            }
            else if (data.shape === "Triangle") {
                userSvg = new Triangle(data.initials, data.textColor, data.shapeColor);
            }
            else if (data.shape === "Square") {
                userSvg = new Square(data.initials, data.textColor, data.shapeColor);
            }
            
            if (userSvg) {
            return writeFile("./lib/logo.svg", userSvg.render());
            } else {
                throw new Error ("Invalid selection")
            }
        })
        
        .then(() => {
        console.log("SVG created")
        })
        .catch(err => {
            console.error(err);
        });
}




init();