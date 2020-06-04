class Solution:
    def twoCitySchedCost(self, costs: List[List[int]]) -> int:
        sortedCost = sorted(costs, key=lambda a: a[0] - a[1])
        result = 0
        for idx, cost in enumerate(sortedCost):
            if idx < len(costs)/2:
                result += cost[0]
            else:
                result += cost[1]
        return result