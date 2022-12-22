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
    const N = Number(input.shift());
    const SEQ = input[0].split(' ').map(Number);

    let LIS = 0;

    // k 선택
    for (let k=0; k<N; k++) {
        console.log(`k: ${k}, Sk: ${SEQ[k]}`);
        const DP = new Map([[0,0]]);
        
        // LIS를 확인할 인덱스
        for (let i=0; i<N; i++) {
            console.log(`Sk: ${SEQ[k]}, Si: ${SEQ[i]}`);
            if (i <= k) {
                if (SEQ[i] > SEQ[k]) continue;
            } else {
                if (SEQ[i] > SEQ[k]) continue;
            }
            let flag = true;

            // 맵핑된 길이=>밸류에서 현재 원소의 자리 찾기
            const entries = DP.entries();
            const map = [...entries];
            let start = 0;
            if (i>k) {
                for (const m of map) {
                    const [length, key] = m;
                    console.log(`i>k......${key}, ${SEQ[k]}`)
                    if (key === SEQ[k]) {
                        start = length;
                        break;
                    }
                }
            }

            console.log(k, i, start);

            for (let j=start; j<map.length; j++) {
                var [length, key] = map[j];
                if (key === SEQ[i]) flag = true;

                if (i <= k) {
                    console.log('i <= k', key);
                    if (SEQ[i] <= key) {
                        DP.set(length, SEQ[i]);
                        console.log(DP, `SEQ[${k}]: ${SEQ[k]}, SEQ[${i}]: ${SEQ[i]}`);
                        flag = false;
                        break;
                    }
                } else {
                    console.log('i > k', key);
                    if (SEQ[i] >= key) {
                        DP.set(length, SEQ[i]);
                        console.log(DP, `SEQ[${k}]: ${SEQ[k]}, SEQ[${i}]: ${SEQ[i]}`);
                        flag = false;
                        break;
                    }
                }
            }

            if (flag && key !== SEQ[i]) {
                console.log('add length', key, SEQ[i])
                DP.set(length+1, SEQ[i]);
                console.log(DP, `SEQ[${k}]: ${SEQ[k]}, SEQ[${i}]: ${SEQ[i]}`);
            }
        }

        if (DP.size-1 > LIS) LIS = DP.size-1;
        console.log(DP);
        console.log('========================')
    }
    console.log(LIS)
});

/**
 * 
 * 시간초과
 * 
 */