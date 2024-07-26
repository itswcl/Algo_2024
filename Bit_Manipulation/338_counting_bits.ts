/**
 * Example 1:

Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10
Example 2:

Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const dp = new Array(n + 1).fill(0);

  // 1
  for (let i = 1; i <= n; i++) {
    // i >> 1 shift 1 bit
    const shift = i >> 1;
    // i & 1 the least bit of i (odd = 1 / even = 0)
    const mod = i & 1;
    dp[i] = dp[shift] + mod;
  }

  // 2
  // let offset = 1;
  // for (let i = 1; i <= n; i++) {
  //     // we offset our even number 2/4/6... and keep
  //     if (offset * 2 === i) offset = i;
  //     dp[i] = dp[i - offset] + 1;
  // }

  return dp;
};
