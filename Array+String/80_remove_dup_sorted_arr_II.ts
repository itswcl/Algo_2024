/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // if element less than or 2 we return;
  if (nums.length <= 2) return nums.length;

  // we will start from 3rd element
  let front = 2;

  // iterate from 3rd element
  for (let i = 2; i < nums.length; i++) {
    // checking the current element and front-2 element(prior of 2 element)
    if (nums[i] != nums[front - 2]) {
      // different it's safe to keep
      nums[front] = nums[i];
      front++;
    }
  }

  // return front meaning the current length
  return front;
};
