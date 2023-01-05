import sys
input = sys.stdin.readline

stack = [0]
cursor = 0
result = []

N = int(input())
for i in range(N):
    n = int(input())

    if stack[len(stack)-1] == n:
        stack.pop()
        result.append('-')
    elif stack[len(stack)-1] < n:
        repeat_count = n - cursor
        for i in range(repeat_count):
            cursor += 1
            stack.append(cursor)
            result.append('+')

        stack.pop()
        result.append('-')
    else:
        print('NO')
        exit()

print('\n'.join(result))