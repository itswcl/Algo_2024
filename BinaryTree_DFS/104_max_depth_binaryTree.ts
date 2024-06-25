/**
 * Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:

Input: root = [1,null,2]
Output: 2
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
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let depth = 0;
  let q = [[root, 1]];

  while (q.length) {
    const [curRoot, curDepth] = q.shift();

    if (curRoot) {
      depth = Math.max(depth, curDepth);

      q.push([curRoot.left, curDepth + 1]);
      q.push([curRoot.right, curDepth + 1]);
    }
  }
  return depth;
};
