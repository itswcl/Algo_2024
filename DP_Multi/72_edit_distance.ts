/**
 * Example 1:

Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
Example 2:

      r  o  s
    0 1  2  3
  h 1 0  0  0
  o 2 0  0  0
  r 3 0  0  0
  s 4 0  0  0
  e 5 0  0  0

      r  o  s
    0 1  2  3
  h 1 1  0  0
  o 2 0  0  0
  r 3 0  0  0
  s 4 0  0  0
  e 5 0  0  0

Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;
  const dp = [];
  // initial 2D dp
  // 0 0 0 0
  // 0
  // 0
  for (let row = 0; row <= m; row++) {
    dp[row] = [];
    for (let col = 0; col <= n; col++) {
      dp[row][col] = 0;
    }
  }

  // fill in our initial number as the string length
  // 0 1 2 3
  // 1
  // 2
  for (let row = 0; row <= m; row++) dp[row][0] = row;
  for (let col = 0; col <= n; col++) dp[0][col] = col;

  // now we start moving our point from [1][1] in grid.
  // remember row - 1 col - 1 will be our current char
  for (let row = 1; row <= m; row++) {
    for (let col = 1; col <= n; col++) {
      if (word1[row - 1] === word2[col - 1]) {
        dp[row][col] = dp[row - 1][col - 1];
      } else {
        // find our min path (insert / delete / replace)
        dp[row][col] =
          Math.min(dp[row][col - 1], dp[row - 1][col], dp[row - 1][col - 1]) +
          1;
      }
    }
  }

  // finally we get our min oeperation end of dp
  return dp[m][n];
};
