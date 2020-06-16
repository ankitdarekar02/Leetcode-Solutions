/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let node = root;
    while(node) {
        if(node.val == val) {
            return node
        } 
        else if(node.val > val) {
            node = node.left
        } else {
            node = node.right
        }
    }
    return node;
};