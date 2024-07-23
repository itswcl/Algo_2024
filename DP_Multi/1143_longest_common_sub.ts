/**
 * Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.
 */

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length;
  const n = text2.length;
  const dp: any[] = [];

  // +1 to have extra comparsion for "0"
  for (let i = 0; i < m + 1; i++) {
    dp[i] = [];
    for (let j = 0; j < n + 1; j++) dp[i][j] = 0;
  }

  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      const isSameLetter = text1[i - 1] === text2[j - 1];
      dp[i][j] = isSameLetter
        ? dp[i - 1][j - 1] + 1
        : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  // we will return the last + 1 element
  return dp[m][n];
  // let prev = new Array(n + 1).fill(0);
  // let curr = new Array(n + 1).fill(0);

  // for (let i = 1; i < m + 1; i++) {
  //     for (let j = 1; j < n + 1; j++) {
  //         const isSameChar = text1[i - 1] === text2[j - 1]
  //         if (isSameChar) {
  //             curr[j] = prev[j - 1] + 1
  //         } else {
  //             curr[j] = Math.max(prev[j], curr[j - 1])
  //         }
  //     }
  //     [prev, curr] = [curr, prev];
  // }
  // return prev[n]
};
