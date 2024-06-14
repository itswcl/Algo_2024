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
var moveZeroes = function (nums: number[]): void {
  // initial 2 pointers
  let firstIdx = 0;
  let secIdx = 1;
  // find the length of nums
  const numsLength = nums.length;

  // while second pointer under length we continue
  while (secIdx < numsLength) {
    // find both first and second ele
    const firstEle = nums[firstIdx];
    const secEle = nums[secIdx];

    // first case if both 0 we increase second pointer
    if (firstEle === 0 && secEle === 0) {
      secIdx++;
      continue;
    }

    // second case if we have ele in first but 0 in sec
    // we increase first Idx becase we want 0 in the end [1, 0]
    if (firstEle !== 0 && secEle === 0) {
      firstIdx++;
      continue;
    }

    // if we have first 0 and second has ele we will switch
    if (firstEle === 0 && secEle !== 0) {
      [nums[firstIdx], nums[secIdx]] = [secEle, firstEle];
    }

    // we ill increase both pointer when
    // 1. [0, 1] we switch to [1,0]
    // 2. [1, 2] we dont switch and doesnt meet first two cases
    firstIdx++;
    secIdx++;
  }
};
