// Created a circle construnctor for my SVG if user choice is "circle" for the shape
class Circle {
    constructor(initials, textColor, shapeColor) {
        this.initials = initials;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.initials}</text>
        </svg>`
    }
}

// Created a triangle constructor for my SVG if user choice is "square" for the shape
class Triangle {
    constructor(initials, textColor, shapeColor) {
        this.initials = initials;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.initials}</text>
        </svg>`
    }
}

// Created a square constructor for my SVG if user choice is "square" for the shape
class Square {
    constructor(initials, textColor, shapeColor) {
        this.initials = initials;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="50" width="100" height="100" stroke="" fill="${this.shapeColor}" stroke-width="5" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.initials}</text>
        </svg>`
    }
}

//makes my constructors available to use on other files
module.exports = {Circle, Triangle, Square}