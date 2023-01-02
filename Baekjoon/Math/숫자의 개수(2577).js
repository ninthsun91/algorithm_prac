/**
 * 
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
    let multiple = input.reduce((a, b) => a * b, 1);
    
    const result = Array.from({ length: 10}, () => 0);
    while (multiple) {
        const digit = multiple % 10;
        multiple = (multiple / 10) |0;

        result[digit]++;
    }

    console.log(result.join('\n'));
});