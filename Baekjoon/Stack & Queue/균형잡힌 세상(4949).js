/**
 * 
 * 괄호의 균형이 맞는지 확인
 * () []
 * 
 * (,[ => ++
 * ),] => --
 * 
 */


const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
    if (line === '.') rl.close();
    input.push(line);
});

rl.on('close', () => {
    for (const sentence of input) {
        const brackets = [];

        for (const character of sentence) {
            switch (character) {
                case '(':
                    brackets.push('(');
                    break;
                case ')':
                    if (brackets[brackets.length - 1 ] === '(') brackets.pop(')');
                    else brackets.push('!!');
                    break;
                case '[':
                    brackets.push('[');
                    break;
                case ']':
                    if (brackets[brackets.length - 1 ] === '[') brackets.pop(']');
                    else brackets.push('!!');
                    break;
                default:
                    break;
            }
        }

        console.log(brackets.length ? 'no' : 'yes');
    }
});