/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  // initial map to continue freq, firstIdxs, lastIdxs
  let freq = {};
  let firstMap = {};
  let lastMap = {};

  // iterate num to add to all map above
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    // update freq map
    freq[num] = (freq[num] || 0) + 1;
    // update firstIdx when it's undefined
    if (firstMap[num] == null) firstMap[num] = i;
    // update lastIdx
    lastMap[num] = i;
  }

  // find degree from freq
  const degree = Math.max(...Object.values(freq));
  // initial min length
  let min = Infinity;

  // iterate freq map
  for (let num in freq) {
    // whenever we see our degree
    if (freq[num] === degree) {
      // checking min length with last - first + 1
      const length = lastMap[num] - firstMap[num] + 1;
      min = Math.min(min, length);
    }
  }

  // get minlength
  return min;
};

/**
 * O(n) we walk thur for loop with nums
 * O(n) we have new map to adding index
 */