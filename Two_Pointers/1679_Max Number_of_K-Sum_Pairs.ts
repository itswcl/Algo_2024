/**
 * Example 1:

Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.
Example 2:

Input: nums = [3,1,3,4,3], k = 6
Output: 1
Explanation: Starting with nums = [3,1,3,4,3]:
- Remove the first two 3's, then nums = [1,4,3]
There are no more pairs that sum up to 6, hence a total of 1 operation.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxOperations = (nums: number[], k: number): number => {
  // sort num to be like [1,2,3]
  nums.sort((a, b) => a - b);
  // initial head and tail idx we doing 2 pointer
  let headIdx = 0;
  let tailIdx = nums.length - 1;
  // when we see match we increase the count
  let count = 0;

  // loopping while head and tail not meet
  while (headIdx < tailIdx) {
    const head = nums[headIdx];
    const tail = nums[tailIdx];

    // now we check head and tail ele is equal to k or not
    // if we meet the element used and increase count
    if (head + tail === k) {
      count++;
      headIdx++;
      tailIdx--;
      // if less we increase our head
    } else if (head + tail < k) {
      headIdx++;
      // i more we decrease our tail
    } else {
      tailIdx--;
    }
  }
  // finally we get the count
  return count;
};
