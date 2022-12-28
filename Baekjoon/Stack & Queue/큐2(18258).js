/**
 * 
 */

const input = require('fs').readFileSync('input').toString().split('\n');
const N = +input.shift();
const result = [];

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
        this.length = 0;
    }

    push(data) {
        const node = new Node(data);

        if (!this.length++) {
            this.head = node;
            this.tail = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    pop() {
        if (!this.length) {
            result.push(-1);
            return;
        }

        const pop = this.head;
        this.head = pop.next;
        result.push(pop.data);
        
        if (--this.length === 0) this.tail = null;
    }

    size() {
        result.push(this.length);
    }
    empty() {
        result.push(this.length ? 0 : 1);
    }

    front() {
        result.push(this.head?.data || -1);
    }
    back() {
        result.push(this.tail?.data || -1);
    }
}

const queue = new Queue();

for (const cmd of input) {
    if (!cmd) continue;
    const [key, value] = cmd.trim().split(' ');
    value ? queue[key](value) : queue[key]();
}
console.log(result.join('\n'));


// const input = require('fs').readFileSync('input').toString().split('\n');

// const N = input.shift();
// const queue = [];

// let result = '';
// const Q = (cmd) => {
//     switch (cmd) {
//         case 'pop':
//             const pop = queue.shift() || -1;
//             result += pop + '\n';
//             break;
//         case 'size':
//             const size = queue.length;
//             result += size + '\n';
//             break;
//         case 'empty':
//             const empty = queue.length ? 0 : 1;
//             result += empty + '\n';
//             break;
//         case 'front':
//             const front = queue[0] || -1;
//             result += front + '\n';
//             break;
//         case 'back':
//             const back = queue[queue.length-1] || -1;
//             result += back + '\n';
//             break;
//         default:
//             const value = cmd.split(' ')[1];
//             queue.push(value);
//             break;
//     }
// }

// for (const cmd of input) {
//     Q(cmd.trim());
// }
// result += result + '\n';