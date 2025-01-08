// FMP Track Coding Chalenge 2024
// Day 43/366
// https://www.codewars.com/kata/563f960e3c73813942000015/

function getBestWord(points, words) {
    //Return the shortest word realizing the best score
    let indexResult = {
        pointAcc: 0,
        index: 0
    }
    const arrChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    let lopping = 0
    while (lopping < words.length) {
        let acc = 0
        for (let i = 0; i < words[lopping].length; i++) {
            acc += points[arrChar.indexOf(words[lopping][i])]
        }
        if (indexResult.pointAcc <= acc) {
            if (words[lopping].length !== words[indexResult.index].length || lopping === 0) {
                indexResult.pointAcc = acc
                indexResult.index = lopping
            }
            // indexResult.index = lopping
        }
        lopping++
    }
    return indexResult.index
}

var points = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 10, 1, 2, 1, 1, 3, 8, 1, 1, 1, 1, 4, 10, 10, 10, 10];
var simpleWords = ["WHO", "IS", "THE", "BEST", "OF", "US"]; //['AAA', 'B', 'A', 'E', 'I'] //
console.log(
    getBestWord(
        points, simpleWords
    )
);