class Solution:

    def __init__(self, w: List[int]):
        self.cumulative_sum = []
        cumulative_sum = 0
        for i in w:
            cumulative_sum += i
            self.cumulative_sum.append(cumulative_sum)
        self.total = cumulative_sum
        
    def pickIndex(self) -> int:
        random_num = random.random()*self.total
        low=0
        high=len(self.cumulative_sum) 
        while low < high:
            mid = low + (high - low)//2
            if self.cumulative_sum[mid] > random_num:
                high = mid
            else:
                low = mid + 1
        return low
            


# Your Solution object will be instantiated and called as such:
# obj = Solution(w)
# param_1 = obj.pickIndex()