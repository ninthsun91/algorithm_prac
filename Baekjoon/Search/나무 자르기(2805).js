/**
 * 
 * 나무 자르기
 * 
 * 나무 M미터를 얻기 위한 절단기 높이 H 최대값
 * 나무의 수 N 
 * (1~N~1,000,000) // (1~M~2,000,000,000)
 * 
 * 나무 최댓값 > 이분탐색?
 * 
 */
const input = require('fs').readFileSync('input').toString().trim().split('\n');
// console.log(input);

const [N, M] = input[0].split(' ').map(Number);
    
let max_height = 0;
const heights = input[1].split(' ').map((height) => {
    height = +height;
    if (height > max_height) max_height = height;
    return height;
});

let start = 0;
let end = max_height;
const results = [];

while (start <= end) {
    max_height = ((start + end + 1) / 2) |0;

    let sum = 0;
    for (const height of heights) {
        const gain = height - max_height;
        if (gain > 0) sum += gain;
    }

    // console.log(start, max_height, end, sum)
    if (sum === M) {
        results.push(max_height);
        break;
    } else if (sum < M) {
        end = max_height - 1;
    } else {
        results.push(max_height);
        start = max_height + 1;
    }
}

// console.log(results)
// console.log('max_height: ', Math.max(...results));
console.log(Math.max(...results));

// const rl = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// const input = [];

// rl.on('line', (line) => {
//     input.push(line);
// });

// rl.on('close', () => {
//     const [N, M] = input[0].split(' ').map(Number);
    
//     let max_height = 0;
//     const heights = input[1].split(' ').map((height) => {
//         height = +height;
//         if (height > max_height) max_height = height;
//         return height;
//     });

//     let start = 0;
//     let end = max_height;

//     while (start <= end) {
//         max_height = ((start + end + 1) / 2) |0;

//         let sum = 0;
//         for (const height of heights) {
//             const gain = height - max_height;
//             if (gain > 0) sum += gain;
//         }

//         console.log(start, max_height, end, sum)
//         if (sum === M) {
//             break;
//         } else if (sum < M) {
//             end = max_height - 1;
//         } else {
//             start = max_height + 1;
//         }
//     }

//     console.log('max_height: ', max_height);
// });