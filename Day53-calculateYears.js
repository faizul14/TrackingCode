// FMP Track Coding Chalenge 2024
// Day 53/366
// https://www.codewars.com/kata/563f037412e5ada593000114/

function calculateYears(principal, interest, tax, desired) {
    // your code
    let yearsOnTarget = 0

    if (principal >= desired) {
        return 0
    }

    while (principal < desired) {
        const bunga = principal * interest
        const laba = bunga - (bunga * tax)
        principal += laba
        yearsOnTarget++
    }
    return yearsOnTarget
}

console.log(
    calculateYears(
        1000, 0.05, 0.18, 1100
    )
);
