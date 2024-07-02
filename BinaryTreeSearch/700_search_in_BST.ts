/**
 * Example 1:


Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]
Example 2:


Input: root = [4,2,7,1,3], val = 5
Output: []
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  let currentNode = root;

  while (currentNode) {
    const curVal = currentNode.val;
    const isSame = curVal === val;
    const isRight = curVal < val;
    const isLeft = !isRight;

    if (isSame) return currentNode;
    if (isRight) currentNode = currentNode.right;
    if (isLeft) currentNode = currentNode.left;
  }
  return null;
};
