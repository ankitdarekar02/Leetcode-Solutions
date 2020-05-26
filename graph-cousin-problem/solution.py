# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
# Using DFS -time complexity O(n)
class Solution:
    def isCousins(self, root: TreeNode, x: int, y: int) -> bool:
        stack = [(root,None,0)]
        x_found = y_found = False
        while stack:
            node,parent,depth = stack.pop()
            if node.val == x:
                px,dx = parent,depth
                x_found = True
            if node.val == y:
                py,dy = parent,depth
                y_found = True
            if x_found and y_found:
                break
            if node.left:
                stack.append((node.left,node,depth+1))
            if node.right:
                stack.append((node.right,node,depth+1))

        return (dx == dy and px.val!=py.val) 