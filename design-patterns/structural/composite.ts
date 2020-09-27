interface Employee {
    employeeID: number;
    name: string;
    rating: number;
    performanceSummary(): void;
}

class Engineer implements Employee {
    employeeID: number;
    name: string;
    rating: number;
    constructor(id: number, name: string, rating: number) {
        this.employeeID = id;
        this.name = name;
        this.rating = rating;
    }
    performanceSummary(){
        console.log(`Performance summary of employee: ${this.name} is ${this.rating} out 0f 5`)
    }
}

class Manager implements Employee {
    employeeID: number;
    name: string;
    rating: number;

    subordinates: Employee[];

    constructor(id: number, name: string, rating: number) {
        this.employeeID = id;
        this.name = name;
        this.rating = rating;
        this.subordinates = [];
    }
    performanceSummary(){
        console.log(`Performance summary of employee: ${this.name} is ${this.rating} out 0f 5`);
        console.log(`Performance summary of ${this.name}'s ${this.subordinates.length} sub ordinates.`);
        for (const employee of this.subordinates) {
            employee.performanceSummary();
        }
    }
    addSubOridinates(emplyee: Employee) {
        this.subordinates.push(emplyee);
    }
}



(function(){
    const tom = new Engineer (1, 'Tom', 3 );
    const jack = new Engineer (2, 'jack', 4 );
    const sam = new Engineer (3, 'sam', 5 );
    const mary = new Engineer (4, 'mary', 3);
    const tina = new Engineer (5, 'tina', 4 );
    const rose = new Engineer ( 6, 'rose', 5 );

    const john = new Manager (7, 'john', 3 );
    const james = new Manager (8, 'james', 3 );

    john.addSubOridinates(tom);
    john.addSubOridinates(jack);
    john.addSubOridinates(sam);

    james.addSubOridinates(mary);
    james.addSubOridinates(tina);
    james.addSubOridinates(rose);

    john.performanceSummary();
    james.performanceSummary();
})();