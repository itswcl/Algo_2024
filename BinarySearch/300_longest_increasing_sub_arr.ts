/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // initial result to keep the increaseing sub element
  let result = [];

  // we will iterate each num and using binary search to check the mid from result
  // either moving left or right pointer
  // and check we should add to result or swap last element in result
  for (let num of nums) {
    // set left and right pointer for the result array because that's search start
    let left = 0;
    let right = result.length;

    while (left < right) {
      const mid = Math.floor((right + left) / 2);
      if (result[mid] < num) left = mid + 1;
      else right = mid;
    }

    // now we check if the right stay in the last element
    // meaning we need to add to result because the num is lesser than last element
    if (right === result.length) result.push(num);
    // if not we need to swap last element in result with num
    else result[right] = num;
  }

  // get the length of result array
  return result.length;
};
