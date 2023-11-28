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

class Square {
    constructor(initials, textColor, shapeColor) {
        this.initials = initials;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="75" y="35" width="150" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.initials}</text>
        </svg>`
    }
}

module.exports = {Circle, Triangle, Square}