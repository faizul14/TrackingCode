// FMP Track Coding Chalenge 2024
// Day 61/366 => Need fixing
// https://www.codewars.com/kata/55983863da40caa2c900004e/

const movingToBigger = value => {
    let valueTemp = value.toString().split('')
    valueTemp
    let indexMoving = valueTemp.length - 1

    while (true) {
        let isSame = false
        const temp = valueTemp[indexMoving - 1]
        valueTemp[indexMoving - 1] = valueTemp[indexMoving]
        valueTemp[indexMoving] = temp

        valueTemp = +valueTemp.join('') // + => sama dengan parseInt(), untuk menjadikan string ke number

        if (valueTemp > value) {
            return valueTemp
        }

        if(valueTemp === value){
            isSame = true
        }

        if (indexMoving === 0) {
            return -1
        }

        valueTemp = value.toString().split('')
        indexMoving--
        if(!isSame){
            valueTemp[indexMoving] = valueTemp.splice(indexMoving).join('')
        }
    }
}

function nextBigger(n) {
    //your code here
    if (n <= 11) {
        return -1
    }

    return movingToBigger(n)
}


console.log(
    nextBigger(
        // 121
        144
    )
);

console.log(
    movingToBigger(
        1234567890
    )
);

console.log(
    [1, 2, 3].splice(1).join('')
);


