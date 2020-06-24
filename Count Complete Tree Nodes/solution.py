# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def countNodes(self, root: TreeNode) -> int:
        if not root:
            return 0
        leftCount = 1
        rightCount = 1
        l = root.left
        while l:
            l = l.left
            leftCount+=1
        
        r = root.right
        while r:
            r = r.right
            rightCount+=1
        
        if leftCount == rightCount:
            return 2**leftCount - 1
        else:
            return 1 + self.countNodes(root.left) + self.countNodes(root.right)
            