/**
 * 
 * input string => alphabet lower case only
 * a=>1, b=>2, ..., z=>26
 * 
 * H = SUM / M
 * 해시충돌!
 * 
 * H = SUM(a*(r^i)) / M
 * 이때, r과 M은 서로소
 * 
 * r = 31
 * M = 1234567891
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
    const r = 31;
    const M = 1234567891;
    const L = +input[0];
    
    let sum = 0;
    for (let i=0; i<L; i++) {
        const code = input[1][i].charCodeAt() - 96;
        sum = (sum + (code * pow(r, i, M)) % M) % M;
    }

    console.log(sum);
});

const pow = (r, i, M) => {
    let result = 1;
    for (let n=0; n<i; n++) {
        result = (result * r) % M
    }

    return result;
}