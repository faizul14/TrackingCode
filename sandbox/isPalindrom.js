const isPalindrom = word => {
    let l = 0
    let r = (word.length - 1)
    l
    r

    while (l < r) {
        if (word[l] !== word[r]) return false
        l++
        r--
    }

    return true

}

console.log(
    isPalindrom('kasur rusak')
);
