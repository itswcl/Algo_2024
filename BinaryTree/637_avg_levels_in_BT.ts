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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  // initial result arr and default queue
  let avgs = [];
  let q = [root];

  // we check if we have nodes in queue
  while (q.length) {
    const n = q.length;
    let total = 0;

    // in each queue we will iterate the length of current queue
    for (let i = 0; i < n; i++) {
      // in each run we will add up our total
      const node = q.shift();
      total += node.val;

      // in each node we will do the same for left and right
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }

    // after out of for loop for current size of node we will count our avg and add to result
    let avg = total / n;
    avgs.push(avg);
  }

  // get the result
  return avgs;
};
