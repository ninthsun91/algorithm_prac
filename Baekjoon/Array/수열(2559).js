/**
 * 
 * 매일 측정한 기온
 * 연속적인 합이 가장 큰 값
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
    const [N, K] = input[0].split(' ').map(Number);
    const temps = input[1].split(' ').map(Number);

    const sums = [0];
    for (let n=0; n<N; n++) {
        sums[n+1] = sums[n] + temps[n];
    }

    let MAX = Number.MIN_SAFE_INTEGER;
    for (let k=0; k<sums.length-K; k++) {
        const sum = sums[k+K] - sums[k];
        MAX = sum > MAX ? sum : MAX;
    }

    console.log(MAX);
});