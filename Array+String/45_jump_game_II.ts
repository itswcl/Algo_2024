/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // initial our jumps, currentEnd, furthest
  let jumps = 0;
  let currentEnd = 0;
  let furthest = 0;

  // iterate nums til nums length - 2 because we dont need to step into last it's "last" already
  for (let i = 0; i < nums.length - 1; i++) {
    // update furthest
    furthest = Math.max(furthest, i + nums[i]);
    // check current idx is the end
    if (i === currentEnd) {
      // increase jump
      jumps++;
      // update new End
      currentEnd = furthest;
    }
  }

  // return total jumps
  return jumps;
};
