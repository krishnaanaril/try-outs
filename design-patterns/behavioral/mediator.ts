interface Mediator {
    addUser(user: User): void;
    sendMessage(message: string, sender: User): void;
}

interface User {
    name: string;
    sendMessage(message: string): void;
    recieveMessage(message: string): void;
}

class ChatMediator implements Mediator {
    private _users: User[];
    constructor() {
        this._users = [];
    }
    addUser(user: User): void {
        this._users.push(user);
    }
    sendMessage(message: string, sender: User): void {
        for (const user of this._users) {
            if(user.name !== sender.name)
                user.recieveMessage(message);
        }
    }
}

class PremiumUser implements User {
    private _mediator: Mediator;
    name: string;
    constructor(mediator: Mediator, name: string) {
        this._mediator=  mediator;
        this.name = name;
    }
    sendMessage(message: string): void {
        this._mediator.sendMessage(message, this);
    }
    recieveMessage(message: string): void {
        console.log(`Premium user - ${this.name} gets the message: ${message}`);
    }
}

class BasicUser implements User {
    private _mediator: Mediator;
    name: string;
    constructor(mediator: Mediator, name: string) {
        this._mediator=  mediator;
        this.name = name;
    }
    sendMessage(message: string): void {
        this._mediator.sendMessage(message, this);
    }
    recieveMessage(message: string): void {
        console.log(`Basic user - ${this.name} gets the message: ${message}`);
    }
}

(function(){
    const mediator: ChatMediator = new ChatMediator();
    const john: User = new BasicUser(mediator, 'John');
    const dan: User = new PremiumUser(mediator, 'Dan');
    const rose: User = new BasicUser(mediator, 'Rose');
    const mary: User = new PremiumUser(mediator, 'Mary');
    mediator.addUser(john);
    mediator.addUser(dan);
    mediator.addUser(rose);
    mediator.addUser(mary);

    dan.sendMessage('Hello Everyone');
    rose.sendMessage('Good morning!');
})();