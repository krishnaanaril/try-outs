interface Employee {
    clone(): Employee;
}

class PermanentEmployee implements Employee {
    name: string = '';
    age: number = 0;

    /**
     * shallow clone
     */
    clone() {
        return Object.create(this) as PermanentEmployee;
    }
}

(function(){
    const p1: PermanentEmployee = new PermanentEmployee();
    p1.name = 'Krishna Mohan'
    p1.age = 31;

    const p2 = p1.clone();
    p2.name = 'Praveen';
    console.log(`Name: ${p2.name}, Age: ${p2.age}`);
})();