/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // initial max jump
  let maxJump = 0;

  // iterate thru num
  for (let i = 0; i < nums.length; i++) {
    // check if idx greater than max if so it's out of scope
    if (i > maxJump) return false;
    // we update our max by check maxJump and possibleJump
    const curJump = i + nums[i];
    maxJump = Math.max(maxJump, curJump);

    // we check if maxJump is greater euqal to length
    if (maxJump >= nums.length - 1) return true;
  }
  // can't find return false
  return false;
};
