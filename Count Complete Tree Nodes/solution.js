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
var countNodes = function(root) {
    if(!root) return 0;
    let l = root.left;
    let r = root.right;
    let leftCount = 1;
    let rightCount = 1;
    while(l){
        l = l.left;
        leftCount++
    }
    while(r){
        r = r.right;
        rightCount++;
    }
    if(leftCount == rightCount) {
        return (1<<leftCount) -1
    } else {
        return 1+ countNodes(root.left) + countNodes(root.right) 
    }
};