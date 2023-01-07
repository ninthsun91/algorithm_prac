import sys
input = sys.stdin.readline

N, M, B = map(int, input().split())

min_height = sys.maxsize
land = []
for n in range(N):
  land.append(list(map(int, input().split())))
  
  m = min(land[n])
  if m < min_height:
    min_height = m

height = 0
time = sys.maxsize
while time != -1:
  inventory = B
  time_calc = 0
  for n in land:
    for m in n:
      if m < min_height:
        inventory -= (min_height - m)
        time_calc += (min_height - m)
      if m > min_height:
        inventory += (m - min_height)
        time_calc += 2 * (m - min_height)
  
  if inventory < 0:
    break

  if time_calc <= time:
    time = time_calc
    if min_height > height:
      height = min_height

  min_height += 1

print(time, height)