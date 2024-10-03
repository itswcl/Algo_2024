/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  // initial map to contain key value pair (num:idx)
  let map = new Map();

  // iterate nums
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    // continuely comparing abs idxs <= k if any
    if (map.has(num) && Math.abs(map.get(num) - i) <= k) return true;
    // set to new idx
    map.set(num, i);
  }

  return false;
};
