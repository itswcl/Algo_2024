/**
 * Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2:

Input: arr = [1,2]
Output: false
Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr: number[]): boolean {
  let newMap = new Map();

  for (let ele of arr) {
    const currentCount = newMap.get(ele) || 0;
    newMap.set(ele, currentCount + 1);
  }

  const occurrences = new Set(newMap.values());
  return newMap.size === occurrences.size;
};
