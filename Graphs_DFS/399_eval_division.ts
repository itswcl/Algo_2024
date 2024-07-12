/**
 * Example 1:

Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
Explanation: 
Given: a / b = 2.0, b / c = 3.0
queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? 
return: [6.0, 0.5, -1.0, 1.0, -1.0 ]
note: x is undefined => -1.0
Example 2:

graph for example 1
Map(3) {
  'a' => Map(1) { 'b' => 2 },
  'b' => Map(2) { 'a' => 0.5, 'c' => 3 },
  'c' => Map(1) { 'b' => 0.3333333333333333 }
}

Input: equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
Output: [3.75000,0.40000,5.00000,0.20000]
Example 3:

Input: equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
Output: [0.50000,2.00000,-1.00000,-1.00000]
 */

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  // build graph
  const graph = new Map();
  for (let i = 0; i < equations.length; i++) {
    const [num, dinomator] = equations[i];
    const value = values[i];

    if (!graph.has(num)) graph.set(num, new Map());
    if (!graph.has(dinomator)) graph.set(dinomator, new Map());
    graph.get(num).set(dinomator, value);
    graph.get(dinomator).set(num, 1 / value);
  }

  // dfs logic iterate query
  const evalQuery = (num, dinomator, visited) => {
    if (!graph.has(num) || !graph.has(dinomator)) return -1;
    if (num === dinomator) return 1;

    visited.add(num);
    const neis = graph.get(num);

    for (let [nei, value] of neis) {
      if (!visited.has(nei)) {
        const result = evalQuery(nei, dinomator, visited);

        if (result !== -1) return result * value;
      }
    }
    return -1;
  };

  // iterate query
  let results = [];
  for (let query of queries) {
    const [num, dinomator] = query;
    const visited = new Set();
    const result = evalQuery(num, dinomator, visited);
    results.push(result);
  }
  return results;
};
