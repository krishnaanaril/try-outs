interface Shape {
    getShape(): void;
    getColor(size: number): void;
}

interface Hash {
    [key: string]: Shape;
}

class Rectangle implements Shape {
    getShape() {
        console.log(`This is a Rectangle`);
    }
    getColor(size: number) {
        const color = (size < 5) ? 'RED' : 'GREEN';
        console.log(`Recatngle is filled with ${color}.`);
    }
}

class Circle implements Shape {
    getShape() {
        console.log(`This is a Circle`);
    }
    getColor(size: number) {
        const color = (size < 10) ? 'RED' : 'GREEN';
        console.log(`Circle is filled with ${color}.`);
    }
}

class ShapeFactory {
    hash: Hash = {};

    getObjectCount() {
        return Object.keys(this.hash).length;
    }

    getShapeObject(shapeName: string): Shape {
        let shape: Shape;
        if (this.hash[shapeName]) {
            return this.hash[shapeName];
        } else {
            switch (shapeName) {
                case 'Rectangle':
                    shape = new Rectangle();
                    this.hash[shapeName] = shape;
                    break;
                case 'Circle':
                    shape = new Circle();
                    this.hash[shapeName] = shape;
                    break;
                default:
                    throw new Error("Invlaid shape name.");                    
                    break;
            }
        }
        return shape;
    }
}

(function () {
    const factory: ShapeFactory = new ShapeFactory();
    let shape: Shape = factory.getShapeObject('Rectangle');
    shape.getShape();
    shape.getColor(5);
    shape= factory.getShapeObject('Rectangle');
    shape.getShape();
    shape.getColor(7);
    shape = factory.getShapeObject('Rectangle');
    shape.getShape();
    shape.getColor(2);
    shape= factory.getShapeObject('Circle');
    shape.getShape();
    shape.getColor(5);
    shape= factory.getShapeObject('Circle');
    shape.getShape();
    shape.getColor(7);
    shape = factory.getShapeObject('Circle');
    shape.getShape();
    shape.getColor(2);

    console.log(`Number of Objects: ${factory.getObjectCount()}`);
})();