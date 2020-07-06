/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let idx = digits.length - 1;
    while(idx >=0){
        if(digits[idx] == 9){
            digits[idx] = 0;
        } else {
            digits[idx] +=1;
            return digits
        }
        idx --
    }
    digits.unshift(1)
    return digits
};