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
var sumNumbers = function (root) {
  // early check
  if (!root) return;
  // intial the total
  let total = 0;
  // initial the stack which tracking node and currentSum
  let stack = [{ node: root, currentSum: 0 }];

  // iterate the stack
  while (stack.length) {
    // get the node from stack
    let { node, currentSum } = stack.pop();
    // update currentSum
    currentSum = currentSum * 10 + node.val;
    // check if we can add to total
    if (!node.right && !node.left) total += currentSum;
    // add left and right to stack
    if (node.left) stack.push({ node: node.left, currentSum });
    if (node.right) stack.push({ node: node.right, currentSum });
  }

  // get the total
  return total;
};
