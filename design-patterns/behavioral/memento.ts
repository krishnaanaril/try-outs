class Memento {
    level: number;
    score: number; 
    health: string;
    constructor(level: number,
        score: number, 
        health: string) {
            this.level = level;
            this.score = score;
            this.health = health;
        }
}

class CareTaker {
    levelMarker: Memento;
    constructor() {
        this.levelMarker = new Memento(0, 0, "100%");
    }
}

class Player {
    level: number = 0;
    score: number = 0; 
    health: string = '100%';
    lifeLine: number = 3;
    createMarker() {
        return new Memento(this.level, this.score, this.health);
    }
    restoreLevel(memento: Memento) {
        this.level = memento.level;
        this.score = memento.score;
        this.health = memento.health;
        this.lifeLine--;
    }
    displayInfo() {
        console.log(`
            Level   : ${this.level}
            Score   : ${this.score} 
            Health  : ${this.health}
            LifeLine: ${this.lifeLine}
        `);
    }
}

(function(){
    const careTaker: CareTaker = new CareTaker();
    const john: Player = new Player();
    john.displayInfo();

    console.log(`john completes level 1`);
    john.level = 1;
    john.score= 100;
    john.health = '80%';
    careTaker.levelMarker = john.createMarker();
    john.displayInfo();

    console.log(`john is playing level 2`);
    john.level = 1;
    john.score= 180;
    john.health = '45%';
    john.displayInfo();

    console.log(`john loses a life and level is reset`);
    john.restoreLevel(careTaker.levelMarker);
    john.displayInfo();
})();