import sys
input = sys.stdin.readline

N, K = map(int, input().split())
temps = list(map(int, input().split()))

sums = [0 for _ in range(N+1)]
for n in range(N):
    sums[n+1] = sums[n] + temps[n]

MAX = -sys.maxsize - 1
for k in range(len(sums)-K):
    sum = sums[k+K] - sums[k]
    MAX = sum if sum > MAX else MAX
print(MAX)