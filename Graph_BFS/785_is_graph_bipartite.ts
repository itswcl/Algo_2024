/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  // initial graph length
  const n = graph.length;
  // iniital the colors array for flipping for nodes and visited
  // zero meaning we havent visited
  const colors = new Array(n).fill(0);

  // we iterate the graph
  for (let i = 0; i < n; i++) {
    // if visited we will skip
    if (colors[i] !== 0) continue;

    // iniital q to keep each subArray of node
    const q = [i];
    // mark as visited
    colors[i] = 1;

    // now we check thru subarray
    while (q.length) {
      const node = q.shift();
      // by graph[node] we will find our sub element
      for (let neigbor of graph[node]) {
        // if zero meaning we haven't visited
        if (colors[neigbor] === 0) {
          colors[neigbor] = -colors[node]; // update our colors array
          q.push(neigbor); // add to q to check next sub array
          // if we find the colors is same we stopped
        } else if (colors[neigbor] === colors[node]) {
          return false;
        }
      }
    }
  }

  return true;
};

/**
 * O(V+E) for each node and its edge
 * O(N) for colors array
 */