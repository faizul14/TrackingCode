// FMP Track Coding Chalenge 2024
// Day 94/366 => Need fixing
// https://www.codewars.com/kata/554a44516729e4d80b000012/

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
    //your code here
    if (startPriceOld >= startPriceNew) return [0, startPriceOld - startPriceNew]

    let saveMonth = savingperMonth
    let month = 1
    let selisih = 0

    while (saveMonth < startPriceNew) {
        if (month % 2 === 0) percentLossByMonth += 0.5
        startPriceOld = startPriceOld - (percentLossByMonth / 100) * startPriceOld
        startPriceNew = startPriceNew - (percentLossByMonth / 100) * startPriceNew
        selisih = (startPriceNew - startPriceOld) - saveMonth


        month++
        saveMonth += savingperMonth
    }

    startPriceNew
    startPriceOld
    selisih
    month
    saveMonth
    percentLossByMonth


    return [(month - 1), Math.abs(Math.round(selisih))];
}

console.log(
    // nbMonths(2000, 8000, 1000, 1.5)
    nbMonths(8000, 12000, 500, 1)
);
