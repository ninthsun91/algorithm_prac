/**
 * 
 * Linked List
 * 
 * node: data / next
 * 
 * insertHead
 * insertTail
 * insert
 * delete
 * modify
 * getAll
 * get
 * 
 */

/** */
class LinkedNode {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }

    delete = () => {
        delete this.data;
        delete this.next;
    }
}

class LinkedList {
    #head = null;
    #size = 0;

    constructor() {
        this.#head = null;
        this.#size = 0;
    }

    insertHead = (data) => {
        const node = new LinkedNode(data);
        this.#size++;
        
        if (this.#size === 1) {
            this.#head = node;
            return;
        }
        
        node.next = this.#head;
        this.#head = node;
        
        return;
    }

    insertTail = (data) => {
        const node = new LinkedNode(data);
        this.#size++;

        if (this.#size === 1) {
            this.#head = node;
            return;
        }

        let index = 0;
        let prevNode = this.#head;
        while (index++ !== this.#size - 2) {
            prevNode = prevNode.next;
        }

        prevNode.next = node;
        return;
    }

    insert = (data, index) => {
        const node = new LinkedNode(data);
        this.#size++;

        if (index === 0) {
            node.next = this.#head
            this.#head = node;
            return;
        }

        let start = 0;
        let prevNode = this.#head;
        while (start++ !== index -1) {
            prevNode = prevNode.next;
        }

        node.next = prevNode.next;
        prevNode.next = node;

        return;
    }

    delete = (index) => {
        let start = 0;
        let node = this.#head;
        while (start++ !== index -1) {
            node = node.next;
        }

        const nextNode = node.next.next
        node.next.delete();
        node.next = nextNode;

        this.#size--;
        return;
    }

    modify = (data, index) => {
        let start = 0;
        let node = this.#head;
        while (start++ !== index) {
            node = node.next;
        }
        
        node.data = data;
        return;
    }

    getAll = () => {
        const array = [];

        let index = 0;
        let node = this.#head;
        while (index++ !== this.#size) {
            array.push(node.data)
            node = node.next;
        }

        return array;
    }

    get = (index) => {
        let start = 0;
        let node = this.#head;
        while (start++ !== index) {
            node = node.next;
        }

        return node.data;
    }

    *values() {
        let node = this.#head;
        let index = 0;
        while (index++ !== this.#size) {
            yield node.data
            node = node.next;
        }
    }
}

const n1 = new LinkedList();

n1.insertHead('hello');
n1.insertTail('world');
n1.insertHead('linked');
n1.insertTail('list');
n1.insert('BAAM', 2);
n1.delete(2);
n1.modify('WORLD', 2);
console.log(n1.getAll());
console.log(n1.get(2));

const values = n1.values();
for (const value of values) {
    console.log(value);
}
