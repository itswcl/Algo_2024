/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // initial map // [3, 3]
  let map = new Map();
  // iterate thru nums
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;
    // check if we find our diff
    // pervious differ will be first index and then current
    if (map.has(diff)) return [map.get(diff), i];
    // add num and index
    map.set(num, i);
  }
};
