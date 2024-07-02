/**
 * Example 1:


Input: root = [5,3,6,2,4,null,7], key = 3
Output: [5,4,6,2,null,null,7]
Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.

Example 2:

Input: root = [5,3,6,2,4,null,7], key = 0
Output: [5,3,6,2,4,null,7]
Explanation: The tree does not contain a node with value = 0.
Example 3:

Input: root = [], key = 0
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (root == null) return null;

  if (key > root.val) root.right = deleteNode(root.right, key);
  if (key < root.val) root.left = deleteNode(root.left, key);

  if (key === root.val) {
    if (root.left == null) return root.right;
    if (root.right == null) return root.left;

    let minNode = findMinNode(root.right);
    root.val = minNode.val;
    root.right = deleteNode(root.right, minNode.val);
  }
  return root;
};

const findMinNode = (root) => {
  let cur = root;
  while (cur.left) {
    cur = cur.left;
  }
  return cur;
};
