/**
 * 
 * LIS DP풀이
 * 
 * SEQ[i] >> MAX
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
    const N = Number(input.shift());
    const SEQ = input.shift().split(' ').map(Number);

    const map = new Map([[0, 0]]);
    for (const n of SEQ) {
        const entries = map.entries();

        let flag = true;
        for (const entry of entries) {
            var [length, key] = entry;

            if (n <= key) {
                map.set(length, n);
                flag = false;
                break;
            }
        }
        if (flag) map.set(length+1, n);
    }
    console.log(map.size-1);
});

