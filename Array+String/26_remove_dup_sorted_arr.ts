/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // we will start from 1 because idx 0 is already differ from idx 0-1
  let front = 1;

  for (let i = 1; i < nums.length; i++) {
    // comparing current and prvious element
    if (nums[i] != nums[i - 1]) {
      // if it's different we will move the element to front
      nums[front] = nums[i];
      // increase our front
      front++;
    }
  }

  // front will be the numbers in the nums
  return front;
};
