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
 * @return {number}
 */
var getMinimumDifference = function (root) {
  // initial diff and prevVal to store pervious node val
  let diff = Infinity;
  let prevVal = null;

  const dfs = (node) => {
    // if node null we stop
    if (!node) return;

    // we will run dfs to node left
    dfs(node.left);

    // if preVal has set we can check the diff from prev and current
    if (prevVal != null) {
      const curDiff = node.val - prevVal;
      // we update diff from current and diff
      diff = Math.min(diff, curDiff);
    }

    // now the val will be perv since we finish the operation
    prevVal = node.val;
    // go thur node right
    dfs(node.right);
  };

  // start dfs for root
  dfs(root);
  return diff;
};
