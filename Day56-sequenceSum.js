// FMP Track Coding Chalenge 2024
// Day 56/366
// https://www.codewars.com/kata/586f6741c66d18c22800010a/

// const sequenceSum = (begin, end, step) => {
//     // May the Force be with you
//     if (begin > end) {
//         return 0
//     }

//     const arrHelp = []
//     while (begin <= end) {
//         arrHelp.push(begin)
//         begin += step
//     }

//     return arrHelp.reduce((acc, el) => acc += el, 0)
// };

const sequenceSum = (begin, end, step) => {
    // May the Force be with you
    if (begin > end) {
        return 0
    }

    let result = 0
    while (begin <= end) {
        result += begin
        begin += step
    }
    return result
};

console.log(
    sequenceSum(
        1, 5, 1
    )
);
