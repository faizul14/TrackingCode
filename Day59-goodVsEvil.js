// FMP Track Coding Chalenge 2024
// Day 59/366
// https://www.codewars.com/kata/52761ee4cffbc69732000738/

const result = {
    goodWin: 'Battle Result: Good triumphs over Evil',
    evilsWin: 'Battle Result: Evil eradicates all trace of Good',
    tie: 'Battle Result: No victor on this battle field'
}

const rasForGod = {
    0: {
        // ras: 'Hobbits',
        value: 1
    },
    1: {
        // ras: 'Man',
        value: 2
    },
    2: {
        // ras: 'Elves',
        value: 3
    },
    3: {
        // ras: 'Dwarves',
        value: 3
    },
    4: {
        // ras: 'Eagles',
        value: 4
    },
    5: {
        // ras: 'Wizards',
        value: 10
    },
}
const rasForEvils = {
    0: {
        // ras: 'Orcs',
        value: 1
    },
    1: {
        // ras: 'Man',
        value: 2
    },
    2: {
        // ras: 'Wargs',
        value: 2
    },
    3: {
        // ras: 'Goblins',
        value: 2
    },
    4: {
        // ras: 'Uruk Hai',
        value: 3
    },
    5: {
        // ras: 'Trolls',
        value: 5
    },
    6: {
        // ras: 'Wizards',
        value: 10
    }
}

const accumulator = (value, objras) => value.split(' ').reduce((acc, el, idx, _) => acc += (parseInt(el) * (objras[idx].value)), 0)

function goodVsEvil(good, evil) {
    good = accumulator(good, rasForGod)
    evil = accumulator(evil, rasForEvils)
    return good === evil ? result.tie : good > evil ? result.goodWin : result.evilsWin
}


console.log(
    goodVsEvil(
        '1 1 1 1 1 1', '1 1 1 1 1 1 1'
        // '1 0 0 0 0 0', '1 0 0 0 0 0 0'
    )
);
