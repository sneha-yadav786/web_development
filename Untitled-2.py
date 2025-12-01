class Solution:
    def minCost(self, colors, neededTime) :
        
        ans = 0
        stack = [(colors[0], neededTime[0])]
        
        for i in range(1, len(colors)):
            if stack[-1][0] == colors[i]:
                ans += min(stack[-1][1], neededTime[i])
                if stack[-1][1] < neededTime[i]:
                    stack.pop()
                    stack.append((colors[i], neededTime[i]))
            else:
                stack.append((colors[i], neededTime[i]))
        
        return ans

s1 = Solution()
print(s1.minCost("aaabbbabbbb", [3,5,10,7,5,3,5,5,4,8,1]))
                    
       
