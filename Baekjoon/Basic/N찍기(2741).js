/**
 * 
 */

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    const N = +line;

    let result = ''
    for (let i=1; i<=N; i++) result += `${i}\n`;

    console.log(result);
});
