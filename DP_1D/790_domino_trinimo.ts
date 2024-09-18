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
  // mod 10^9+7
  const MOD = 10 ** 9 + 7;
  // base case for n =1/2
  if (n <= 2) return n;
  // initial dp array
  let dp = new Array(n).fill(1);
  // set dp[2]=2
  dp[2] = 2;
  // iterate from idx 3
  for (let i = 3; i <= n; i++) {
    // i-3 represents tromino since length of i-3 will be 1 tromino
    const trimino = dp[i - 3];
    // i-1 represents domino since length of i-1 will be 2 domino
    const domino = dp[i - 1] * 2;
    dp[i] = (trimino + domino) % MOD;
  }
  // finally we get tp n idx of dp
  return dp[n];
};
