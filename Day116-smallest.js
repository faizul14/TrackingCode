// FMP Track Coding Chalenge 2024
// Day 116/366 => Need Fixing
// https://www.codewars.com/kata/573992c724fc289553000e95/

function smallest(n) {
    // Your code
    console.log(
        Math.min(...n.toString())
    );
    n = n.toString()
    const m = n[0]
    n = n.slice(1)
    n
    const min = Math.min(...n)
    let indexMin = 0
    let indexMiddle = 0
    min
    n = m + n
    n
    
    const special = +n[0] > +n[1] ? true : false


    for (let i in n){
        i
        if(min == n[i]){
            i
            indexMin = i
            break
        }
    }
    indexMin
    const removMinDigit = n.replace(new RegExp(min), '')
    const baru = removMinDigit.slice(1, 1, min)
    removMinDigit
    baru

    for(let i in n){
        if (Number(n[i]) > min){
            indexMiddle = i
            break
        }
    }

    indexMiddle

    const second = special ? +indexMiddle : +indexMin
    const three = special ? +indexMin : +indexMiddle

    return [+`${removMinDigit.slice(0, indexMiddle)}${min}${removMinDigit.slice(indexMiddle)}`, second, three]
}

console.log( // [26945, 3, 0]
    // smallest(269045),
    // smallest(261235)
    // smallest(285365)
    smallest(209917)
);
