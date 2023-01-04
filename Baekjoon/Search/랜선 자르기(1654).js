/**
 * 
 * 가진 랜선의 수 K, 필요한 랜선의 수 N
 * 1~K~10,000 , 1~N~1,000,000 (K<=N)
 * 각 K개의 랜선 길이 (32bit int)
 * 
 * K들 중 최솟값 => 사용 가능 최대 길이 L
 * 
 * L > n개수
 * 만족하지 않으면 L/2 > n 개수
 * 이분탐색 ...
 * 
 */

const input = require('fs').readFileSync('input').toString().split('\n');

const [K, N] = input[0].split(' ').map(Number);

const cables = [];
let max_length = Number.MIN_SAFE_INTEGER;
for (let k=1; k<K+1; k++) {
    const cable = +input[k];
    cables.push(cable);
    if (cable > max_length) max_length = cable;
}

let max = max_length;
let min = 0;

while (min <= max) {
    let n = 0;
    max_length = Math.floor( (min + max + 1) / 2);
    for (const cable of cables) {
        n += (cable / max_length) |0;
    }

    if (n<N) max = max_length - 1;
    else min = max_length + 1;

}
max_length = Math.floor( (min + max) / 2);

console.log(max_length);