/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let set = new Set(nums);
  let maxStreak = 0;

  for (let num of nums) {
    // first to check if curNum has pervious other wise it's a starting
    if (!set.has(num - 1)) {
      let cur = num;
      let curStreak = 1;

      // now we will check if there's following in the set
      while (set.has(cur + 1)) {
        // if so we incrase until we can't find next
        cur += 1;
        curStreak += 1;
      }

      // reset max with max and current
      maxStreak = Math.max(maxStreak, curStreak);
    }
  }

  return maxStreak;
  // let map = new Map();
  // let max = 0;
  // nums.sort((a, b) => a - b)

  // for (let num of nums) {
  //     if (map.has(num - 1)) {
  //         map.set(num, map.get(num - 1) + 1)
  //     } else {
  //         map.set(num, 1)
  //     }
  //     max = Math.max(max, map.get(num))
  // }
  // return max
};
