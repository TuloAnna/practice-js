
class Figure{
    constructor(unit) {
        this.unit = unit;
    }
    area = () =>{}

    displayArea = () => {
        return `${this.area()} ${this.unit}2`
    }
}


class Triangle extends Figure {
    constructor(unit, base, height) {
        super(unit);
        this.base = base;
        this.height = height;
    }
    area = () => {
        return this.base * this.height / 2
    }
}

class RightTriangle extends Triangle{
    constructor(unit, base, height) {
        super(unit, base, height)
    }
    circumference = () => {
        let hypotenuse = Math.sqrt(Math.pow(this.base, 2) + Math.pow(this.height, 2));
        return hypotenuse + this.base + this.height
    }

    displayCircumference = () => {
        return `${this.circumference()} ${this.unit}`
    }
}



class Circle extends Figure {
    constructor(unit, radius) {
        super(unit);
        this.radius = radius;
    }
    area = () => {
        return Math.PI * (this.radius**2)
    }
}

const triangle = new Triangle('m', 20, 30);
const circle = new Circle('cm', 10);
const rtriangle = new RightTriangle('mm', 3, 4);
