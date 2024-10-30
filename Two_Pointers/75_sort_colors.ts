/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // initial 3 pointer for low mid and high
  let low = 0,
    mid = 0,
    high = nums.length - 1;
  // iterate thur while mid less high
  while (mid <= high) {
    // compare mid and low
    // if mid is 0
    if (nums[mid] === 0) {
      // swap low and mid
      [nums[mid], nums[low]] = [nums[low], nums[mid]];
      // increase low and mid
      low++;
      mid++;
    }

    // if mid is 1
    else if (nums[mid] === 1) {
      // increase mid since it's at where it needs to be
      mid++;
    }

    // if mid is 2
    else if (nums[mid] === 2) {
      // swap mid and high
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      // decrease high
      high--;
    }
  }
};

/**
 * O(n) iterate thur each num
 * O(1) inplace swap
 */
