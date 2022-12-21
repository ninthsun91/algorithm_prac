/**
 * 
 * seq A = {}
 * 
 * 앞에를 하나씩 잘라가면서?
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
    const SEQ = input.shift().split(' ');

    let MAX = 0;
    for (let i=0; i<N; i++) {
        if (N-i < MAX) break;

        const LIS = [];
        LIS.push(+SEQ[i]);
        for (let j=i+1; j<N; j++) {
            if (LIS[LIS.length-1] < +SEQ[j]) {
                LIS.push(+SEQ[j]);
            } else if (LIS[LIS.length-2] < +SEQ[j]) {
                LIS[LIS.length-1] = +SEQ[j];
            }
        }

        const lis = LIS.length;
        if (lis > MAX) MAX = lis;
    }

    console.log(MAX);
});


/**
 * 
 * 오답
 * 반례: 1 4 2 3
 * 
 * 1<4 이기 때문에 LIS가 1,4를 담고 시작해서 1,2,3이 나올 수가 없음
 * 
 * LIS 마지막 원소보다 작더라도,
 * 두번째 마지막 원소보다 크다면?
 * 같은 길이에서 장기적으로 최적의 LIS
 * 1 4 2
 * 1 4 // 1 2
 * 
 *  전: if (LIS[LIS.length-1] < +SEQ[j]) {
            LIS.push(+SEQ[j]);
        }
    후: if (LIS[LIS.length-1] < +SEQ[j]) {
            LIS.push(+SEQ[j]);
        } else if (LIS[LIS.length-2] < +SEQ[j]) {
            LIS[LIS.length-1] = +SEQ[j];
        }
 */