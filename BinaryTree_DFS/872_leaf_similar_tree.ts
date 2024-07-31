/**
 * Example 1:


Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
Output: true
Example 2:


Input: root1 = [1,2,3], root2 = [1,3,2]
Output: false
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  let leavesForOne = [];
  let leavesForTwo = [];
  const leavesOne = dfs(root1, leavesForOne);
  const leavesTwo = dfs(root2, leavesForTwo);

  if (leavesOne.toString() === leavesTwo.toString()) {
    return true;
  }
  return false;
};

var dfs = function (root, leaves) {
  if (root === null) return;

  if (root.left === null && root.right === null) {
    leaves.push(root.val);
    return leaves;
  }

  dfs(root.left, leaves);
  dfs(root.right, leaves);
  return leaves;
};
