/**
 * N개의 정수 (1~N~100_000)
 * int = 32bit
 * 
 * M개의 정수
 * 
 * if M_INT in N_INT
 */


const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
    input.push(line);
});

rl.on('close', () => {
    const set = new Set(input[1].split(' ').map(Number));
    
    const result = [];
    for (const num of input[3].split(' ').map(Number)) {
        result.push(set.has(num) ? 1 : 0);
    }

    console.log(result.join('\n'));
});