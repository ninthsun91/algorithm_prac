import sys
input = sys.stdin.readline

N, K = map(int, input().split())

seq = [n for n in range(1, N+1)]
josephus = []
while(len(seq)):
    for k in range(K-1):
        seq.append(seq.pop(0))
    josephus.append(str(seq.pop(0)))

print(f'<{", ".join(josephus)}>')