
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

    let [min, max, sum] = [256, 0, 0];
    const land = new Map();
    for (let n=0; n<N; n++) {
        input[n+1].split(' ').forEach((h) => {
            const height = +h;

            if (height < min) min = height;
            if (height > max) max = height;
            sum += height;

            if (land.has(height)) land.set(height, land.get(height) + 1);
            else land.set(height, 1);
        });
    }

    const answer = {
        time: Number.MAX_SAFE_INTEGER,
        height: 0
    }
    for (let h=min; h<max+1; h++) {
        if (sum + B < h * N * M) break;

        let time = 0;
        const entries = land.entries();
        for (const entry of entries) {
            const [height, count] = entry;

            if (height < h) time += (h - height) * count;
            if (height > h) time += 2 * (height - h) * count;
        }

        if (time <= answer.time) {
            answer.time = time;
            if (h > answer.height) answer.height = h;
        }
    }

    console.log(answer);
});