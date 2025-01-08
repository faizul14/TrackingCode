// FMP Track Coding Chalenge 2024
// Day 65/366
// https://www.codewars.com/kata/54dc6f5a224c26032800005c/

const accByCategory = (arrArt, arrCat, idxCat) => arrArt
    .filter((el) => el[0] === arrCat[idxCat])
    .map((el) => +el.match(/[0-9]/g).join(''))
    .reduce((acc, el) => acc += el, 0)

function stockList(listOfArt, listOfCat) {
    // ...     
    if (listOfCat.length === 0 || listOfArt.length === 0) {
        return ""
    }
    const result = []
    let idx = 0
    while (idx < listOfCat.length) {
        const group = accByCategory(listOfArt, listOfCat, idx)
        result.push(`(${listOfCat[idx]} : ${group})`)
        idx++
    }
    return result.join(' - ')
}

console.log( // otuput : (A : 0) - (B : 1290) - (C : 515) - (D : 600)
    stockList(
        ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"],
        ["A", "B", "C", "D"]
    )
);
