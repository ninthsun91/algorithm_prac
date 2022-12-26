import sys
input = sys.stdin.readline

class Stack:
    def __init__(self):
        self.stack = []

    def push(self, X):
        self.stack.append(X)

    def pop(self):
        stack_pop = self.stack.pop() if len(self.stack)>0 else -1
        print(stack_pop)
        return stack_pop
    
    def size(self):
        stack_size = len(self.stack)
        print(stack_size)
    
    def empty(self):
        stack_empty = 0 if len(self.stack)>0 else 1
        print(stack_empty)
    
    def top(self):
        stack_top = self.stack[len(self.stack) - 1] if len(self.stack)>0 else -1
        print(stack_top)   
        
N = int(input())
stack = Stack()

S = {
    'push': stack.push,
    'pop': stack.pop,
    'size': stack.size,
    'empty': stack.empty,
    'top': stack.top
}

for n in range(N):
    cmd = input().split()
    key = cmd[0]
    value = cmd[1] if len(cmd)>1 else None
    
    if key == 'push':
        S[key](value)
        continue;
    S[key]()