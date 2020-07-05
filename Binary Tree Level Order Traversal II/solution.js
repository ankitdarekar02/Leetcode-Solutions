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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(root === null) {return [];}
    let result = [];
    let Q = [root];
    while(Q.length > 0) {
        let size = Q.length;
        let nodes = [];
        for(let i=0;i < size;i++) {
            let head = Q.shift();
            console.log(Q.length, 'l')
            nodes.push(head.val);
            if(head.left !== null) { Q.push(head.left)}
            if(head.right !== null) { Q.push(head.right)}
        }
        result.unshift(nodes)
    }
    return result;                    
};