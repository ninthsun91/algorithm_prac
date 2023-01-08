import sys
input = sys.stdin.readline

T = int(input())
count = [[1, 0], [0, 1]]

for t in range(T):
  N = int(input())
  count_history = len(count[0])

  if N < count_history:
    print(count[0][N], count[1][N])
    continue

  for n in range(count_history, N+1):
    count[0].append(count[0][n-1] + count[0][n-2])
    count[1].append(count[1][n-1] + count[1][n-2])
  print(count[0][N], count[1][N])