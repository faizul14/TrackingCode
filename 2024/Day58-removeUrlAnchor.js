// FMP Track Coding Chalenge 2024
// Day 58/366
// https://www.codewars.com/kata/51f2b4448cadf20ed0000386/

// function removeUrlAnchor(url) {
//     // TODO: complete
//     url = url
//         .replace(/#/g, ' ')
//         .split(' ')
//     return url[0]
// }

// const removeUrlAnchor = url => url.replace(/#/g, ' ').split(' ')[0]

// insight from discusion and i fell stupid cause make e ribet , padahal bisa langsung di split LOL
const removeUrlAnchor = url => url.split('#')[0]


console.log(
    removeUrlAnchor(
        'www.codewars.com#about'
    )
);
