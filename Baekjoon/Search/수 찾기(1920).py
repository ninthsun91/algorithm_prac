import sys
input = sys.stdin.readline

N = int(input())
set = set(map(int, input().split()))

M = int(input())
m_list = map(int, input().split())

result = []
for m in m_list:
    result.append('1' if m in set else '0')

print('\n'.join(result))