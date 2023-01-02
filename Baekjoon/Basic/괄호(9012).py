import sys
input = sys.stdin.readline

result = []
N = int(input())
for n in range(N):
    PS = input().strip()

    while PS.find('()') != -1:
        PS = PS.replace('()', '')
    
    result.append('NO' if len(PS) else 'YES')

print('\n'.join(result))
