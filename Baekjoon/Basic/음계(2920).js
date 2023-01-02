/**
 * 
 * asc / dsc 판별
 * 
 */


const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    const seq = line.split(' ').map(Number);

    let result = '';
    if (seq[0] < seq[1]) {
        let prev = seq[1];
        for (let i=2; i<seq.length; i++) {
            if (seq[i] < prev) {
                console.log('mixed');
                process.exit();
            }
            prev = seq[i]
        }
        console.log('ascending');
    } else {
        let prev = seq[1];
        for (let i=2; i<seq.length; i++) {
            if (seq[i] > prev) {
                console.log('mixed');
                process.exit();
            }
            prev = seq[i];
        }
        console.log('descending');
    }

    process.exit();
});