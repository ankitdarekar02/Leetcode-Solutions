class Solution:
    def reconstructQueue(self, people: List[List[int]]) -> List[List[int]]:
        result = []
        people.sort(key=lambda x:(-x[0], x[1]))
        for x in people:
            result.insert(x[1], x)
        return result
            
        