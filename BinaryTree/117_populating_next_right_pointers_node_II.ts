/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  // early check
  if (!root) return null;
  // initial current pointer from the root
  let current = root;

  // traversal each level
  while (current) {
    // initial a dummy to hold current level nodes
    let dummy = new TreeNode(0);
    let temp = dummy;
    // traversal each level with left and right
    while (current) {
      // check left and right and attache to the dummy
      if (current.left) {
        temp.next = current.left;
        temp = temp.next;
      }
      if (current.right) {
        temp.next = current.right;
        temp = temp.next;
      }
      // move to next node
      current = current.next;
    }
    // move to next level nodes
    current = dummy.next;
  }

  // get the root
  return root;
};
