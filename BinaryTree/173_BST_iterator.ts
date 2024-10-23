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
 */
var BSTIterator = function (root) {
  // using stack continue to left left
  this.stack = [];
  this._pushLeft(root);
};
BSTIterator.prototype._pushLeft = function (node) {
  // while initial all left nodes will be store
  while (node) {
    this.stack.push(node);
    node = node.left;
  }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  // each time we will get the latest node out, thats most smallest node
  const node = this.stack.pop();

  // in the mean time we need to check the current node right if any and add to stack
  // and contineusly add to left
  if (node.right) {
    this._pushLeft(node.right);
  }
  return node.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.stack.length != 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
