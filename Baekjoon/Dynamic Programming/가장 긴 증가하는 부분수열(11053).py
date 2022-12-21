import sys
input = sys.stdin.readline

N = int(input())
SEQ = map(int, input().split())

DP = { 0: 0 }
for n in SEQ:
    flag = True
    for i, length in enumerate(DP):
        key = DP[length]
        
        if n <= key:
            DP[length] = n
            flag = False
            break
    if flag:
        DP[length+1] = n

print(DP.popitem()[0])