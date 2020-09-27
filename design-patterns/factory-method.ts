
/**
 * Inteface for different Employee types
 * @interface
 */
interface Employee {
    details(): void;
}

/**
 * Concrete Employee class for Permanent Employees
 * @class
 */
class PermanentEmployee implements Employee {
    public details(): void {
        console.log(`This is permanent employee type object`);
    }
}

/**
 * Concrete Employee class for Temporary Employees
 * @class
 */
class TemporaryEmployee implements Employee {
    public details(): void {
        console.log(`This is temporary employee type object`);
    }
}

/**
 * Factory abstract class
 * @class
 */
abstract class EmployeeFactory {
    public abstract createEmployee(employeeType: string): Employee;
}

/**
 * Concrete Employee Factory
 * @class
 */
class ConcreteEmployeeFactory extends EmployeeFactory {
    createEmployee(employeeType: string) : Employee {
        switch (employeeType) {
            case 'PermanentEmployee':
                return new PermanentEmployee();                
            case 'TemporaryEmployee':
                return new TemporaryEmployee();
            default:
                throw new Error("This type of employee cannot be created");                
        }
    }
}

(function(){
    const employeeFactory: EmployeeFactory = new ConcreteEmployeeFactory();
    const permanentEmployee: Employee = employeeFactory.createEmployee('PermanentEmployee');
    permanentEmployee.details();
    const temporaryEmployee: Employee = employeeFactory.createEmployee('TemporaryEmployee');    
    temporaryEmployee.details();
})();