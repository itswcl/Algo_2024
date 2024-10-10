/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // initial result
  let result = [];
  // sort nums
  nums.sort((a, b) => a - b);

  // iterate thru from i = 0
  for (let i = 0; i < nums.length; i++) {
    // check if i > 0 and i == i-1 we skip
    if (i > 0 && nums[i] == nums[i - 1]) continue;

    // initial left and right pointer after 'i'
    let left = i + 1;
    let right = nums.length - 1;
    // iterate 2 pointer
    while (left < right) {
      // if i, left, right element is zero we add to result
      let total = nums[i] + nums[left] + nums[right];
      if (total === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        // also we will check if left and left +1 / right and right - 1 is same element we move pointer
        while (left < right && nums[left] == nums[left + 1]) left++;
        while (left < right && nums[right] == nums[right - 1]) right--;
        // until not same we move both pointer together
        left++;
        right--;
        // also need to deal when total not zero
      } else if (total < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  // result
  return result;
};
