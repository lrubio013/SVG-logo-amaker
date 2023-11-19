class Svg{
    constructor(initials, textColor, shapeColor){
        this.initials = initials;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeColor}${this.textColor}</svg>`
    }
    setText(chosenText, chosenColor){
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${chosenColor}">${chosenText}</text>`
    }
    setShape(chosenShape){
        return chosenShape.render()
    }
}

module.exports = Svg;