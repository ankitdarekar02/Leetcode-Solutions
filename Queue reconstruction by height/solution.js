/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    let result = [];
    people.sort((a, b) =>  a[0] == b[0] ? a[1] - b[1] : b[0] - a[0]);
    for(let [h,i] of people) {
        result.splice(i, 0, [h,i])
    }
    return result;
};