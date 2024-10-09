/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  // initial our left and right pointer
  let left = 0;
  let right = numbers.length - 1;

  // iterate with 2 pointer
  while (left < right) {
    // find our curSum
    const curSum = numbers[left] + numbers[right];
    // compare curSum with target
    // same we find solution
    if (curSum === target) return [left + 1, right + 1];
    // curSum < target, increase left
    if (curSum < target) left++;
    // curSu, > target, decrase right
    if (curSum > target) right--;
  }
  // dont find target get empty
  return [];
};
