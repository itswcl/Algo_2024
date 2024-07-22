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
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];

  // [prev2, prev1, cur, ....]
  let prev2 = nums[0];
  let prev1 = Math.max(nums[0], nums[1]);

  // [..., current]
  for (let i = 2; i < n; i++) {
    const cur = prev2 + nums[i];
    const newMax = Math.max(cur, prev1);
    prev2 = prev1;
    prev1 = newMax;
  }

  // prev1 will always keep the max
  return prev1;
};
