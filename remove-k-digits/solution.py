class Solution:
    def removeKdigits(self, num: str, k: int) -> str:
        stack = []
        for i in range(len(num)):
            while k > 0 and stack and num[i] < stack[-1]:
                k -= 1
                stack.pop()
            stack.append(num[i])
            
        while k != 0:
            stack.pop()
            k -= 1
            
        for i in range(len(stack)):
            if stack[i] != "0":
                break
        stack = stack[i:]

        if not stack:
            return "0"
        return "".join(stack)
                       
                       
                       
                       
    
                        
             
            
            
            
        