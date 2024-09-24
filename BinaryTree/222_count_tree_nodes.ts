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
 * @return {number}
 */
var countNodes = function (root) {
  if (!root) return 0;
  // find both left and right heigh
  const leftH = getHeigh(root.left);
  const rightH = getHeigh(root.right);

  // if both heigh same we will get 2 power heigh and plus root.right
  if (leftH === rightH) {
    return Math.pow(2, leftH) + countNodes(root.right);
  }

  // if heigh diffeerent we will get 2 power right heigh and plus root.left
  return Math.pow(2, rightH) + countNodes(root.left);

  // if (!root) return 0;
  // let count = 0;
  // let q = [root];

  // while (q.length) {
  //     let node = q.shift();
  //     count++
  //     if (node.left) q.push(node.left);
  //     if (node.right) q.push(node.right);
  // }

  // return count;
};

// to count high we just need to go thru node.left
const getHeigh = (node) => {
  let h = 0;
  while (node) {
    h++;
    node = node.left;
  }
  return h;
};
