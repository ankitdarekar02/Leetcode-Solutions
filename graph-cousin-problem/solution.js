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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */

var isCousins = function(root, x, y) {
    //Uisng DFS Time Complexity: O(n)
    if(!root) return true;
    if(!x || !y) return false;
    let stack = [{
        node: root,
        depth: 0,
        parent: root.val
    }];
    let results = [];
    while(stack.length) {
        let { node, depth, parent} = stack.pop();
        if(node.val === y) results.push({ depth, parent });
        if(node.val === x) results.push({ depth, parent });
        if(node){
            depth ++;
            if(node.left) stack.push({node: node.left,  depth, parent: node})
            if(node.right) stack.push({ node: node.right, depth, parent: node }) 
        }
    }
    if(results[0].depth === results[1].depth &&
        results[0].parent !== results[1].parent ){
        return true
    } else return false
}