// FMP Track Coding Chalenge 2024
// Day 63/366
// https://www.codewars.com/kata/5254ca2719453dcc0b00027d/

// This solution not support permutation duplicated character
// function permutations(string, pos = '', newElement = '', result = []) {
//     pos += newElement

//     if (string.length === pos.length) {
//         console.log(pos);
//         result.push(pos)
//         return
//     }

//     for (let i = 0; i < string.length; i++) {
//         newElement = string[i]
//         if (pos.indexOf(newElement) === -1)
//             permutations(string, pos, newElement, result)
//     }

//     return result
// }

// This solution support permutation with duplicated character
function permutations(string, pos = '', used = [], result = []) {
    if (pos.length === string.length) {
        result.push(pos);
        return;
    }

    for (let i = 0; i < string.length; i++) {
        // Skip used characters at the current recursive level
        if (used[i]) continue;

        // Skip duplicate characters in the same position
        if (i > 0 && string[i] === string[i - 1] && !used[i - 1]) continue;

        used[i] = true;
        permutations(string, pos + string[i], used, result);
        used[i] = false;
    }

    return result;
}

console.log(
    permutations('abc'),
);

// insight
// https://stackoverflow-com.translate.goog/questions/9960908/permutations-in-javascript?_x_tr_sl=en&_x_tr_tl=id&_x_tr_hl=id&_x_tr_pto=tc

// https://www.youtube.com/watch?v=teBSzAxCjJc

// https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/permutations