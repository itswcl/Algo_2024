/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  // nT[4] = nt[0] * nt[3]
  //       = nt[1] * nt[2]
  //       = nt[2] * nt[1]
  //       = nt[3] * nt[0]

  // initial our cache for nodes with total n+1 because including zero
  let nodes = new Array(n + 1).fill(0);
  // initial our [0] and [1] node combination
  (nodes[0] = 1), (nodes[1] = 1);

  // start our node from 2 til n including n
  for (let node = 2; node <= n; node++) {
    let total = 0;
    // each time we check our root for current node
    for (let root = 1; root <= node; root++) {
      // we find our left and right length
      const leftTree = root - 1;
      const rightTree = node - root;
      // we find the combination of total
      total += nodes[leftTree] * nodes[rightTree];
    }
    // update total to cache
    nodes[node] = total;
  }

  // retunr the nT(n)
  return nodes[n];
};

/**
 * O(n^2) for iterate nodes and roots
 * O(n) for cache and recursive callback
 */