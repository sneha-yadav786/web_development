class Solution:
    def longestBalanced(self, nums) :  
        ans=0
        temp=set()
        for i in range(len(nums)):
            for  j in range(i+1,len(nums)+1):
                s=nums[i:j]
                temp.add(tuple(s))
        for item in temp:
            even_count=set()
            odd_count=set()
            for n in item:
                if n%2==0:
                    even_count.add(n)
                else:
                    odd_count.add(n)
            if len(even_count)==len(odd_count):
                ans=max(ans,len(item))
        return ans
s1=Solution()
print(s1.longestBalanced([3,2,2,5,4]))