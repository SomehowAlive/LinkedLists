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

    insertAt(value, index) {
        if (index > this.size)
            throw new Error("Index Out of Range")
        else if (index === 1) {
            this.prepend(value);
        }
        else {
            let curr = this.head;
            let i = 1
            while (i < index - 1) {
                curr = curr.next;
                i++;
            }
            const newNode = new Node(value);
            newNode.next = curr.next;
            curr.next = newNode;
            this.size++;
        }
    }

    removeAt(index) {
        if (index === 1) {
            this.head = this.head.next;
            this.size--;
        }
        else if (index === this.size)
            this.pop();
        else {
            let i = 1
            let curr = this.head;
            let prev = null;
            while (i < index) {
                prev = curr;
                curr = curr.next;
                i++;
            }
            prev.next = curr.next;
            this.size--;
        }
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
L.append(5)
L.removeAt(5)
L.prepend(0)
L.toString()