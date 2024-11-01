/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  // initial right and left poiner and counter
  let left = 0;
  let right = nums.length - 1;
  let merge = 0;

  // we iterate thru
  while (left < right) {
    // when both same meaning it's palindrome
    if (nums[left] === nums[right]) {
      left++;
      right--;
      // if left is lesser than right
      // we merge the left and update left+1 element
      // increase merge
    } else if (nums[left] < nums[right]) {
      nums[left + 1] += nums[left];
      left++;
      merge++;
      // if right is lesser
      // we merge right and update right - 1 element
      // increase merge
    } else {
      nums[right - 1] += nums[right];
      right--;
      merge++;
    }
  }
  return merge;
};
