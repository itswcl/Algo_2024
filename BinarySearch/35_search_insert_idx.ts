/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // we have left and right pointer
  let left = 0;
  let right = nums.length - 1;

  // iterate thru left is same as right
  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    const num = nums[mid];

    // if we find our num we return mid
    if (num === target) return mid;
    // when num less than target (1, 5) we move left pointer
    if (num < target) left = mid + 1;
    // when num greater target (5, 1) we move right pointer
    if (num > target) right = mid - 1;
  }
  // in the end we will return left pointer when no foound
  // becase left will be the place where target should go
  return left;
};
