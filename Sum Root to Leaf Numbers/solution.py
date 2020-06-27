# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def dfs(self, root, val):
        if root is None:
            return
        val *= 10
        val += root.val
        if root.right is None and root.left is None:
            self.ans+=val
            return 
        self.dfs(root.left, val)
        self.dfs(root.right, val)
        
    def sumNumbers(self, root: TreeNode) -> int:
        if root is None:
            return 0
        self.ans = 0
        self.dfs(root,0)
        return self.ans
        