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
 * @return {boolean}
 */
var isValidBST = function (root) {
  // need helper to have initial min and max boundray
  const validate = (node, min, max) => {
    // if node null we get true meaning we able to traverse to the end
    if (!node) return true;

    // we need to check current node is valid othewise we can stop here
    if (node.val <= min || node.val >= max) return false;

    // go thru left and right and check if valid
    // left boundry will from min to current node
    const left = validate(node.left, min, node.val);
    // right boundry will from current node to max
    const right = validate(node.right, node.val, max);

    // both valid meaning we have valid node
    return left && right;
  };

  return validate(root, -Infinity, Infinity);
};
