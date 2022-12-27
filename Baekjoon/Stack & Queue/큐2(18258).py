import sys
from collections import deque
input = sys.stdin.readline

queue = deque()

N = int(input())
for n in range(N):
    cmd = list(input().split())

    if cmd[0] == 'push':
        queue.append(cmd[1])
    elif cmd[0] == 'pop':
        pop = queue.popleft() if len(queue) > 0 else -1
        print(pop)
    elif cmd[0] == 'size':
        print(len(queue))
    elif cmd[0] == 'empty':
        empty = 1 if len(queue) == 0 else 0
        print(empty)
    elif cmd[0] == 'front':
        front = queue[0] if len(queue) > 0 else -1
        print(front)
    elif cmd[0] == 'back':
        back = queue[len(queue) - 1] if len(queue) > 0 else -1
        print(back)