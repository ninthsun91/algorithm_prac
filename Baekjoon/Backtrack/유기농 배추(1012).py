import sys
input = sys.stdin.readline

T = int(input())
visit = set()
add = {
  'x': [0, 0, 1, -1],
  'y': [1, -1, 0 ,0]
}

def count_worms(m, n, land):
  visit.add(f'{m},{n}')

  for i in range(4):
    x = m + add['x'][i]
    y = n + add['y'][i]

    if x < 0 or y < 0 or x >= M or y >= N:
      continue

    if land[y][x] == 0 or f'{x},{y}' in visit:
      continue

    count_worms(x, y, land)

for t in range(T):
  M, N, K = map(int, input().split())

  land = [[0 for _ in range(M)] for _ in range(N)]
  for k in range(K):
    X, Y = map(int, input().split())
    land[Y][X] = 1

  count = 0
  for n in range(N):
    for m in range(M):
      if land[n][m] == 1 and f'{m},{n}' not in visit:
        count_worms(m, n, land)
        count += 1

  print(count)