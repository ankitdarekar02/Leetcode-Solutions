/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    const stack = [];
    // let removed = 0;
    for(let n of num) {
        while(stack.length && n < stack[stack.length-1] && k > 0) {
            stack.pop();
            k--;
        }
        stack.push(n);
    }
    
    // remove all remaining large numbers
    while(k > 0) {
        stack.pop();
        k--;
    }
    
    // remove all beginning zeroes
    while(stack.length && stack[0] === '0') {
        stack.shift();
    }
    
    return stack.length ? stack.join('') : '0';
};