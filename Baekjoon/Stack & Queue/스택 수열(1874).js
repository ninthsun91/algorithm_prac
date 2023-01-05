/**
 * 
 * 스택수열
 * 
 * 1...n 스택
 * 반드시 오름차순으로 push
 * 
 * n 중복 X
 * 
 * 가능 불가능 기준?
 * 
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
    const stack = [0];
    let stackCursor = 0;

    const result = [];
    for (let i=1; i<N+1; i++) {
        const n = +input[i];
        // console.log(`=========${stackCursor}, ${n}==========`);

        if (stack[stack.length - 1] === n) {
            stack.pop();
            result.push('-');
            // console.log('pop', stack)
        } else if (stack[stack.length - 1] < n) {
            const repeat = n - stackCursor;
            for (let j=0; j<repeat; j++) {
                stack.push(++stackCursor);
                result.push('+');
                // console.log('push', stack)
            }

            stack.pop();
            result.push('-');
            // console.log('pop', stack)
        } else {
            console.log('NO');
            return;
        }
    }
    console.log(result.join('\n'));
});