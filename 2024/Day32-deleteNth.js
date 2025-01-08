// FMP Track Coding Chalenge 2024
// Day 32/366
// https://www.codewars.com/kata/554ca54ffa7d91b236000023/

// function deleteNth(arr, n) {
//     // ...
//     let resultArr = []
//     let arrCheck = {}

//     for (let i = 0; i < arr.length; i++) {
//         const valueNow = arr[i]
//         arrCheck[valueNow] = arrCheck[valueNow] === undefined ? 1 : arrCheck[valueNow] + 1
//         if (arrCheck[valueNow] > n) {
//             continue
//         }
//         resultArr.push(valueNow)
//     }

//     return resultArr
// }

// insight from diskusi
const deleteNth = (arr, n) => {
    let chace = {}
    return arr.filter((el) => {
        chace[el] = (chace[el] || 0) + 1;
        return chace[el] <= n;
    })
}

console.log(
    deleteNth([20, 37, 20, 21], 1)
);
