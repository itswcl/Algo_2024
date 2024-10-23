/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  // early check valid param
  if (!inorder.length || !postorder.length) return null;

  // find the root with pop due to postorder L>R>Root
  const value = postorder.pop();
  const root = new TreeNode(value);

  // find inorder root index
  const index = inorder.indexOf(value);

  // build right and build left
  root.right = buildTree(inorder.slice(index + 1), postorder);
  // right need to be first because postorder
  root.left = buildTree(inorder.slice(0, index), postorder);

  // return root
  return root;
};
