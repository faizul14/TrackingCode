const permutations = (n) => {
    const perms = [];
    perms

    let selected, remaining;
    selected
    remaining

    if (n.length === 1) {
        return [n];
    }

    for (let i = 0; i < n.length; i++) {
        // selected = n.slice(i, i + 1);
        selected = [n[i]];

        selected

        let head = n.slice(0, i);
        head
        let tail = n.slice(i + 1);
        tail
        let shorty = head.concat(tail);
        shorty

        remaining = permutations(shorty);
        remaining

        for (let j = 0; j < remaining.length; j++) {
            let perm = selected.concat(remaining[j]);
            perm
            perms.push(perm);
        }
    }
    perms
    return perms;
}

console.log(
    permutations([1, 2])
);
