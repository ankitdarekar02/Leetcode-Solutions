# Ctalan Number Approach
class Solution:
    def numTrees(self, n: int) -> int:
        numTree = [1] * (n + 1)
        for nodes in range(2, n + 1):
            total = 0
            for root in range(1, nodes + 1):
                total += numTree[root - 1] * numTree[nodes - root]
            numTree[nodes] = total
        return numTree[n]