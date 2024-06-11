/**
 * 
Example 1:

Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.
Example 2:

Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.
Example 3:

Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
 * @returns 
 */

var increasingTriplet = function (nums) {
  // intial our first and second number
  let first = Infinity;
  let second = Infinity;

  // iterate thru the nums
  for (let current of nums) {
    // while each loop we will check if the current is greater than second
    // when we see current > second meaning we've been swap first before and first's already less than second
    if (current > second) return true;

    // if we see first greater than current we update first
    if (first >= current) {
      // we will update first because we need to keep first as our smallest number
      first = current;
      // else we update second with current
    } else {
      // else block meaning we've already check first is less than current we need to compare second and current
      second = current;
    }
  }

  // if we failed to loop then it has no triplet
  return false;
};
