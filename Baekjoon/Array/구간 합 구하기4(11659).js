/**
 * N개의 수
 * 
 * i번째부터 j번째까지의 합
 */


// const rl = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// const input = [];

// rl.on('line', (line) => {
//     input.push(line);
// });

// rl.on('close', () => {
//     const [N, M] = input[0].split(' ');
//     const SEQ = input[1].split(' ').map(Number);

//     let print = '';
//     for (let m=0; m<+M; m++) {
//         const [i, j] = input[2+m].split(' ').map(Number);

//         let sum = 0;
//         for (let n=i-1; n<j; n++) {
//             sum += SEQ[n];
//         }
//         print += sum + '\n';
//     }

//     console.log(print);
// });

/**
 * 
 * 시간 초과
 * readline이 아닌 fs로 입력을 받아도 시간초과가 난다.
 * 
 * 반복횟수를 줄일 방법은 없을까?
 * 
 * 누적합이라는 알고리즘을 사용하여야한다.
 * 배열의 각 원소까지의 합을 구한 배열을 먼저 구하자.
 * 
 */


// let fs = require("fs")
// let input = fs.readFileSync("dev/stdin").toString().split("\n")

// const [N, M] = input[0].split(' ');
// const SEQ = input[1].split(' ').map(Number);

// let result = '';
// for (let m=0; m<+M; m++) {
//     const [i, j] = input[2+m].split(' ').map(Number);

//     let sum = 0;
//     for (let n=i-1; n<j; n++) {
//         sum += SEQ[n];
//     }
//     result += sum + '\n';
// }

// console.log(result)


const input = require('fs').readFileSync("./input").toString().split("\n")
// let input = fs.readFileSync("dev/stdin").toString().split("\n")

const [N, M] = input[0].split(' ');
const SEQ = input[1].split(' ').map(Number);

const SUM = [0];
for (let n=0; n<N; n++) {
    SUM.push(SUM[n]+SEQ[n]);
}

let result = '';
for (let m=0; m<M; m++) {
    const [i, j] = input[2+m].split(' ').map(Number);

    result += SUM[j]-SUM[i-1] + '\n';
}

console.log(result)