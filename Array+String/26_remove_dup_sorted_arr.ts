/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // we will start from 1 because idx 0 is already differ from idx 0-1
  let latest = 1;

  for (let i = 1; i < nums.length; i++) {
    // continuely compare current num and pervious num
    if (nums[i] != nums[i - 1]) {
      // if it's different we update our latest element with current
      nums[latest] = nums[i];
      // increase our latest
      latest++;
    }
  }

  // latest will be the numbers in the nums
  return latest;
};
