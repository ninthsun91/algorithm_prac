/**
 * 
 */


const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
    if (line == 0) return rl.close();
    input.push(line);
});

rl.on('close', () => {
    const result = [];
    for (const num of input) {
        const end = num.length - 1;
        const mid = (end/2)|0
        let flag = true;

        for (let i=0; i<=mid; i++) {
            if (num[i] !== num[end-i]) {
                flag = false;
                break;
            }
        }

        result.push(flag ? 'yes' : 'no')
    }
    console.log(result.join('\n'));
});