/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
var findMissingRanges = function (nums, lower, upper) {
  // initial result and perv (start point)
  let result = [];
  let perv = lower - 1;
  // iterate thru nums til entire length because we need to check last element +1
  for (let i = 0; i <= nums.length; i++) {
    // set our current if it's last+1 we set to upper +1 else it's element
    const cur = i == nums.length ? upper + 1 : nums[i];
    // we check perv and current gap if it's '<=' we add to result
    if (perv + 1 <= cur - 1) result.push([perv + 1, cur - 1]);
    // update our perv with current
    perv = cur;
  }
  // get result
  return result;
};

/**
 * time O(n) iterate thru nums each check and store is O(1)
 * space O(n) worst is we need to store each gap in result
 */