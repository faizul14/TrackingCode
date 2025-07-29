class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.curent = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.curent) {
            this.curent = newNode;
        } else {
            let current = this.curent
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    print() {
        let curent = this.curent;

        while (curent) {
            console.log(curent.data);
            curent = curent.next;

        }
    }
}


const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.append(40);

list.print();

console.log(
    9999999+9999
);
