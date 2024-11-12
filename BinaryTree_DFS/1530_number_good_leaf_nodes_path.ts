/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} distance
 * @return {number}
 */
var countPairs = function (root, distance) {
  // count to add the edges
  let count = 0;

  // initial dfs to run
  const dfs = (node) => {
    // base case
    if (!node) return [];
    // null for both left and right consider leaf with 1
    if (!node.left && !node.right) return [1];

    // where we get lower down to leaf and find base
    const leftDist = dfs(node.left);
    const rightDist = dfs(node.right);

    // iterate left right to find potential good
    for (let i = 0; i < leftDist.length; i++) {
      for (let j = 0; j < rightDist.length; j++) {
        if (leftDist[i] + rightDist[j] <= distance) {
          count++;
        }
      }
    }

    // get our new dist from current node
    let newDist = [];
    for (let i = 0; i < leftDist.length; i++) {
      // increase one consider a level up
      newDist.push(leftDist[i] + 1);
    }

    // and do the same thing for other part of nodes
    for (let i = 0; i < rightDist.length; i++) {
      newDist.push(rightDist[i] + 1);
    }
    return newDist;
  };

  // run dfs start from root
  dfs(root);
  // get count
  return count;
};

// O(n^2) each left node we need to check all the right nodes
// o(n) recursive call