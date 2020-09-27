/**
 * Interface for laptops
 * @interface
 */
interface Laptop {
    manufacturer: string;
    getName(): string;
}

/**
 * Concreate class for a gaming laptop
 * @class
 */
class GamingLaptop implements Laptop {
    
    manufacturer: string;

    constructor(manufacturer: string) {
        this.manufacturer = manufacturer;
    }

    getName(): string {
        return `Gaming Laptop from ${this.manufacturer}`;
    }
}

/**
 * Concreate class for a normal laptop
 * @class
 */
class NormalLaptop implements Laptop {
    
    manufacturer: string;

    constructor(manufacturer: string) {
        this.manufacturer = manufacturer;
    }

    getName(): string {
        return `Normal Laptop from ${this.manufacturer}`;
    }
}

/**
 * Interface for factories
 * @interface
 */
interface ComputerFactory {
    getLaptop(laptopType: string): Laptop;
}

/**
 * Concreate class for a Dell factory
 * @class
 */
class DellFactory implements ComputerFactory {
    getLaptop(laptopType: string) : Laptop {
        switch (laptopType) {
            case 'gaming':
                return new GamingLaptop('Dell');
            case 'normal':
                return new NormalLaptop('Dell');
            default:
                throw new Error("This type of laptop cannot be created");   
        }
    }
}

/**
 * Concreate class for a Lenovo factory
 * @class
 */
class LenovoFactory implements ComputerFactory {
    getLaptop(laptopType: string) : Laptop {
        switch (laptopType) {
            case 'gaming':
                return new GamingLaptop('Lenovo');
            case 'normal':
                return new NormalLaptop('Lenovo');
            default:
                throw new Error("This type of laptop cannot be created");   
        }
    }
}

/**
 * Client class
 * @class
 */
class ComputerClient {

    private laptop: Laptop;
    
    constructor(computerFactory: ComputerFactory, laptopType: string) {               
        this.laptop = computerFactory.getLaptop(laptopType);
    }

    printName(): void {
        console.log(this.laptop.getName());
    }
}

(function(){
    const dellFactory: ComputerFactory = new DellFactory();
    const lenovoFactory: ComputerFactory = new LenovoFactory();

    const dellGamingLaptop: ComputerClient = new ComputerClient(dellFactory, 'gaming');
    dellGamingLaptop.printName();
    const lenovoNormalLaptop: ComputerClient = new ComputerClient(lenovoFactory, 'normal');
    lenovoNormalLaptop.printName();

})();