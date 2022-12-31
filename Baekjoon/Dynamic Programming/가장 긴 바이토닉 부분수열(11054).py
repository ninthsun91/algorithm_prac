import sys
input = sys.stdin.readline

N = int(input())
SEQ = list(map(int, input().split()))
LIS = 0

for k in range(N):
    record = {
        0: 0
    }

    for n in range(N):
        if n != k and SEQ[k] <= SEQ[n]:
            continue

        if n < k:
            for m in range(1, len(record)+1):
                if m >= len(record) or SEQ[n] <= record[m]:
                    record[m] = SEQ[n]
                    break
        elif n > k:
            for m in range(k_index+1, len(record)+1):
                if m >= len(record) or SEQ[n] >= record[m]:
                    record[m] = SEQ[n]
                    break
        else:
            k_index = len(record)
            record[k_index] = SEQ[n]

    LIS = len(record) - 1 if LIS < len(record) - 1 else LIS

print(LIS)