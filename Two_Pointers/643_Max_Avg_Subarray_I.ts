/**
 * Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
Example 2:

Input: nums = [5], k = 1
Output: 5.00000
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums: number[], k: number): number {
  // if (k === 1 && nums.length === 1) return nums[0];

  // let maxAvg = -Infinity;
  // let pointer = 0;

  // while (pointer < nums.length - k + 1) {
  //     let currentSum = 0;

  //     for (let i = pointer; i < pointer + k; i++) {
  //         currentSum = currentSum + nums[i];
  //     }
  //     maxAvg = Math.max(maxAvg, currentSum / k)
  //     pointer++
  // }
  // return maxAvg;

  // initial our base sum and maxSum
  let currentSum = 0;
  let maxSum = 0;

  // iterate first to find our k idx sum and set as max
  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
    maxSum = currentSum;
  }

  // start from index k iterate thur end
  for (let i = k; i < nums.length; i++) {
    // each iterate we will math our new sum by
    // remove element from first idx -> i - k
    // add our new element which is in i
    currentSum += nums[i] - nums[i - k];
    // math our max
    maxSum = Math.max(currentSum, maxSum);
  }
  // finally get back avg by k
  return maxSum / k;
};
