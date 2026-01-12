class Solution:
    def maximumHappinessSum(self, happiness, k):
        happiness.sort()
        s=0
        print(happiness)
        count=0
        for i in range(k):
            s+=happiness[-1]-count
            t=happiness.pop()-count
            print(t)
            count+=1
        return s


        
s1=Solution()
print(s1.maximumHappinessSum([12,1,42],3))

