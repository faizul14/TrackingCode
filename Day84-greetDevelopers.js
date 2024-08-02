// FMP Track Coding Chalenge 2024
// Day 84/366
// https://www.codewars.com/kata/58279e13c983ca4a2a00002a/

function greetDevelopers(list) {
    // thank you for checking out my kata :)

    // Hi Lukas, what do you like the most about Python?

    list.map(el => el.greeting = `Hi ${el.firstName}, what do you like the most about ${el.language}?`)
    return list
}


const list1 = [
    {
        firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    },
    {
        firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
    },
    {
        firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
    },
];

console.log(
    greetDevelopers(
        list1
    )
);
