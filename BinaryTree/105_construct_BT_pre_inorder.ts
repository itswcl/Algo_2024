/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  // early check
  if (!preorder.length || !inorder.length) return null;

  // find our root val and initial root
  const value = preorder[0];
  let root = new TreeNode(value);

  // also we need to find the root index which indicate the breakout left and right in 'inorder'
  const index = inorder.indexOf(value);

  // now we can contrcuste our left and right recursively
  // we will use slice with the root index we found to breakout pre and in order array
  root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
  root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));

  return root;
};
