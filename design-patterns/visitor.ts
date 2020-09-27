
// google double dispatch

interface Operation {
    hereIsADog(dog: Dog): void;
    hereIsACat(cat: Cat): void;
}

class Sound implements Operation {
    hereIsACat(cat: Cat) {
        console.log(`Meow is the sound of ${cat.name}`);
    }
    hereIsADog(dog: Dog) {
        console.log(`Bow is the sound of ${dog.name}`);
    }
}

class Breed implements Operation {
    hereIsACat(cat: Cat) {
        console.log(`Caracal is the breed of ${cat.name}`);
    }
    hereIsADog(dog: Dog) {
        console.log(`Bully is the breed of ${dog.name}`);
    }
}

interface Animal {
    name: string;
    letsDo(operation: Operation): void;
}

class Dog implements Animal {
    name: string;
    letsDo(operation: Operation) {
        operation.hereIsADog(this);
    }
    constructor() {
        this.name = 'Dog';
    }
}

class Cat implements Animal {
    name: string;
    letsDo(operation: Operation) {
        operation.hereIsACat(this);
    }
    constructor() {
        this.name = 'Cat';
    }
}


(function(){
    const dog: Dog = new Dog();
    dog.name = 'Blade';
    dog.letsDo(new Sound());
    dog.letsDo(new Breed());

    const cat: Cat = new Cat();
    cat.name = 'Manju';
    cat.letsDo(new Sound());
    cat.letsDo(new Breed());
})();