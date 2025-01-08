// FMP Track Coding Chalenge 2024
// Day 2/366
// https://www.codewars.com/kata/52fba66badcd10859f00097e

// function disemvowel([...str]) {
//     let result = ''
//     const vowel = ['a', 'i', 'u', 'e', 'o', 'A', 'I', 'U', 'E', 'O']

//     for(let i = 0; i < str.length; i++){
//         times++
//         let isNotSame = true
//         for(let j = 0; j < vowel.length; j++){
//             if(str[i] === vowel[j]){                
//                 isNotSame = false
//                 break
//             }
//             times++
//         }
//         if(isNotSame){            
//             result = result.concat(str[i]);
//         }
//     }      
//     return result
// }

const disemvowel = ([...str]) => str.reduce((acc, el) => acc.concat(!'aiueoAIUEO'.includes(el) ? el : ''), '')

console.log(disemvowel("Ux adPIcoICFtWRTbojzM ELFqYdCyayd"));
