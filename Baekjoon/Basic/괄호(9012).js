/**
 * Parenthesis String
 * 
 * VPS: (), (()), (())()
 * 괄호가 정상적으로 닫혀있으면 VPS
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
    const N = +input[0];
    const result = [];
    for (let n=1; n<N+1; n++) {
        let PS = input[n];
        while (PS.includes('()')) {
            PS = PS.replace(/\(\)/g, '');
        }
        result.push(PS.length ? 'NO' : 'YES');
    }
    console.log(result.join('\n'));
});