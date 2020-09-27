
class Lights {
    switchOn() {
        console.log(`Lights - Switched ON.`);
    }
    switchOff() {
        console.log(`Lights - Switched OFF.`);
    }
}

class Television {
    switchOn() {
        console.log(`Television - Switched ON.`);
    }
    switchOff() {
        console.log(`Television - Switched OFF.`);
    }
}

class MusicSystem {
    switchOn() {
        console.log(`MusicSystem - Switched ON.`);
    }
    switchOff() {
        console.log(`MusicSystem - Switched OFF.`);
    }
}

class HomeFacade {
    
    light: Lights;
    tv: Television;
    musicSystem: MusicSystem;

    constructor() {
        this.light = new Lights();
        this.tv = new Television();
        this.musicSystem = new MusicSystem();
    }

    leaveHome() {
        this.light.switchOff();
        this.tv.switchOff();
        this.musicSystem.switchOff();
    }

    reachHome() {
        this.light.switchOn();
        this.tv.switchOn();
        this.musicSystem.switchOn();
    }
}

(function(){
    const facade = new HomeFacade();
    facade.leaveHome();
    facade.reachHome();
})();