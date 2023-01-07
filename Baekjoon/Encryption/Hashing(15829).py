import sys
input = sys.stdin.readline

def powM(r: int, i: int, M: int):
  result = 1
  for _ in range(i):
    result = (result * r) % M
  return result

def main():
  r = 31
  M = 1234567891
  L = int(input())
  chars = input().strip()

  sum = 0
  for i, char in enumerate(chars):
    code = ord(char)-96
    sum = (sum + (code * powM(r, i, M)) % M) % M

  print(sum)

main()