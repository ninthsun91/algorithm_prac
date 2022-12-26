/**
 * 
 */

// class Stack {
//     #stack = [];

//     push(X) {
//         this.#stack.push(+X);
//     }

//     pop() {
//         const stackPop = this.#stack.pop() || -1;
//         console.log(stackPop);
//         return stackPop;
//     }

//     size() {
//         const stackSize = this.#stack.length;
//         console.log(stackSize);
//     }

//     empty() {
//         const isEmpty = this.#stack.length ? 0 : 1;
//         console.log(isEmpty);
//     }

//     top() {
//         const stackTop = this.#stack[this.#stack.length-1] || -1;
//         console.log(stackTop);
//     }
// }

// const stack = new Stack();

// const N = +input.shift();
// for (const cmd of input) {
//     const [key, value] = cmd.trim().split(' ');
    
//     if (key === 'push') {
//         stack[key](value);
//         continue;
//     }
//     stack[key]();
// }


const input = require('fs').readFileSync('./input').toString().split('\n');

const stack = [];
const N = input.shift();

let result = '';
for (const cmd of input) {
    const [key, value] = cmd.trim().split(' ');
    switch (key) {
        case 'pop':
            const stackPop = stack.pop() || -1;
            result += stackPop + '\n';
            break;
        case 'size':
            const stackSize = stack.length;
            result += stackSize + '\n';
            break;
        case 'empty':
            const isEmpty = stack.length ? 0 : 1;
            result += isEmpty + '\n';
            break;
        case 'top':
            const stackTop = stack[stack.length-1] || -1;
            result += stackTop + '\n';
            break;
        default:
            stack.push(value);
    }
}

console.log(result);