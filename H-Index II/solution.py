class Solution:
    def hIndex(self, citations: List[int]) -> int:
        if not citations: return 0
        n = len(citations)
        low = 0
        high = n - 1
        while low <= high:
            mid = (low+high)//2
            print(mid)
            if citations[mid] == (n - mid):
                return citations[mid]
            if citations[mid] > (n - mid):
                high = mid - 1
            else:
                low = mid + 1
                
        return n-low
        
            