// FMP Track Coding Chalenge 2024
// Day 19/366 => need a bug fixing on one case, now i am headeach => fixing done
// https://www.codewars.com/kata/563b662a59afc2b5120000c6/

// function nbYear(p0, percent, aug, p) {
//     // your code
//     console.log(`p0 : ${p0}\npercent : ${percent}\naug : ${aug}\np : ${p}`);

//     let result = 0
//     const formatPercent = percent / 100
//     while (Math.abs(p0) < p) {
//         result++
//         p0 += (p0 * formatPercent) + Math.abs(aug)
//     }
//     return result
// }

const nbYear = (p0, percent, aug, p) => {
    console.log(p0 * (2 / 100));
    let countYear = 0
    while (p0 < p) {
        countYear++
        p0 = Math.floor(p0 + (p0 * (percent / 100)) + aug)
    }
    return countYear
}

console.log(nbYear(1500000, 2.5, 10000, 2000000));

console.log(
    nbYear(1000, 2, 50, 1200)
);

console.log(
    nbYear(1500000, 0.25, -1000, 2000000)
);


