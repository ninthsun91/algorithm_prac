from collections import deque
import sys
input = sys.stdin.readline

result = []

test_case = int(input())
for t in range(test_case):
    N, M = map(int, input().split())
    docs = map(int, input().split())

    printer = deque()
    priority = {}
    top_priority = 0

    for i, p in enumerate(docs):
        doc = [i, p]
        printer.append(doc)

        if p in priority:
            priority[p] += 1
        else:
            priority[p] = 1
        if p > top_priority:
            top_priority = p

    count = 0
    while True:
        doc = printer.popleft()

        # print(f'pop: {doc}')

        if doc[1] < top_priority:
            printer.append(doc)
            # print(f'push back: {doc[1]} < {top_priority}')
            continue

        count += 1
        print(f'print: {count}')
        if doc[0] == M:
            result.append(str(count))
            # print(f'the end: {doc[0]} = {M}')
            break

        priority[doc[1]] -= 1
        if priority[doc[1]] == 0:
            priority.pop(doc[1])

            keys = list(priority.keys())
            top_priority = max(keys)
            # print(f'top priority changed: {top_priority}, {priority}')

print('\n'.join(result))