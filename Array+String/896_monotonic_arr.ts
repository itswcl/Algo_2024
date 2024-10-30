/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  // check either increase or decrease
  const isIncrease = nums[0] < nums[nums.length - 1];

  // iterate based on up or down
  if (isIncrease) {
    // if up we checking with i and i+1 forward
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        return false;
      }
    }
  } else {
    // if down we checking with i and i -1 backward
    for (let i = nums.length - 1; i > 0; i--) {
      if (nums[i] > nums[i - 1]) {
        return false;
      }
    }
  }
  return true;
};

/**
 * O(n) iterae thru nums
 * O(1) we using single var to hold flag
 */