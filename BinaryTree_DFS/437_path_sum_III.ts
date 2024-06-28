/**
 * Example 1:


Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
Output: 3
Explanation: The paths that sum to 8 are shown.
Example 2:

Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: 3

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
 * @param {number} targetSum
 * @return {number}
 */
const pathSum = (root, targetSum) => {
  if (root == null) return 0;

  // initil our count
  let count = 0;
  // initial map with 0:1 because if currentSum - targetSum = 0 then we increase 1
  // node.val = 8 and targetSum = 8 we will count 1
  let map = { 0: 1 };

  const dfs = (root, curSum) => {
    // while in dfs we will calculate our sum with current value
    // initial is 0 + 10 as first node
    curSum += root.val;

    // we calculate the different and store in map
    const diff = curSum - targetSum;
    map[diff] = map[diff] || 0;
    // if we find our diff has pervious store we increase by value (how many time we see the diff)
    count += map[diff];

    // then we store our current sum
    map[curSum] = map[curSum] || 0;
    map[curSum]++;

    // dfs thru both right and left
    if (root.left) {
      dfs(root.left, curSum);
    }
    if (root.right) {
      dfs(root.right, curSum);
    }

    // in the end we drop our current sum
    map[curSum]--;
  };

  // we will initial our dfs run
  dfs(root, 0);
  // finally return result
  return count;
};
// var pathSum = function (root, targetSum) {
//     if (root === null) return 0;

//     return helper(root, targetSum) +
//         pathSum(root.left, targetSum) +
//         pathSum(root.right, targetSum)
// };

// const helper = (root, targetSum) => {
//     if (root === null) return 0;

//     const initialCount = root.val === targetSum ? 1 : 0;
//     const leftSum = helper(root.left, targetSum - root.val);
//     const rightSum = helper(root.right, targetSum - root.val);

//     return initialCount + leftSum + rightSum;
// }
