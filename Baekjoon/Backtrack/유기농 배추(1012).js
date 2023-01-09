/**
 * 
 * 유기농 배추
 * N*M 밭에 T개의 배추
 * 
 * 배추흰지렁이 => 인접 사방
 * 
 * 최소 지렁이 수?
 * 
 * backtrack: pop => if c.length > 0 => backtrack
 * 
 */


const input = require('fs').readFileSync('input').toString().trim().split('\n');

const T = +input[0];
let index = 0;

const addX = [0, 0, 1, -1];
const addY = [1, -1, 0, 0];

for (let t=0; t<T; t++) {
    const [N, M, K] = input[++index].split(' ').map(Number);

    const land = Array.from({ length: N}, () => Array.from({ length: M }, () => 0));

    for (let k=0; k<K; k++) {
        const [X, Y] = input[++index].split(' ').map(Number);
        land[X][Y] = 1;
    }

    const countWorm = (n, m) => {
        visit.add(`[${n}, ${m}]`);

        for (let i=0; i<4; i++) {
            const x = n + addX[i];
            const y = m + addY[i];

            if (x < 0 || y < 0 || x >= N || y >= M) continue;

            if (!land[x][y] || visit.has(`[${x}, ${y}]`)) continue;

            countWorm(x, y);
        }
    }

    let count = 0;
    const visit = new Set();
    for (let n=0; n<N; n++) {
        for (let m=0; m<M; m++) {
            if (land[n][m] === 1 && !visit.has(`[${n}, ${m}]`)) {
                countWorm(n, m);
                count++;
            }
        }
    }

    console.log(count);
}