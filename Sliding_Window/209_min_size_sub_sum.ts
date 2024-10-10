/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  // initial left, minLength, total
  let left = 0;
  let minLength = Infinity;
  let total = 0;

  // iterate nums as our right pointer
  for (let right = 0; right < nums.length; right++) {
    // we add num to total
    total += nums[right];
    // countine while sum greater equal to target, this is where our sliding window start
    while (total >= target) {
      // if so we will caculate our length and update min
      minLength = Math.min(minLength, right - left + 1);
      // drop our left from total
      total -= nums[left];
      // move left pointer
      left++;
    }
  }

  // get min result
  return minLength === Infinity ? 0 : minLength;
};
