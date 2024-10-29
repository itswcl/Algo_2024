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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  // early check
  if (!root) return false;
  // initia queue with detail of 'root' and 'level'
  let queue = [[root, null, 0]];
  // initial x and y info for comparsion and update when we found
  let xInfo = null;
  let yInfo = null;
  // iterate thru q
  while (queue.length) {
    // get node from queue and update x and y info
    const [node, root, level] = queue.shift();
    // check if x y info meets
    if (node.val === x) xInfo = [root, level];
    if (node.val === y) yInfo = [root, level];
    // if meets we check if same level different root
    if (xInfo && yInfo) return xInfo[1] === yInfo[1] && xInfo[0] !== yInfo[0];

    // we adding left and right with detail of root and level to queue
    if (node.left) queue.push([node.left, node, level + 1]);
    if (node.right) queue.push([node.right, node, level + 1]);
  }
  // if we pass all iterate and no found
  return false;
};

/**
 * time is O(n) iterate each node
 * space is O(n) because queue to store node
 */