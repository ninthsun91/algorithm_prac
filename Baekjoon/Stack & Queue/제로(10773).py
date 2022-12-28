import sys
input = sys.stdin.readline

K = int(input())

stack = []
sum = 0
for k in range(K):
    val = int(input())

    if val == 0:
        pop = stack.pop()
        sum -= pop
    else:
        stack.append(val)
        sum += val

print(sum)
