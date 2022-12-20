import sys
input = sys.stdin.readline

def main():
    N = int(input())

    wines = []
    for n in range(N):
        wines.append(int(input()))

    if N == 1: return wines[0]
    if N == 2: return wines[0]+wines[1]

    sum = [ wines[0], wines[0]+wines[1] ]
    sum.append( max( wines[2]+wines[1], wines[2]+wines[0], sum[1] ))

    MAX = max(*sum)
    for n in range(3, N):
        max1 = wines[n] + sum[n-2]
        max2 = wines[n] + wines[n-1] + sum[n-3]

        m = max(max1, max2, sum[n-1])
        sum.append(m)

        if m > MAX: MAX = m

    return MAX

print(main())