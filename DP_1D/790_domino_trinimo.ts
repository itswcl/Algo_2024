/**
 * Example 1:
Input: n = 3
Output: 5
Explanation: The five different ways are show above.
Example 2:

Input: n = 1
Output: 1

┌──┐  +  ┌──┐  =  2 * ways[i-1]
├──┤     ├──┤     
└──┘     └──┘     

┌──┬──┬──┐ = ways[i-3]
├──┤──┤──┤
└──┴──┴──┘
 */

/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n) {
  const MOD = 10 ** 9 + 7;
  if (n === 0) return 1;
  if (n === 1 || n === 2) return n;

  const dp = new Array(n).fill(1);
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 3] + dp[i - 1] * 2) % MOD;
  }
  return dp[n];
};
