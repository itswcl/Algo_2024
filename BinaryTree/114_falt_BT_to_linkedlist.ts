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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  // early check
  if (!root) return;
  // initial stack
  let stack = [root];
  // iterate the stack
  while (stack.length) {
    // pop the latest node as our current
    let current = stack.pop();
    // adding back with right to left order so the left node will be last in the stack
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
    // add to current pointer
    if (stack.length) current.right = stack[stack.length - 1];
    // set left to empty
    current.left = null;
  }
};
