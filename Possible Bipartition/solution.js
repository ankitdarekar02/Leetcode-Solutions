/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(N, dislikes) {
    if(!dislikes.length) return true;
    
    const marked = Array(N + 1).fill(0);
    const graph = {};

    for (let [a, b] of dislikes) {
        graph[a] = (graph[a] || new Set()).add(b);
        graph[b] = (graph[b] || new Set()).add(a);
    }

    for (let i = 1; i <= N; i++) {
        if(marked[i] === 0 && !callDFS(i, 1)) return false;
    }
    
    function callDFS(num, mark) {
        if(marked[num]) return marked[num] === mark;
        if(!graph[num]) return true;
        marked[num] = mark;
        
        for (let vertex of graph[num]) {
            if (!callDFS(vertex,  ~mark)) return false;
        }
        return true;
    }
    return true;
    
};