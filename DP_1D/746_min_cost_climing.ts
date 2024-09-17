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
  if (!cost.length) return 0;
  // we either start from idx 0 or 1
  let zeroCost = cost[0],
    oneCost = cost[1];

  // start from idx 2
  for (let i = 2; i < cost.length; i++) {
    const stepCost = cost[i];
    // we choose which one we start either p2 or p1
    const prevCost = Math.min(zeroCost, oneCost);
    // we move p2 to p1
    zeroCost = oneCost;
    // new p1 is current plus pervious step
    oneCost = stepCost + prevCost;
  }
  // finally we find our min cost either in step1 or step2
  return Math.min(zeroCost, oneCost);
};
