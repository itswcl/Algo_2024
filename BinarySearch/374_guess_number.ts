/**
 * You call a pre-defined API int guess(int num), which returns three possible results:

-1: Your guess is higher than the number I picked (i.e. num > pick).
1: Your guess is lower than the number I picked (i.e. num < pick).
0: your guess is equal to the number I picked (i.e. num == pick).
Return the number that I picked.

 

Example 1:

Input: n = 10, pick = 6
Output: 6
Example 2:

Input: n = 1, pick = 1
Output: 1
Example 3:

Input: n = 2, pick = 1
Output: 1

 */

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  // intial 2 pointer 1 thru n
  let left = 1;
  let right = n;

  // iterate until we find "target"
  while (left <= right) {
    // const mid = Math.floor((right + left) / 2); workable might have issue with larger number
    // eg, 2147483640 + 2147483647 = 4294967287 / 2=2147483643.5
    // r - l / 2 + l is perfer way because it use much less calculation
    // eg, left: 2147483640, right: 2147483647, l-r=7/2=3.5+l
    const mid = Math.floor((right - left) / 2) + left;
    // when guess return 0 meaning we find our target
    if (guess(mid) === 0) return mid;
    // guess is lower than target we move left from mid+1
    if (guess(mid) === 1) left = mid + 1;
    // guess is larger than target we move right from mid-1
    if (guess(mid) === -1) right = mid - 1;
  }
};
