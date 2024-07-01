/**
 * Example 1:


Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]
Example 2:

Input: root = [1,null,3]
Output: [1,3]
Example 3:

Input: root = []
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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (root == null) return [];
  // initial result and current queue
  let result = [];
  let queue = [root];

  while (queue.length) {
    const curSize = queue.length;

    for (let i = 0; i < curSize; i++) {
      // shift our left node
      const curNode = queue.shift();
      // when we finding our last node in queue (most of right)
      if (i === curSize - 1) result.push(curNode.val);

      // now we need to push our left and right ndoes to queue
      if (curNode.left) queue.push(curNode.left);
      if (curNode.right) queue.push(curNode.right);
    }
  }
  return result;
};
