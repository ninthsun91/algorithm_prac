import sys
input = sys.stdin.readline

N, M = map(int, input().split())
SEQ = list(map(int, input().split()))

SUM = [0 for _ in range(N+1)]
for n in range(N):
    SUM[n+1] = SUM[n] + SEQ[n]

result = ''
for m in range(M):
    i, j = map(int, input().split())
    result += f'{SUM[j] - SUM[i-1]}\n'

print(result)