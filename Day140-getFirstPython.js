// FMP Track Coding Chalenge 2024
// Day 140/366
// https://www.codewars.com/kata/5827bc50f524dd029d0005f2/

function getFirstPython(list) {
    // Thank you for checking out my kata :)
    const findDev = list.find((el) => el.language === 'Python') || 0
    findDev
    return findDev !== 0 ? `${findDev.firstName}, ${findDev.country}` : 'There will be no Python developers'
}

var list1 = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];

var list2 = [
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
    { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' },
];

console.log(
    getFirstPython(list2)
);
