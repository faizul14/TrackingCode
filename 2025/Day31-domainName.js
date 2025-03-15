// FMP Track Coding Chalenge 2025
// Day 31/365
// https://www.codewars.com/kata/514a024011ea4fb54200004b/

function domainName(url) {
    //your code here
    let urlMod = url.replace(/[/]|http:|https:|com|www/g, "").split('.')
    return urlMod[0] === '' ? urlMod[1] : urlMod[0]
}

// Good regex solution, i'm must analize and learn this solution
function domainName(url) {
    return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}
console.log(
    domainName('http://google.com'),
    domainName('www.xakep.ru'),
    domainName('https://youtube.com')
);
