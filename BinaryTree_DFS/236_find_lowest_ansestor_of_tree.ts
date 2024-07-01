/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  //if no root or root is one of p / q we return immediately
  if (root == null || root === p || root === q) return root;

  // recrusively find left and right subtree
  const leftLCA = lowestCommonAncestor(root.left, p, q);
  const rightLCA = lowestCommonAncestor(root.right, p, q);

  // if both return node then current root is Lowest ancestor
  if (leftLCA && rightLCA) return root;

  // otherwise we return nodes from current
  return leftLCA || rightLCA;
};
