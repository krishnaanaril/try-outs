interface State {
    displayMessage(): void;
}

class HealthyState implements State {
    displayMessage() {
        console.log('Player is in healthy state.');
    }
}

class HurtState implements State {
    displayMessage() {
        console.log('Player is hurt, search for health points.');
    }
}

class DeadState implements State {
    displayMessage() {
        console.log('Player is dead. Game over.');
    }
}

class GamePlayer {
    currentState: State;
    constructor() {
        this.currentState = new HealthyState();
    }

    bulletHit(bulletCount: number) {
        console.log(`${bulletCount} bullets hits the player.`);
        if(bulletCount > 5 && bulletCount < 10)
            this.currentState = new HurtState();
        else if(bulletCount >= 10)
            this.currentState = new DeadState();
        this.currentState.displayMessage();
    }
}

(function(){
    const player: GamePlayer = new GamePlayer();
    
    player.bulletHit(3);
    player.bulletHit(7);
    player.bulletHit(12);
})();