/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // initial left adn right pointer
  let left = 0;
  let right = nums.length - 1;

  // iterate thur including last element
  while (left <= right) {
    // check mid index
    const mid = Math.floor((right + left) / 2);
    if (nums[mid] === target) return mid;

    // check either left or right path
    if (nums[left] <= nums[mid]) {
      // check target within the left division
      if (nums[left] <= target && target < nums[mid]) {
        // if valid we update right
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // check if target within right division
      if (nums[mid] < target && target <= nums[right]) {
        // if valid we update left pointer
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};
