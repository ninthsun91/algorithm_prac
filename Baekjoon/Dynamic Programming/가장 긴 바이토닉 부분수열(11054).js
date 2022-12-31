/**
 * 바이토닉 수열
 * S1 < S2 < S3 ... < Sk > Sk+1 > Sn
 * Sk 기준으로 증감하는 수열
 * 
 * 수열 A
 * 부분수열 중 가장 긴 바이토닉 수열
 * 
 * 수열 각 원소를 기준으로 한 바이토닉 수열 탐색
 * 인덱스 k 기준,
 * i<k => Ai < Ak
 * i>k => Ai > Ak
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
    const N = +input[0];
    const SEQ = input[1].split(' ').map(Number);

    let LIS = 0;

    for (let k=0; k<N; k++) {
        const center = SEQ[k];

        const map = new Map([[0,0]]);
        let centerPosition;
        for (let n=0; n<N; n++) {
            if (n !== k && SEQ[n] >= center) continue;

            if (n < k) {
                for (let m=1; m<=map.size; m++) {
                    if (SEQ[n] > map.get(m)) continue;

                    map.set(m, SEQ[n]);
                    break;
                }
            } else if (n > k) {
                for (let m=centerPosition+1; m<=map.size; m++) {
                    if (SEQ[n] < map.get(m)) continue;

                    map.set(m, SEQ[n]);
                    break;
                }
            } else {
                centerPosition = map.size;
                map.set(centerPosition, SEQ[n]);
            }
        }

        LIS = LIS < map.size-1 ? map.size-1 : LIS;
    }
    console.log(LIS);
});