/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // build a dp with initial value 1
  let dp = new Array(nums.length).fill(1);

  // we iterate thru num with i to represent seond element and j be pervious
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      const prev = nums[j];
      const after = nums[i];
      // if we find after greater than prev we update our currnet dp
      if (after > prev) {
        // we compare our current and pervious count from j either bigger
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  // in the end we get the max count from dp;
  return Math.max(...dp);
};
