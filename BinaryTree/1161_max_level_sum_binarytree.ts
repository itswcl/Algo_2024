/**
 * Example 1:


Input: root = [1,7,0,7,-8,null,null]
Output: 2
Explanation: 
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return the level with the maximum sum which is level 2.
Example 2:

Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
Output: 2
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
 * @return {number}
 */
var maxLevelSum = function (root) {
  if (root == null) return 0;

  // initial our queue, level, maxLevel
  let queue = [root];
  let maxSum = -Infinity;
  let maxLevel = 1;
  let curLevel = 1;

  // iterate thru queue
  while (queue.length) {
    const size = queue.length;
    let curSum = 0;

    // each iterate we have new element in queue which is hariotal nodes
    for (let i = 0; i < size; i++) {
      // find our current node and add to current sum
      // current sum represent the level of sum
      const curNode = queue.shift();
      curSum += curNode.val;

      // in each node we need to go thru left and right
      if (curNode.left) queue.push(curNode.left);
      if (curNode.right) queue.push(curNode.right);
    }

    // after we check the hariotal level
    // we checko the current sum and max sum
    if (curSum > maxSum) {
      // set new max sum
      maxSum = curSum;
      // and find the current max level is
      maxLevel = curLevel;
    }

    // once we finish up this level we will always go to next level
    curLevel++;
  }

  // return result
  return maxLevel;
};
