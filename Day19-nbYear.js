// FMP Track Coding Chalenge 2024
// Day 19/366 => need a bug fixing on one case, now i am headeach
// https://www.codewars.com/kata/563b662a59afc2b5120000c6/

function nbYear(p0, percent, aug, p) {
    // your code
    console.log(`p0 : ${p0}\npercent : ${percent}\naug : ${aug}\np : ${p}`);

    let result = 0
    const formatPercent = percent / 100
    while (Math.abs(p0) < p) {
        result++
        p0 += (p0 * formatPercent) + Math.abs(aug)
    }
    return result
}

console.log(nbYear(1500000, 2.5, 10000, 2000000));
