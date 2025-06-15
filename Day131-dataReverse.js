// FMP Track Coding Chalenge 2024
// Day 131/366
// https://www.codewars.com/kata/569d488d61b812a0f7000015/

const dataReverse = (data) => {
    let result = []
    let tempData = []
    data.map((el, idx, _) => {
        tempData.push(el)
        if ((idx + 1) % 8 === 0) {
            result.push(tempData)
            tempData = []
        }
    })
    tempData
    result.reverse().map(el => {
        tempData.push(...el)
    })
    return tempData
}


const data1 = [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]
console.log(
    dataReverse(data1)
);
