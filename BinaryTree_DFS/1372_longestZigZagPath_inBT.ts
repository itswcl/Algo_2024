/**
 * Example 1:


Input: root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1]
Output: 3
Explanation: Longest ZigZag path in blue nodes (right -> left -> right).
Example 2:


Input: root = [1,1,1,null,1,null,null,1,1,null,1]
Output: 4
Explanation: Longest ZigZag path in blue nodes (left -> right -> left -> right).
Example 3:

Input: root = [1]
Output: 0
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
var longestZigZag = function (root) {
    // we need to find the max both start point right and left
    const leftMax = dfs(root.left, true, 0);
    const rightMax = dfs(root.right, false, 0)
    return Math.max(leftMax, rightMax)
};

// isLeft is where we decide how we go opposite way
// depth is where we count out maxDepth
const dfs = (root, isLeft, depth) => {
    if (root == null) return depth;
    let rightMax = 0;
    let leftMax = 0;

    // here is we start calculate our depth by going either side
    if (isLeft) {
        // if we currently in left, our next move is go to right
        // rightMax will be depth + 1
        rightMax = dfs(root.right, false, depth + 1);
        // however, we go to left site, we will reset out depth
        leftMax = dfs(root.left, true, 0);
    } else {
        // if we current in right, and we go right we reset our depth
        rightMax = dfs(root.right, false, 0);
        // left, we start increase our depth
        leftMax = dfs(root.left, true, depth + 1);
    }

    // finally we will check our default depth / rightMax / leftMax
    depth = Math.max(depth, rightMax, leftMax)
    return depth
}