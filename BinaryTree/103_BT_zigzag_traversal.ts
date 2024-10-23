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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  // early check and initial our stack and result
  if (!root) return [];
  let result = [];
  let stack = [root];
  // also we need to have a flag for zz inidication
  let isEven = true;

  // iterate the stack
  while (stack.length) {
    // show our lenght for current level
    const n = stack.length;
    // initial our temp result to hold each level value
    let temp = [];
    // iterate the current level
    for (let i = 0; i < n; i++) {
      // get our node from stack
      const node = stack.shift();
      // add val based on the flag either add back or front
      if (isEven) {
        temp.push(node.val);
      } else {
        temp.unshift(node.val);
      }

      // add our node left and right to stack
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }

    // after all we add our temp to result
    result.push(temp);
    // update flag
    isEven = !isEven;
  }

  // get result
  return result;
};
