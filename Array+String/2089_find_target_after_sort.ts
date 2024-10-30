/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  // we are counting how many number is less
  // and how many we have
  let result = [];
  let less = 0;
  let count = 0;

  // iterate the count
  for (let num of nums) {
    if (target > num) less++;
    if (target == num) count++;
  }
  // add to result with count
  for (let i = 0; i < count; i++) {
    result.push(i + less);
  }

  return result;
};
