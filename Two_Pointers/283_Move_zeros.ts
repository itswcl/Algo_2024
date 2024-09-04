/**
 * Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // intial our first and second pointer
  let first = 0;
  let second = 1;
  const n = nums.length;

  while (second < n) {
    const firstNum = nums[first];
    const secondNum = nums[second];
    // we will have 4 situation
    if (firstNum === 0 && secondNum === 0) {
      // [0,0] both 0 we need to find the second to be non 0s in order to switch
      second++;
    } else if (firstNum !== 0 && secondNum === 0) {
      // [1,0] we move our first pointer to point next
      first++;
    } else if (firstNum === 0 && secondNum !== 0) {
      // [0, 1] we switch to [1, 0]
      [nums[first], nums[second]] = [secondNum, firstNum];
    } else {
      // [1,1] do nothing but increase pointer
      first++;
      second++;
    }
  }
};
