import sys
input = sys.stdin.readline

N = int(input())

result = []
for i in range(N):
    result.append(N-i)

print('\n'.join(map(str, result)))