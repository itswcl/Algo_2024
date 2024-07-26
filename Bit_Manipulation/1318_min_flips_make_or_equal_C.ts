/**
 *  

Example 1:



Input: a = 2, b = 6, c = 5
Output: 3
Explanation: After flips a = 1 , b = 4 , c = 5 such that (a OR b == c)
Example 2:

Input: a = 4, b = 2, c = 7
Output: 1
Example 3:

Input: a = 1, b = 2, c = 3
Output: 0

 */
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function (a, b, c) {
  let flips = 0;
  for (let i = 0; i < 32; i++) {
    // we will find 0 / 1 for "a/b/c" next bit even or odd
    const bitA = (a >> i) & 1;
    const bitB = (b >> i) & 1;
    const bitC = (c >> i) & 1;
    // if we find bitC 0 the filp will be A + B
    if (bitC === 0) flips += bitA + bitB;

    // else bitC exist and both A and B 0 then we increase flip by 1
    if (bitC && !bitA && !bitB) flips++;
  }
  return flips;
};
