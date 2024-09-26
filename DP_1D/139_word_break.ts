/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  // we initial our dp with false
  let dp = new Array(s.length + 1).fill(false);
  // the first will be true since 1 char is true
  dp[0] = true;

  // now we iterate from 1
  for (let i = 1; i <= s.length; i++) {
    // and iterate from 0 for j
    for (let j = 0; j < i; j++) {
      // this way we can get our substring from j to i
      const sub = s.substring(j, i);
      const hasWord = wordDict.includes(sub);
      // if we see our word and the dp[j] then we set our current i to true
      if (hasWord && dp[j]) {
        dp[i] = true;
        break;
      }
    }
  }
  // in the end of dp will see if can find multiple substring
  return dp[s.length];
};
