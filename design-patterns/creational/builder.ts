class Laptop {
    modelNumber: string = '';
    display: string = '';
    memory: string = '';
    graphicsCard: string = '';

    printDetails(): void {
        console.log(`------------------Laptop Details---------------
        Model Number: ${this.modelNumber}
        Display     : ${this.display}
        RAM         : ${this.memory}
        Graphics    : ${this.graphicsCard}
        `);
    }
}

interface LaptopBuilder {
    addModelNumber(): void;
    addDisplay(): void;
    addMemory(): void;
    addGraphics(): void;
    getLaptop(): Laptop;
}

class GamingLaptopBuilder implements LaptopBuilder {
    laptop: Laptop;
    constructor() {
        this.laptop = new Laptop();
    }
    addModelNumber(): void {
        this.laptop.modelNumber = 'Gaming1001';
    }
    addDisplay(): void{
        this.laptop.display = 'Full HD Display';
    }   
    addMemory(): void{
        this.laptop.memory = '64 GB';
    }
    addGraphics(): void{
        this.laptop.graphicsCard = 'Nvidia Geforce'
    }
    getLaptop() {
        return this.laptop;
    }
}

class NormalLaptopBuilder implements LaptopBuilder {
    laptop: Laptop;
    constructor() {
        this.laptop = new Laptop();
    }
    addModelNumber(): void {
        this.laptop.modelNumber = 'Normal1001';
    }
    addDisplay(): void{
        this.laptop.display = 'Full HD Display';
    }   
    addMemory(): void{
        this.laptop.memory = '8 GB';
    }
    addGraphics(): void{
        this.laptop.graphicsCard = 'Intel Graphics'
    }
    getLaptop() {
        return this.laptop;
    }
}

class LaptopManufacturer {
    buildLaptop(builder: LaptopBuilder) {
        builder.addModelNumber;
        builder.addDisplay();
        builder.addMemory();
        builder.addGraphics();
    }
}

(function(){
    const laptopManufacturer = new LaptopManufacturer();
    const gamingLaptopBuilder = new GamingLaptopBuilder();
    const normalLaptopBuilder = new NormalLaptopBuilder();

    laptopManufacturer.buildLaptop(gamingLaptopBuilder);
    gamingLaptopBuilder.getLaptop().printDetails();
    laptopManufacturer.buildLaptop(normalLaptopBuilder);
    normalLaptopBuilder.getLaptop().printDetails();
})();