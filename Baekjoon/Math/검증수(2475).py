import sys
input = sys.stdin.readline

serial = list(map(int, input().split()))

sum = 0
for num in serial:
    sum += num ** 2

print(sum % 10)