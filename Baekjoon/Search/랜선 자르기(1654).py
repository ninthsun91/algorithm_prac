import sys
input = sys.stdin.readline

K, N = map(int, input().split())

max_length = 0
cables = []
for i in range(1, K+1):
    cable = int(input())
    cables.append(cable)
    if cable > max_length:
        max_length = cable

start = 0
end = max_length
while start <= end:
    max_length = (start + end + 1) // 2
    n = sum([ cable // max_length for cable in cables])

    if n<N:
        end = max_length - 1
    else:
        start = max_length + 1

print((start + end) // 2)