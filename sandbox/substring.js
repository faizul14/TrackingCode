const subString = s => {
    const sub = []

    console.log(
        s.substring(0, 3)
    );
    

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            sub.push(s.substring(i, j))
        }
    }
    return sub
}

console.log(
    subString('ababd')
);
