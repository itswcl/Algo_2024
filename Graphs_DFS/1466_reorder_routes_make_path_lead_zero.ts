/**
 * 
Example 1:


Input: n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]
Output: 3
Explanation: Change the direction of edges show in red such that each node can reach the node 0 (capital).
Example 2:


Input: n = 5, connections = [[1,0],[1,2],[3,2],[3,4]]
Output: 2
Explanation: Change the direction of edges show in red such that each node can reach the node 0 (capital).
Example 3:

Input: n = 3, connections = [[1,0],[2,0]]
Output: 0

 */
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
  const graph = new Map();
  const visited = new Set();

  for (const [from, to] of connections) {
    if (!graph.has(from)) graph.set(from, []);
    if (!graph.has(to)) graph.set(to, []);
    graph.get(from).push(to);
    graph.get(to).push(-from);
  }

  const dfs = (city) => {
    visited.add(city);
    let count = 0;

    for (const nei of graph.get(city)) {
      const isVisited = visited.has(Math.abs(nei));
      if (!isVisited) {
        count += dfs(Math.abs(nei)) + (nei > 0 ? 1 : 0);
      }
    }
    return count;
  };
  return dfs(0);
};
