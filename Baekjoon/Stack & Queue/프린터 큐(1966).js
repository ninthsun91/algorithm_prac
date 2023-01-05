/**
 * 
 * 프린터큐
 * 
 * 큐 with 중요도
 * 현재 차례의 작업보다 높은 중요도가 큐 안에 있으면 맨 뒤로
 * 
 */


const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}

class Printer {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.maxPriority = 0;
        this.priority = {}
    }

    push(data) {
        const node = new Node(data);

        if (this.size++ === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.addPriority(data.priority);
    }

    pop() {
        const pop = this.head;
        this.head = pop.next;

        if(--this.size === 0) this.tail = null;

        this.removePriority(pop.data.priority);

        return pop.data;
    }

    addPriority(priority) {
        if (this.priority[priority]) this.priority[priority]++;
        else this.priority[priority] = 1;

        if (priority > this.maxPriority) {
            this.maxPriority = priority;
        }
    }

    removePriority(priority) {
        if (--this.priority[priority] === 0) {
            delete this.priority[priority];
            
            if (priority === this.maxPriority) {
                const keys = Object.keys(this.priority);
                this.maxPriority = keys[keys.length-1] || 0;
            }
        }
    }
}

const input = [];

rl.on('line', (line) => {
    input.push(line);
});

rl.on('close', () => {
    const testCase = +input[0];
    const result = [];

    for (let t=1; t<2*testCase+1; t+=2) {
        const [N, M] = input[t].split(' ').map(Number);
        // console.log('testCase: ', t, ' , ', N, M);
        const printer = new Printer();
        let count = 0;

        input[t+1].split(' ').map((priority, index) => {
            const doc = { priority, index };
            printer.push(doc);
        });

        // console.log('printer queue pushed');
        // console.log(printer);

        while (printer.size !== 0) {
            const doc = printer.pop();
            // console.log('pop?: ', doc);
            // console.log(printer);

            if (doc.priority < printer.maxPriority) {
                printer.push(doc);
                continue;
            }

            count++;
            if (doc.index === M) {
                result.push(count);
                break;
            }
        }

        // console.log('=========================')
        // console.log(result)
    }

    console.log(result.join('\n'));
});