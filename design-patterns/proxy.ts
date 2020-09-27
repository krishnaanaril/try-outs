
interface Polygon {
    getShape(): void;
}

class RealRectangle implements Polygon {
    getDetails() {
        console.log('This is a real rectangle class');
    }
    getShape() {
        console.log('This is a polygon with four sides and oppoiste sides parallel');
    }
}

class ProxyRectangle implements Polygon{
    rectangle: Polygon;
    constructor() {
        this.rectangle = new RealRectangle();
    }
    getDetails() {
        console.log('This is a proxy rectangle class');
    }
    getShape() {        
        this.rectangle.getShape();
    }
}

(function(){
    const proxy: ProxyRectangle = new ProxyRectangle();
    proxy.getDetails();
    proxy.getShape();
})();