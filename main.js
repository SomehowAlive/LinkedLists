class Node {
    constructor(value = null, next = null) {
        this.value = value
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        const n = new Node(value);
        if (!this.size) {
            this.head = n;
            this.tail = n;
        }
        else {
            this.tail.next = n;
            this.tail = n;
        }
        this.size++;
    }

    prepend(value) {
        if (!this.size) {
            this.append(value);
        }
        else {
            const n = new Node(value);
            n.next = this.head;
            this.head = n;
        }
    }

    at(index) {
        if (index > this.size) {
            throw new Error("Index out of range");
        }
        let i = 1;
        let current = this.head;

        while (i < index) {
            current = current.next;
            i++;
        }
        return current;
    }

    pop() {
        if (this.size <= 1) {
            this.head = null;
            this.tail = null
            this.size = 0;
        }
        else {
            let current = this.head;
            while (current.next.next)
                current = current.next;
            current.next = null;
            this.tail = current;
            this.size--;
        }

    }

    contains(value) {
        let current = this.head;
        while (current) {
            if (current.value === value)
                return true;
            current = current.next;
        }
        return false;
    }

    find(value) {
        let current = this.head;
        let i = 1;
        while (current) {
            if (current.value === value)
                return i;
            current = current.next;
            i++;
        }
        return null;

    }

    Head() {
        return this.head;
    }

    Tail() {
        return this.tail;
    }

    Size() {
        return this.size;
    }

    toString() {
        let current = this.head;
        let str = ""
        while (current) {
            str += `(${current.value}) -> `
            current = current.next;
        }
        str += " null "
        console.log(str);
    }
}

const L = new LinkedList();
L.append(1)
L.append(2)
L.append(3)
L.append(4)
L.toString()