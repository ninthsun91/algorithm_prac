import sys
from collections import deque
input = sys.stdin.readline

N = int(input())
queue = deque(range(1,N+1))

while (len(queue) > 1):
    queue.popleft()
    pop = queue.popleft()
    queue.append(pop)

print(queue[0])