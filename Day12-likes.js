// FMP Track Coding Chalenge 2024
// Day 12/366
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/

function likes(names) {
    // TODO
    const like = ` like${names.length > 1 ? '' : 's'} this`
    let person = ''

    switch (names.length) {
        case 0:
            person = 'no one'
            break;
        case 1:
            person = names[0]
            break;
        case 2:
            person = `${names[0]} and ${names[1]}`
            break;
        case 3:
            person = `${names[0]}, ${names[1]} and ${names[2]}`
            break;
        default:
            person = `${names[0]}, ${names[1]} and ${names.slice(2).length} others`
            break;
    }
    return person.concat(like)
}

console.log(likes(['Alex']));
