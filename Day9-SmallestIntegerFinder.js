// FMP Track Coding Chalenge 2024
// Day 9/366
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//         return args.sort((a, b) => a - b)[0]
//     }
// }

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args)
    }
}


let small = new SmallestIntegerFinder();
console.log(small.findSmallestInt([78, 56, 232, 12, 8]));
