import sys
input = sys.stdin.readline

N = int(input())

result = []
for i in range(1, N+1):
    result.append(i)

print('\n'.join(map(str, result)))