// FMP Track Coding Chalenge 2024
// Day 126/366
// https://www.codewars.com/kata/5541f58a944b85ce6d00006a/

const fabio = (arr) => {
    const newElementFab = arr[arr.length - 1] + arr[arr.length - 2]
    arr.push(newElementFab)
    return arr
}

function productFib(prod) {
    // ...
    arr = [0, 1]
    let verif = false
    while (true) {
        arr = fabio(arr)
        const check = arr[arr.length - 2] * arr[arr.length - 1]
        if (check === prod) {
            verif = true
            break
        }

        if (check > prod) {
            verif = false
            break
        }
    }
    return [arr[arr.length - 2], arr[arr.length - 1], verif]
}

console.log(  // [55, 89, true]
    // productFib(4895)
    // productFib(15)
    productFib(5895)
);