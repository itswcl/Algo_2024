/**
 * Example 1:

Input: gain = [-5,1,5,0,-7]
Output: 1
Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.
Example 2:

Input: gain = [-4,-3,-2,-1,4,3,2]
Output: 0
Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.
 */
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  // let alts = [0];
  // let max = alts[0];

  // for (let i = 0; i < gain.length; i++) {
  //     const num = gain[i];
  //     const nextAlt = alts[i] + num;
  //     alts.push(nextAlt);
  //     max = Math.max(max, nextAlt)
  // }
  // return max;
  let currentAlt = 0;
  let maxAlt = currentAlt;

  for (let i = 0; i < gain.length; i++) {
    const num = gain[i];
    currentAlt += num;
    maxAlt = Math.max(maxAlt, currentAlt);
  }
  return maxAlt;
};
