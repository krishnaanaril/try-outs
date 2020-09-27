interface Bike {    
    getPrice(): number;
}

class RoyalEnfield implements Bike {    
    getPrice() {
        return 150000;
    }
}

interface BikeDecorator extends Bike {
    bike: Bike;    
}

class PromotionalOffer implements BikeDecorator {
    bike: Bike;
    offer:number;
    constructor(bike: Bike, offer: number = 5000){
        this.bike = bike;
        this.offer = offer;
    }
    getPrice() {
        return this.bike.getPrice() - this.offer
    }
}

class AccessoriesCharge implements BikeDecorator {
    bike: Bike;
    charge:number;
    constructor(bike: Bike, charge: number = 5000){
        this.bike = bike;
        this.charge = charge;
    }
    getPrice() {
        return this.bike.getPrice() + this.charge
    }
}

(function(){
    const newBike: Bike = new RoyalEnfield();
    console.log(`Base Price: ${ newBike.getPrice() }`);
    let decorator: BikeDecorator = new PromotionalOffer(newBike, 10000);
    console.log(`Price after offer: ${ decorator.getPrice() }`);
    decorator = new AccessoriesCharge(decorator, 2000);
    console.log(`Price after accessories: ${ decorator.getPrice() }`);
})();