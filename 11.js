/**
 * 
 * 1~N 원으로 앉아있다
 * K번째 제거
 * 모두 제거될때까지 반복
 * 
 */


// const rl = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

const input = require('fs').readFileSync('input').toString();
// const input = require('fs').readFileSync('dev/stdin').toString();

class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(N) {
        const head = new Node(1);
        this.head = head;
        this.tail = head;
        this.size = 1;

        for (let i=2; i<=N; i++) {
            this.push(i);
        }
        this.cursor = this.tail;
    }

    push(n) {
        const node = new Node(n, this.head);

        this.tail.next = node;
        this.tail = node;
        this.size++;
    }

    pop(K) {
        let prev;
        for (let k=K; k>0; k--) {
            prev = this.cursor;
            this.cursor = prev.next;
        }

        const pop = this.cursor.data;
        prev.next = this.cursor.next;
        this.cursor = prev;

        return pop;
    }
}

const [N, K] = input.split(' ').map(Number);

const seq = new LinkedList(N);
const josephus = [];

for (let n=0; n<N; n++) {
    const num = seq.pop(K);
    josephus.push(num);
}
const result = `<${josephus.join(', ')}>`;
console.log(result);

// rl.on('line', (line) => {
//     const [N, K] = line.split(' ').map(Number);

//     const seq = new LinkedList(N);
//     const josephus = [];

//     for (let n=0; n<N; n++) {
//         const num = seq.pop(K);
//         josephus.push(num);
//     }
//     const result = `<${josephus.join(', ')}>`;
//     console.log(result);

//     rl.close();
// });