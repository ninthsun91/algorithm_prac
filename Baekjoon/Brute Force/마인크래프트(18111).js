/**
 * 
 * 세로 N, 가로 M (1~500)
 * 왼쪽위의 좌표 (0, 0)
 * 
 * 땅고르기
 *  1. (i ,j) 가장 위 블록을 제거하여 인벤토리로 (2초)
 *  2. 인벤토리에서 블록을 꺼내 (i, j)에 쌓기 (1초)
 * 
 * 땅고르기 최소시간과 그때의 땅 높이
 * 
 * 인벤토리 B개 블록
 * 높이는 0~256 이하
 * 
 * 
 * 최소 높이 ~ 최대 높이 >> brute forcing?
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
    const [N, M, B] = input[0].split(' ').map(Number);

    let [min, max] = [256, 0];
    const land = [];
    for (let n=0; n<N; n++) {
        land.push(input[n+1].split(' ').map((height) => {
            if (height < min) min = +height;
            if (height > max) max = +height;
            return +height;
        }));
    }

    let inventory = B;
    const answer = {
        time: Number.MAX_SAFE_INTEGER,
        height: 0
    }
    for (let h=min; h<=max; h++) {
        const time = flattener(land, inventory, h);
        console.log(`height: ${h}, time: ${time}`)

        if (time < 0) break;

        if (time <= answer.time) {
            answer.time = time;
            if (h > answer.height) answer.height = h;
        }
    }

    console.log(answer.time, answer.height);
});

const flattener = (land, inventory, height) => {
    let time = 0;
    for (const n of land) {
        for (const m of n) {
            if (m < height) {
                inventory -= (height - m);
                time += (height - m);
            }
            if (m > height) {
                inventory += (m - height);
                time += 2 * (m - height);
            }
        }
    }
    return inventory < 0 ? -1 : time;
}