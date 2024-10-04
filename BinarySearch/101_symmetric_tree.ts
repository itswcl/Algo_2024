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
var isSymmetric = function (root) {
  // we check the empty root
  if (!root) return true;

  // initial our q for BFS
  let q = [root.left, root.right];

  // we will iterate and get the left right node for comparsion
  while (q.length) {
    let leftNode = q.shift();
    let rightNode = q.shift();

    // if both null we skip
    if (!leftNode && !rightNode) continue;
    // either null or the val not same it's false
    if (!leftNode || !rightNode || leftNode.val != rightNode.val) return false;

    // we will push what we want to compare at the same time for readiblity
    q.push(leftNode.left, rightNode.right);
    q.push(leftNode.right, rightNode.left);
  }
  return true;
};
