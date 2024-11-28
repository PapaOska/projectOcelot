class Player {
    id;
    name;
    life;
    element;
    turn;
    turnsLeft;
    turnDone;
    medals;
    receivedMedals;
    exhausted;
    godMode;
    alreadyUsed;
    setLife(value) {
        if(this.godMode && value > this.life) {
            this.life = Math.ceil(value);
        }else if(!this.godMode) {
            this.life = Math.ceil(value);
        }
        if(this.life <= 0) {
            this.life = 0;
            this.exhausted = true;
        }
        if(this.life < 80 && !this.receivedMedals[0]) {
            this.receivedMedals[0] = true;
            this.medals++;
        }
        if(this.life < 60 && !this.receivedMedals[1]) {
            this.receivedMedals[1] = true;
            this.medals++;
        }
        if(this.life < 40 && !this.receivedMedals[2]) {
            this.receivedMedals[2] = true;
            this.medals++;
        }
        if(this.life < 20 && !this.receivedMedals[3]) {
            this.receivedMedals[3] = true;
            this.medals++;
        }
    }
    constructor(name, element, id) {
        this.id = id;
        this.name = name;
        this.element = element;
        this.turn = false;
        this.turnsLeft = 0;
        this.turnDone = false;
        this.life = 100;
        this.medals = 0;
        this.receivedMedals = [false, false, false, false];
        this.exhausted = false;
        this.godMode = false;
        this.alreadyUsed = false;
    }
    die() {
        this.setLife(0);
        this.exhausted = true;
        console.log(this.name + " is exhausted");
    }
}

