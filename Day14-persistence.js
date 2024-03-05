// FMP Track Coding Chalenge 2024
// Day 14/366 => this chalenge still not finish (maybe i am need a time for think)
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/

const persistence = (num) => {
    //code me
    let resultCount = 0
    let bantu = num.toString().split('')
    // console.log(bantu);

    if (num < 10) {
        return resultCount
    }
    // console.log(num);
    // while(true){
    //     if(bantu.reduce((acc, el) => acc *= el , 0) )
    // }

    return resultCount
}

console.log(persistence(39));
