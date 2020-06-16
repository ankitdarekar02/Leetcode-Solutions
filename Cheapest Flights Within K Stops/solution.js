/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
    let location = {}
    for( [from,to,cost] of flights) {
        if(!location[from]) location[from] = {};
        location[from][to] = cost;
    }
    let q = [[src, 0, -1]]
    while(q.length){
        let ele = q.shift();
        let [src,cost,k] = ele;
        if(k > K) continue
        if(src == dst) return cost;
        for(let neighbor in location[src]) {
            q.push([neighbor,cost + location[src][neighbor],k+1])
        }
        q.sort((a,b)=>{ return a[1] - b[1]})
    }
    return -1;
};