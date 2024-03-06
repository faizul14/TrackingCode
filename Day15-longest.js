// FMP Track Coding Chalenge 2024
// Day 15/366
// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/

// function longest(s1, s2) {
//     // your code
//     const isMerge = [...s1, ...s2]
//     let result = [isMerge[0]]
//     for (let i = 1; i < isMerge.length; i++) {
//         if(!result.includes(isMerge[i])){
//             result = result.concat(isMerge[i])
//         }
//     }    
//     return result.sort().join('')
// }

// insigth baru dari diskusi
// const longest = (s1, s2) => [...s1, ...s2].sort().filter((element, index, array) => element !== array[index - 1] ? element : '').join('')

// ini bisa cuman kurang efisien karena terlalu banyak prores
// const longest = (s1, s2) => [...s1, ...s2].sort().map((element, index, array) => element !== array[index - 1] ? element : '').filter(a => a !== '').join('')


console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));
