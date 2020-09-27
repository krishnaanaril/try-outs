interface Command {
    execute(): number;
}

class Invoker {
    exectueCommand(command: Command) {
        return command.execute();
    }
}

class Calculator {
    private _a: number;
    private _b: number;
    constructor(a: number, b: number) {
        this._a = a;
        this._b = b;
    }
    add(): number {
        return this._a + this._b;
    }
    multiply(): number {
        return this._a * this._b;
    }
}

class AddCommand implements Command {
    private _calculator: Calculator;
    constructor(calculator: Calculator) {
        this._calculator = calculator;
    }
    execute() {
        return this._calculator.add();
    }
}

class MultiplyCommand implements Command {
    private _calculator: Calculator;
    constructor(calculator: Calculator) {
        this._calculator = calculator;
    }
    execute() {
        return this._calculator.multiply();
    }
}

(function(){
    const invoker: Invoker = new Invoker()
    const calc: Calculator = new Calculator(3, 4);
    console.log(`Sum of 3 & 4 : ${invoker.exectueCommand(new AddCommand(calc))}`);
    console.log(`Product of 3 & 4 : ${invoker.exectueCommand(new MultiplyCommand(calc))}`);    
})();