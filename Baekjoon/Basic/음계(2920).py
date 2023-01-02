import sys
input = sys.stdin.readline

seq = list(map(int, input().split()))

def scanAsc(seq):
    prev = seq[0]
    for i in range(1, len(seq)):
        if prev > seq[i]:
            return 'mixed'
        prev = seq[i]
    return 'ascending'

def scanDsc(seq):
    prev = seq[0]
    for i in range(1, len(seq)):
        if prev < seq[i]:
            return 'mixed'
        prev = seq[i]
    return 'descending'

if (seq[0] < seq[1]):
    print(scanAsc(seq))
else:
    print(scanDsc(seq))