/**
 * 
 */


const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    const serial = line.split(' ').map(Number);

    const sum = serial.reduce((a, b) => a + b**2, 0);
    console.log(sum % 10);

    rl.close();
});
