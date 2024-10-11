// FMP Track Coding Chalenge 2024
// Day 112/366
// https://www.codewars.com/kata/564057bc348c7200bd0000ff/

function thirt(n) {
    // your code
    const constantDivisions = [1, 10, 9, 12, 3, 4]
    let tempAfterProcces = n

    while(true){
        let idx = 0
        let tempAcc = 0
        const temp = tempAfterProcces.toString().split('').reverse()
        temp
        for(let i of temp){
            i
            console.log(constantDivisions[idx]);
            
            tempAcc += (+i * constantDivisions[idx])
            idx++
            if(idx > 5) idx = 0
        }
        if(tempAfterProcces === tempAcc) break
        tempAfterProcces = tempAcc
    }
    return tempAfterProcces
}
console.log(
    thirt(1234567)
);
