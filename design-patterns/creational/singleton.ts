class Circle {
    pi: number = 3.14;
    radius: number = 0;

    static singletonObject: Circle;

    static getSingletoInstance() {
        if(Circle.singletonObject == null) {
            Circle.singletonObject = new Circle();
        } 
        return Circle.singletonObject;
    }

    getArea() {
        return this.pi * this.radius * this.radius;
    }
}

(function(){
    const c1: Circle = Circle.getSingletoInstance();
    const c2: Circle = Circle.getSingletoInstance();
    c1.radius = 3;
    console.log(`c1: ${c1.getArea()}, c2: ${c2.getArea()}`);
    c2.radius = 5;
    console.log(`c1: ${c1.getArea()}, c2: ${c2.getArea()}`);
    c1.radius = 9;
    console.log(`c1: ${c1.getArea()}, c2: ${c2.getArea()}`);
})();