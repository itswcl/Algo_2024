/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums: number[]): number {
  // initial our left and right idx
  // initial our k as 1
  // initial our max
  let left = 0;
  let right = 0;
  let k = 1;
  let max = 0;

  // loop nums with rightIdx increase
  while (right < nums.length) {
    // find our left and right number
    const leftNum = nums[left];
    const rightNum = nums[right];

    // first we check if the right num is the one we need to delte
    if (rightNum === 0) k--;

    // then we check if we over delete if then we need move left
    if (k < 0) {
      // to see if we need to increase our k
      // we will check our left is 0 if 0 means it pervious deleted
      if (leftNum === 0) k++;

      left++;
    }

    // each time we update our max
    const tempDistance = right - left;
    max = Math.max(max, tempDistance);
    right++;
  }

  // return max
  return max;
};
