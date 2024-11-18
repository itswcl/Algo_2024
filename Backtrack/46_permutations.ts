/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];

  const helper = (startIdx) => {
    if (startIdx === nums.length) {
      result.push([...nums]);
      return;
    }

    for (let i = startIdx; i < nums.length; i++) {
      [nums[startIdx], nums[i]] = [nums[i], nums[startIdx]];
      helper(startIdx + 1);
      [nums[startIdx], nums[i]] = [nums[i], nums[startIdx]];
    }
  };

  helper(0);
  return result;
};

/**
 * O(n!) in size of n number will each swapings in result of n!
 * O(n) recursive call stack and swap
 */