class Dice {
    attack;
    heal;
    element;
    choice;
    setAttack(value) {
        this.attack = value;
        console.log("Angriffswürfel: " + value);
    }
    setHeal(value) {
        this.heal = value;
        console.log("Heilungswürfel: " + value);
    }
    setElement(value) {
        this.element = value;
        console.log("Elementarwürfel: " + value);
    }
    setChoice(value) {
        this.choice = value;
        console.log("Aktionswahl: " + value);
    }
}