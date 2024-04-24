// FMP Track Coding Chalenge 2024
// Day 38/366
// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/

function firstNonRepeatingLetter(s) {
    // Add your code here
    let result = ''
    let helper = [...s]

    while (helper.length > 0) {
        const charCheck = helper[0]
        const regex = new RegExp(charCheck, 'gi')
        helper.splice(0, 1)
        const helper2 = helper.join('')
        if (regex.test(helper2)) {
            helper = helper.filter((el) => el.toLowerCase() !== charCheck)
            continue
        }
        result = charCheck
        break
    }
    return result
}


// one lineer but not working in solor char then one
// const firstNonRepeatingLetter = s => s.split('').filter((el) =>  s.match(new RegExp(el, 'gi')).length === 1)



console.log(
    firstNonRepeatingLetter(
        'moonmen'
    ),
    firstNonRepeatingLetter(
        'stress'
    )
);