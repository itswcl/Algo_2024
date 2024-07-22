/**
 * Example 1:

Input: cost = [10,15,20]
Output: 15
Explanation: You will start at index 1.
- Pay 15 and climb two steps to reach the top.
The total cost is 15.
Example 2:

Input: cost = [1,100,1,1,1,100,1,1,100,1]
Output: 6
Explanation: You will start at index 0.
- Pay 1 and climb two steps to reach index 2.
- Pay 1 and climb two steps to reach index 4.
- Pay 1 and climb two steps to reach index 6.
- Pay 1 and climb one step to reach index 7.
- Pay 1 and climb two steps to reach index 9.
- Pay 1 and climb one step to reach the top.
The total cost is 6.
 */

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const n = cost.length;
  if (n === 0) return 0;
  // [prev2, prev1, current, .......]
  let prev2 = cost[0];
  let prev1 = cost[1];

  for (let i = 2; i < n; i++) {
    const current = cost[i];
    const minNum = Math.min(prev2, prev1);
    prev2 = prev1;
    prev1 = minNum + current;
  }
  return Math.min(prev2, prev1);
};
