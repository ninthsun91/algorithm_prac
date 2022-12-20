/**
 * 
 * wine tasting
 * 1. must drink and return cup
 * 2. cannot drink 3 wines consecutively
 * 
 * 1~n~10000
 * ... 0~1000
 * 
 * how to drink max amount
 * 
 * SUM[n] = SUM[n-2] + WINE[n]
 * SUM[n] = SUM[n-3] + WINE[n] + WINE[n-1]
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
    const N = +input.shift();
    const wines = input.map(Number);

    if (N === 1) return console.log(wines[0]);
    if (N === 2) return console.log(wines[0]+wines[1]);
    
    const SUM = [ wines[0], wines[0]+wines[1] ];
    SUM.push(Math.max( wines[2]+wines[1], wines[2]+wines[0], SUM[1] ));

    let MAX = Math.max(...SUM);
    for (let i=3; i<N; i++) {
        const max1 = wines[i] + wines[i-1] + SUM[i-3];
        const max2 = wines[i] + SUM[i-2];

        const max = Math.max(max1, max2, SUM[i-1])
        SUM.push(max);

        if (MAX < max) MAX = max;
    }
    console.log(MAX);
});




/**

반례
10
0
0
10
0
5
10
0
0
1
10

출력 SUM = 
0, 0, 10, 10, 15,
  25, 20, 25, 26, 35
실제 SUM = 
0, 0, 10, 10, 15,
  25, 25, 25, 26, 36

  n번째 와인에서 n번째 와인을 마시지 않는 경우가 고려되지 않음
  따라서,

  전: const max = max1 >= max2 ? max1 : max2;
  후: const max = Math.max(max1, max2, SUM[i-1]);


  근데 그래도 오답

  새로운 반례

6
1
1
0
0
1
1

출력 SUM = [ 1, 2, 1, 2, 3, 3 ]
실제 SUM = [ 1, 2, 2, 2, 3, 4 ]


답안 수정 이후 N = 3일 때에 대해서는 수정을 하지 않음
전: SUM.push(Math.max( wines[2]+wines[1], wines[2]+wines[0] ));
후: SUM.push(Math.max( wines[2]+wines[1], wines[2]+wines[0], SUM[1] ));

 */