/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    const sortedCost = costs.sort((a, b) => {
       return a[0] - b[0] - (a[1] - b[1]); 
    });
    let result = 0;
    sortedCost.forEach(function (cost, i) {
      if(i < costs.length/2) {
          result += cost[0]
      } else {
          result += cost[1]
      }
    });
    return result
};