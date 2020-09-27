interface Customer {
    name: string;
    update(product: Product): void;
}

interface Product {    
    price: number;
    subscribe(customer :Customer): void;
    unSubscribe(customer :Customer): void;
    notify(): void;
}

class LaptopCustomer implements Customer {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    /**
     * Customer action when notification is sent from Product
     * @param product A product that this customer is interested
     */
    update(product: Product): void {
        console.log(`${this.name}: Laptop is now available at ${product.price}`);
    }
}

class Laptop implements Product {
    private customers: Customer[];
    private currentPrice: number;
    constructor(price: number) {
        this.customers = [];
        this.currentPrice = price;
    }
    subscribe(customer :Customer): void {
        this.customers.push(customer);
    }
    get price(): number {
        return this.currentPrice;
    }
    set price(price: number) {
        const previousPrice = this.currentPrice;
        this.currentPrice = price;
        if(this.currentPrice < previousPrice) {
            this.notify();
        }
    }
    unSubscribe(customer :Customer): void{
        this.customers = 
            this.customers
                .filter(existingCustomer => existingCustomer.name !== customer.name);
    }
    notify(): void{
        for (const customer of this.customers) {
            customer.update(this);
        }
    }
}

(function(){
    const john = new LaptopCustomer('John');
    const dan = new LaptopCustomer('Dan');
    const mary = new LaptopCustomer('Mary');

    const dell = new Laptop(400);
    dell.subscribe(john);
    dell.subscribe(mary);
    dell.price = 395;
    dell.unSubscribe(mary);
    dell.price = 390;
    dell.subscribe(dan);
    dell.price = 385;
})();