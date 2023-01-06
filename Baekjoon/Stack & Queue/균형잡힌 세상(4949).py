import sys
input = sys.stdin.readline

while True:
  sentence = input().rstrip()
  if sentence == '.':
    break

  brackets = []
  for character in sentence:
    if character == '(':
      brackets.append('(')
    elif character == '[':
      brackets.append('[')
    elif character == ')':
      if len(brackets) > 0 and brackets[len(brackets) - 1] == '(':
        brackets.pop()
      else: brackets.append('!')
    elif character == ']':
      if len(brackets) > 0 and  brackets[len(brackets) - 1] == '[':
        brackets.pop()
      else: brackets.append('!')
  
  print('no' if len(brackets) else 'yes')