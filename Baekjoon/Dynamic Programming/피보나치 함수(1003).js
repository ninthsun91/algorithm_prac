/**
 * 
 * 피보나치 함수
 * 시간제한!! 0.25초
 * 
 * fib(n) = fib(n-1) + fib(n-2)
 * 
 * 0과 1 출력 횟수도 피보나치 수열에 따라 증가
 * 0 => 1, 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
 * 1 => 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
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
    const T = +input[0];

    const count = [[1, 0], [0, 1]];
    
    for (let i=1; i<T+1; i++) {
        const countHistory = count[0].length;
        const n = +input[i];
        if (n < countHistory) {
            console.log(count[0][n], count[1][n]);
            continue;
        }
        for (let j=countHistory; j<n+1; j++) {
            count[0].push(count[0][j-1] + count[0][j-2]);
            count[1].push(count[1][j-1] + count[1][j-2]);
        }
        console.log(count[0][n], count[1][n]);
    }
});