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
  let count = 0;
  const dfs = (node) => {
    // base case 
    // empty node
    if (!node) return [];
    // found our levave and indicate the base [1] as distance 1
    if (!node.left && !node.right) return [1];

    // callback both left and right
    const leftDist = dfs(node.left);
    const rightDist = dfs(node.right);

    // iterate the length check when left plus right. 
    //if meet the target we can increase count
    for (let i = 0; i < leftDist.length; i++) {
      for (let j = 0; j < rightDist.length; j++) {
        if (leftDist[i] + rightDist[j] <= distance) {
          count += 1;
        }
      }
    }

    // each time we create the distance array to keep each dist + 1 and return callstack
    // this will be both left and right if any
    let newDist = [];
    for (let dist of leftDist) {
      newDist.push(dist + 1);
    }

    for (let dist of rightDist) {
      newDist.push(dist + 1);
    }

    return newDist;
  };

  // initial dfs call from root
  dfs(root);
  return count;
};

/**
 * O(n^2) and O(n)
 */
