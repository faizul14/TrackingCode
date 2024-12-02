// FMP Track Coding Chalenge 2024
// Day 131/366
// https://www.codewars.com/kata/569d488d61b812a0f7000015/

function dataReverse(data) {
    // Your code here
    const result = []
    const tempData = []
    const loop = (data.length / 8)
    let part = 1
    loop

    for (let i = 0; i < loop; i++) {
        let data1 = data.slice(0, 8)
        data
        data1
        tempData.push(
            {
                arr: data1,
                part: part
            }
        )
        data = data.slice(8)
        data
        part++
    }
    tempData.sort((a, b) => b.part - a.part)
    console.log(
        tempData
    );

    for (let i = 0; i < loop; i++) {
        result.push(...tempData[i].arr)
    }
    return result
}


const data1 = [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]
console.log(
    dataReverse(data1)
);



console.log(
    0 % 8
);
