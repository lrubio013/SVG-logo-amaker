const inquirer = require("inquirer"); //Downloaded inquirer to be able to retrieve user input
const { Circle, Triangle, Square } = require("./lib/shapes"); //Called upon my constructors I exported on shapes.js
const { writeFile } = require("fs").promises

//Creates a series of questions that application will ask the user
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

// Created my function that'll create user SVG based on their answers
function init() {
    inquirer.prompt(questions) //Asks user the questions we created
        .then((data) => {
            let userSvg; 
            // Will create an SVG depending on the users answers
            if (data.shape === "Circle") {
                userSvg = new Circle(data.initials, data.textColor, data.shapeColor);
            }
            else if (data.shape === "Triangle") {
                userSvg = new Triangle(data.initials, data.textColor, data.shapeColor);
            }
            else if (data.shape === "Square") {
                userSvg = new Square(data.initials, data.textColor, data.shapeColor);
            }
            
            // Turns the new user constructor and makes a file in the lib folder called logo.svg
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



// Initialized my function
init();