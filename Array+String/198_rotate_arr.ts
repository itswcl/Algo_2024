/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length; // prevent k greater than nums

  // first reverse entire nums;
  reverse(nums, 0, nums.length - 1);

  // second reverse 0 to k - 1 nums;
  reverse(nums, 0, k - 1);

  // final reverse from k to end
  reverse(nums, k, nums.length - 1);
};

const reverse = (nums, start, end) => {
  // in reverse we just simply reverse start and end element til end
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
};
