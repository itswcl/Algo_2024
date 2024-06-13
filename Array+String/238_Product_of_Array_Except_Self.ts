/**
 * 
Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 */
function productExceptSelf(nums: number[]): number[] {
  // break into 2 piece from left and from right
  const leftNums = new Array(nums.length).fill(1);
  const rightNums = new Array(nums.length).fill(1);

  // iterate thru leftNum from index 1 because we need the base[0]
  for (let i = 1; i < nums.length; i++) {
    // each iteration we update our correct idx with new product which
    // is from left i - 1 times nums i - 1
    // while going thru left we will use i - 1 while current i
    leftNums[i] = leftNums[i - 1] * nums[i - 1];
  }

  // iterate thru rightNum from index last - 2 because we need base[i-1]
  for (let i = nums.length - 2; i >= 0; i--) {
    // from right we will update current idx with new product which is
    // right idx + 1 times num +1;
    // while going thru right we will use i + 1 while current i
    rightNums[i] = rightNums[i + 1] * nums[i + 1];
  }

  // final iteration we will product right and left
  for (let i = 0; i < nums.length; i++) {
    // each iteration we update current i in nums
    // we dont need store additional array because we can mutate current nums
    nums[i] = leftNums[i] * rightNums[i];
  }
  return nums;
}
