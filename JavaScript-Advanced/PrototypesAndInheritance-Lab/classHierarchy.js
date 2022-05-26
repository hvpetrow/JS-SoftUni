
function classHierarchy() {

    class Figure {

        constructor(unitValue = 'cm') {

            this.unitValue = unitValue;
            this.area = 0;
            Object.defineProperty(this, 'area', {

                get() {

                    return this.area;

                }
            })
        }

        changeUnits(unitValue) {

            this.unitValue = unitValue;

        }

        convertUnits(value) {

            if (this.unitValue == 'm') {

                return value /= 100;

            } else if (this.unitValue == 'mm') {

                return value *= 10;

            }

            return value;

        }

        toString() {

            return `Figures units: ${this.unitValue}`;

        }
    }

    class Circle extends Figure {

        constructor(radius) {

            super()
            this.radius = radius;
            Object.defineProperty(this, 'area', {

                get() {

                    this.rad = this.convertUnits(this.radius);

                    return Math.PI * this.rad ** 2;

                }
            })
        }

        toString() {

            return `${super.toString()} Area: ${this.area} - radius: ${this.rad}`;

        }
    }

    class Rectangle extends Figure {

        constructor(width, height, units) {

            super(units);
            this.width = width;
            this.height = height;
            Object.defineProperty(this, 'area', {

                get() {

                    this.wid = this.convertUnits(this.width);
                    this.hei = this.convertUnits(this.height);

                    return this.wid * this.hei;

                }
            })
        }

        toString() {

            return `${super.toString()} Area: ${this.area} - width: ${this.wid}, height: ${this.hei}`;

        }
    }

    return {

        Figure,
        Circle,
        Rectangle

    }
}



classHierarchy()
let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString())