/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  // first we find our pivot point
  let pivot = nums.length - 2;
  while (pivot >= 0 && nums[pivot] >= nums[pivot + 1]) pivot--;

  // we swap the we found latest element greater than perv
  if (pivot >= 0) {
    let j = nums.length - 1;
    while (nums[pivot] >= nums[j]) j--;
    [nums[pivot], nums[j]] = [nums[j], nums[pivot]];
  }

  // now we swap the nums in the right after pivot
  let left = pivot + 1;
  let right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
};

/**
 * O(n) to iterate the size of num
 * O(1) a few viarable
 */