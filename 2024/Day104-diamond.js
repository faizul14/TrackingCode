// FMP Track Coding Chalenge 2024
// Day 104/366
// https://www.codewars.com/kata/5503013e34137eeeaa001648/

function diamond(n) {
    if (n % 2 === 0 || n < 0) return null
    let makeDiamond = ''
    let idx = 0
    while (idx <= n) {
        const spaceSet = n === idx ? 0 : (Math.floor(n - idx) / 2)
        spaceSet
        makeDiamond = idx % 2 !== 0 ? makeDiamond.concat(`${' '.repeat(spaceSet) + '*'.repeat(idx) + '\n'}`) : makeDiamond
        idx++
    }

    idx = n
    idx
    while (idx >= 1) {
        if (idx === n) {
            idx--
            continue
        }
        const spaceSet = n === idx ? 0 : (Math.floor(n - idx) / 2)
        spaceSet
        idx
        makeDiamond = idx % 2 !== 0 ? makeDiamond.concat(`${' '.repeat(spaceSet) + '*'.repeat(idx) + '\n'}`) : makeDiamond
        idx--
    }


    console.log(makeDiamond)
    return makeDiamond
}


console.log(
    diamond(-3)
);

