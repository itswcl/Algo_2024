/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  // we initial our default max for both min and max
  let maxSum = nums[0],
    minSum = nums[0];

  // initial current max, min and total
  // total is for subtract the minSum
  let curMaxSum = 0,
    curMinSum = 0,
    total = 0;

  // iterate the num
  for (let num of nums) {
    // keep update total
    total += num;

    // updating curMaxSum and max for normal use case
    curMaxSum = Math.max(curMaxSum + num, num);
    maxSum = Math.max(maxSum, curMaxSum);

    // updating curMinSum and min to keep track the minimum sum
    curMinSum = Math.min(curMinSum + num, num);
    minSum = Math.min(minSum, curMinSum);
  }

  // if maxSum is negative meaning it's all negative number
  // itself will be the max
  if (maxSum < 0) return maxSum;

  // if not we will find the max between
  // hortial sum or the head and tail sum
  // we find our circular subarray by total - minSum
  // because the circular will remove the minSum in array
  return Math.max(maxSum, total - minSum);
};

/**
 * O(n) we go thru each numbers
 * O(1) we only have variable 
 */