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
 * @return {number}
 */


var sumNumbers = function(root) {
    const dfs = function(root, val) {
        if (!root) return
        val *= 10
        val += root.val;
        if(!root.left && !root.right){
            ans += val;
            return
        }
        dfs(root.left, val);
        dfs(root.right, val);
    }
    let ans = 0;
    if(!root) return 0;
    dfs(root, 0);
    return ans;
};

