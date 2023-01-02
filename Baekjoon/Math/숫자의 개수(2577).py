import sys
input = sys.stdin.readline

A = int(input())
B = int(input())
C = int(input())

multiple = A * B * C

result = [0]*10
while multiple:
    digit = multiple % 10
    multiple = multiple // 10

    result[digit] += 1

print('\n'.join(map(str, result)))
