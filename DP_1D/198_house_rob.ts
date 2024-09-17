/**
 * Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) return nums[0];
  // start zero and one idx value
  let robZero = nums[0];
  let robOne = Math.max(nums[0], nums[1]);

  // we will start idx 2 since we initial 0 and 1
  for (let i = 2; i < nums.length; i++) {
    // we will get our current rob and sum of zero and current rob
    const curRob = nums[i];
    const sumRob = robZero + curRob;
    // we update our zero to one idx
    robZero = robOne;
    // update robOne to be highest amount
    robOne = Math.max(robOne, sumRob);
  }
  return robOne;
};
