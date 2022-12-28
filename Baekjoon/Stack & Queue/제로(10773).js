/**
 * 0을 입력 받으면 마지막 입력 취소
 */

/** */
// const input = require('fs').readFileSync('input').toString().split('\n');

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

class Stack {
    stack = [];
    stackSum = 0;

    push(val) {
        this.stack.push(+val);
        this.stackSum += +val;
    }

    pop() {
        const val = this.stack.pop();
        this.stackSum -= val;
    }

    sum() {
        console.log(this.stackSum);
    }
}

const stack = new Stack();

rl.on('line', (line) => {
    input.push(line);
});

rl.on('close', () => {
    const K = input[0];
    for (let k=1; k<=K; k++) {
        const val = input[k].trim();
        if (val === '') continue;
        if (val != 0) stack.push(val);
        else stack.pop();
    }
    
    stack.sum();
});
