// FMP Track Coding Chalenge 2024
// Day 13/366 => this chalenge still not finish (maybe i am need a time for think)
// https://www.codewars.com/kata/54da539698b8a2ad76000228/

function isValidWalk(walk) {
    //insert brilliant code here
    if (walk.length < 10) {
        return false
    }
    const arah = {
        S: 's',
        N: 'n',
        W: 'w',
        E: 'e'
    }
    const arahLast = {
        s: 'n',
        n: 's',
        w: 'e',
        e: 'w'
    }

    const x = walk.filter(a => a === arah.S).length - walk.filter(a => a === arah.N).length
    const y = walk.filter(a => a === arah.W).length - walk.filter(a => a === arah.E).length
    const sn = walk[0] === arah.S ? arah.N : arah.S
    const we = walk[0] === arah.W ? arah.E : arah.W
    const lastCheck = walk[0] === arah.S || walk[0] === arah.N ? sn : we
    return walk.length === 10 && (x - y) === 0 && lastCheck != walk[0] && arahLast[lastCheck] === walk[0] ? true : false
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));