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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  // initial count and result
  let count = 0;
  let result = null;

  // initial our inorder function
  const inorder = (node) => {
    // we will check if 'result' been result or node not valid
    if (!node || result != null) return;

    // recursive call with left
    inorder(node.left);
    // increase the count
    count++;
    // checking if count meets k
    if (count == k) {
      // set our result and stop recursion
      result = node.val;
      return;
    }
    // recursive call with right
    inorder(node.right);
  };

  // we will run 'inorder' helper to traverse node
  inorder(root);
  // get result
  return result;
};
