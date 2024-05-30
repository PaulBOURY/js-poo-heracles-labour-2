const MAX_LIFE = 100;

class Fighter {
    constructor(name, strength, dexterity, weapon=null, shield=null) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = MAX_LIFE;
        this.weapon = weapon;
        this.shield = shield;
    }

    // method to get the damage
    getDamage() {
        let totalDamage = 0;
        if (this.weapon !== null) {
            totalDamage = this.strength + this.weapon.damage;
        } else {
            totalDamage = this.strength;
        }
        return totalDamage;
    }

    // method to get the defense
    getDefense() {
        let totalDefense = 0;
        if (this.shield !== null) {
            totalDefense = this.dexterity + this.shield.protection;
        } else {
            totalDefense = this.dexterity;
        }
        return totalDefense;
    }


    // Launch a fight
    fight(defender) {
        const attackPoints = this.getRandomInt(this.getDamage());

        const damages = Math.max(attackPoints - defender.getDefense(), 0);

        defender.life = Math.max(defender.life - damages, 0);
    }

    

    // Generate a random value between 1 and max
    getRandomInt(max) {
        return 1 + Math.floor(Math.random() * max);
    }


    // Determine if a fighter is still alive
    isAlive() {
        return this.life > 0;
    }
}

module.exports = Fighter;
