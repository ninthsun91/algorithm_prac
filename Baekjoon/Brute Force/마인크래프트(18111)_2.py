import sys
from collections import Counter
input = sys.stdin.readline

N, M, B = map(int, input().split())

land = []
for n in range(N):
  land += list(map(int, input().split()))
sum_height = sum(land)

land = Counter(land)
min_height = min(land)
max_height = max(land)

time = sys.maxsize
height = 0
for h in range(min_height, max_height + 1):
  if sum_height + B < N * M * h: 
    break

  time_calc = 0
  for i in land:
    if i < h:
      time_calc += (h - i) * land[i]
    if i > h:
      time_calc += 2 * (i - h) * land[i]
    
  if time_calc <= time:
    time = time_calc
    if h > height:
      height = h

print(time, height)