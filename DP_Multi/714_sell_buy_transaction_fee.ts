/**
 * Example 1:

Input: prices = [1,3,2,8,4,9], fee = 2
Output: 8
Explanation: The maximum profit can be achieved by:
- Buying at prices[0] = 1
- Selling at prices[3] = 8
- Buying at prices[4] = 4
- Selling at prices[5] = 9
The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.

Day  | prices | cash | hold
---------------------------------
  0  |   1    |  0   |  -1   (buy at 1)
  1  |   3    |  0   |  -1   (do nothing)
  2  |   2    |  0   |  -1   (do nothing)
  3  |   8    |  5   |  -1   (sell at 8, profit = 8-1-2=5)
  4  |   4    |  5   |   1   (buy at 4)
  5  |   9    |  8   |   1   (sell at 9, profit = 9-4-2=3, total = 5+3=8)F

Example 2:

Input: prices = [1,3,7,5,10,3], fee = 3
Output: 6
 */
var maxProfit = function (prices, fee) {
  const n = prices.length;
  if (n === 0) return 0;

  // first day cost and profit
  let cost = -prices[0];
  let profit = 0;

  // we iterate from day2
  for (let i = 1; i < n; i++) {
    const curPrice = prices[i];
    // buy + curPrice is like
    // "buy" is our currnet cost minues current price - fee accured
    const curProfit = cost + curPrice - fee;
    const curCost = profit - curPrice;
    // calculate possible sell profit
    profit = Math.max(profit, curProfit);
    // calculate possible buy cost sell - curPriceF
    cost = Math.max(cost, curCost);
  }

  return profit;
};
