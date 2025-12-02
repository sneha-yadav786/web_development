class Solution:
    def countTrapezoids(self, points):
        y_points={}
        for point in points:
            if point[1] in y_points:
                y_points[point[1]]+=1
            else:
                y_points[point[1]]=1
        print(y_points)
        sum=1
        for i in y_points:
            if y_points[i]>1:
                k=(y_points[i]*(y_points[i]-1))//2
                sum*=k
        return sum

        
        
s1=Solution()
print(s1.countTrapezoids([[50,-41],[64,-66],[-45,-41],[-58,10],[25,10]]))