/**
 * Example 1:


Input: m = 3, n = 7
Output: 28
Example 2:

Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // // dp[i][j] = dp[i-1][j] + dp[i][j-1]
  // const dp = [];
  // for (let i = 0; i < m; i++) {
  //     dp[i] = [];
  //     for (let j = 0; j < n; j++) {
  //         dp[i][j] = 1;
  //     }
  // }

  // // we start from [1][1] isntead of [0][0] because it's where we start
  // for (let i = 1; i < m; i++) {
  //     for (let j = 1; j < n; j++) {
  //         dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
  //     }
  // }
  // return dp[m-1][n-1]

  const dp = new Array(n).fill(1);
  // 0. i = 0 [1,1,1,1,1,1,1]
  // 1. i = 1 [1,2,3,4,5,6,7]
  // 1 + 1 = 2 / 1 + 2 = 3 / 1 + 3 = 4
  // 2. i = 2 [1,3,6,10,15,21,28]
  // 2 + 1 = 3 / 3 + 3 = 6 / 4 + 6 = 10
  // m = 3 -> 3 rows
  for (let row = 1; row < m; row++) {
    // n = 7 -> 7 columns
    for (let col = 1; col < n; col++) {
      const cur = dp[col];
      const prev = dp[col - 1];
      dp[col] = cur + prev;
    }
  }

  // return the last element
  return dp[n - 1];
};
