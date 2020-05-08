var isCousins = function(root, x, y) {
    if (!root) {
        return false;
    }
    
    let queue = [];
    let depth = 1;
    
    let xNodeValues = {
        parent: 0,
        depth: -1
    }
    
    let yNodeValues = {
        parent: 0,
        depth: -1
    }
    
    let haveXValues = false;
    let haveYValues = false;
    
    queue.unshift(root);
    queue.unshift('*');
    
    while ((!haveXValues || !haveYValues) && queue.length > 1) {
        const node = queue.pop();
        
        if (node === '*') {
            depth ++;
            queue.unshift('*');
        } else {
            if (node.left) {
                if (node.left.val === x) {
                    xNodeValues = setNodeValue(node.val, depth);
                    haveXValues = true;
                } else if (node.left.val === y) {
                    yNodeValues = setNodeValue(node.val, depth); 
                    haveYValues = true;
                }
                queue.unshift(node.left);
            }

            if (node.right) {
                if (node.right.val === x) {
                    xNodeValues = setNodeValue(node.val, depth);
                    haveXValues = true;
                } else if (node.right.val === y) {
                    yNodeValues = setNodeValue(node.val, depth);
                    haveYValues = true;
                }
                
                queue.unshift(node.right)
            }  
        }
        
    }
    
    if (xNodeValues.depth === yNodeValues.depth && xNodeValues.parent !== yNodeValues.parent) {
        return true;
    } else {
        return false;
    }
    
};

const setNodeValue = (parentVal, depthVal) => {
    return  {
        parent: parentVal,
        depth: depthVal
    }
}