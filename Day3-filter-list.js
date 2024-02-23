// FMP Track Coding Chalenge 2024
// Day 3/366
// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

// function filter_list(l) {
//     // Return a new array with the strings filtered out
//     let resultList = []
//     for (let i = 0; i < l.length; i++){
//         if(typeof(l[i]) == "number"){
//             resultList.push(l[i])
//         }
//     }    
//     return resultList
// }

const filter_list = (l) => l.filter(a => typeof (a) == "number")

console.log(filter_list([1, 2, 'a', 'b']));  // [1,2]
