// FMP Track Coding Chalenge 2024
// Day 71/366
// https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/

const warArena = (fighterAttack, fighterDefence) => {
    fighterDefence.health -= fighterAttack.damagePerAttack
    return fighterDefence
}

function declareWinner(fighter1, fighter2, firstAttacker) {
    let trackAttack = firstAttacker
    while (fighter1.health > 0 && fighter2.health > 0) {
        if (trackAttack === fighter1.name) {
            trackAttack = fighter2.name
            fighter2 = warArena(fighter1, fighter2)
            continue
        }
        trackAttack = fighter1.name
        fighter1 = warArena(fighter2, fighter1)
    }
    return fighter1.health > fighter2.health ? fighter1.name : fighter2.name
}


// get insight from dicussion, and very clever
const declareWinner = (fighter1, fighter2, firstAttacker) => {
    const healtFighter1 = Math.ceil(fighter1.health / fighter2.damagePerAttack)
    const healtFighter2 = Math.ceil(fighter2.health / fighter1.damagePerAttack)
    console.log(
        fighter1.health / fighter2.damagePerAttack,
        fighter2.health / fighter1.damagePerAttack,
        fighter1.health % fighter2.damagePerAttack,
        fighter2.health % fighter1.damagePerAttack

    );

    healtFighter1
    healtFighter2
    return healtFighter1 === healtFighter2 ? firstAttacker : healtFighter1 > healtFighter2 ? fighter1.name : fighter2.name
}

function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function () { return this.name; }
}

console.log(
    declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")
);
