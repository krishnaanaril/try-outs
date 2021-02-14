type ContextMap = Record<string, number>;

interface Expression {
    evaluate(contex: ContextMap): number;
}

class CompoundExpression implements Expression {
    constructor(
        public operation: string = '',
        public left: Expression,
        public right: Expression
    ) {

    }
    evaluate(context: ContextMap): number {
        const rightValue = this.right.evaluate(context);
        const leftValue = this.left.evaluate(context);
        let result = 0;
        switch (this.operation) {
            case '+':
                result = leftValue + rightValue;
                break;
            case '-':
                result = leftValue - rightValue;
                break;            
        }
        return result;
    }
}

class Variable implements Expression {
    constructor(public name: string) {}
    evaluate(context: ContextMap): number {
        const result = context[this.name] ? context[this.name] : 0;
        return result;
    }
}

class Numeric implements Expression {
    constructor(public value: number) {}
    evaluate(context: ContextMap): number {
        return this.value;
    }
}

function parseToken(token: string, stack: Array<Expression>): Expression {
    let exp: Expression;
    switch (token) {
        case '+':
        case '-': 
            const right = <Expression>stack.pop();
            const left = <Expression>stack.pop();
            exp = new CompoundExpression(token, left, right);       
            break;        
        default:
            if(isNaN(+token)) {
                exp = new Variable(token);
            } else {
                exp = new Numeric(+token);
            }
            break;
    }
    return exp;
}

function buildSyntaxTree(expression: string) {
    const stack: Array<Expression> = [];
    const tokens = expression.split(' ');
    for (const token of tokens) {
        stack.push(parseToken(token, stack));
    }
    return stack.pop();
}

(function () {
    const expr = buildSyntaxTree('w x y - + 27 +'); // input is postfix expression
    let currentContext: ContextMap = { 'w': 5, 'x': 10, 'y': 42 };
    let result = expr?.evaluate(currentContext);
    console.log(`Result 01: ${result}`);
    currentContext = { 'w': 45, 'x': 100, 'y': 5 };
    result = expr?.evaluate(currentContext);
    console.log(`Result 02: ${result}`);
})();
