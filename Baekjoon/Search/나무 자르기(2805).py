import sys
input = sys.stdin.readline

N, M = map(int, input().split())

end = 0
heights = []
for height in map(int, input().split()):
  heights.append(height)
  if height > end:
    end = height

start = 0
max_height = 0
while start <= end:
  mid = (start + end + 1) // 2

  sum = 0
  for height in heights:
    cut = height - mid
    sum += cut if cut > 0 else 0

  if sum == M:
    if mid > max_height:
      max_height = mid
    break
  elif sum < M:
    end = mid - 1
  elif sum > M:
    if mid > max_height:
      max_height = mid
    start = mid + 1

print(max_height)