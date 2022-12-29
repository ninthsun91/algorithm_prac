/**
 * 
 */


const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.qSize = 0;
    }

    push(data) {
        const node = new Node(data);
        if (this.qSize++ === 0) {
            this.head = node;
            this.tail = node;
            return
        }

        this.tail.next = node;
        this.tail = node;
    }
    pop() {
        if (this.qSize === 0) return;

        const popNode = this.head;
        this.head = popNode.next;

        if (--this.qSize === 0) {
            this.tail = null;
        }

        return popNode.data;
    }
}


rl.on('line', (line) => {
    input.push(line);
});

rl.on('close', () => {
    const N = +input[0];
    const queue = new Queue();

    for (let n=0; n<N; n++) {
        queue.push(n+1);
    }

    while (queue.qSize > 1) {
        queue.pop();
        const pop = queue.pop();
        queue.push(pop);
    }

    console.log(queue.head.data);
});