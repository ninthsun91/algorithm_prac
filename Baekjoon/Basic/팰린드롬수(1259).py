import sys
input = sys.stdin.readline

result = []
while True:
    num = input().strip()
    if int(num) == 0:
        break
    
    end = len(num) - 1
    mid = end//2
    flag = True
    for i in range(mid+1):
        if num[i] != num[end-i]:
            flag = False
            break
    
    result.append('yes' if flag else 'no')

print('\n'.join(result))