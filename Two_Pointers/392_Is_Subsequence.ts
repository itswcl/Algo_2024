/**
 * Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s: string, t: string) {
  // initial s, t pointer
  let sPointer = 0;
  let tPointer = 0;

  // we will go thru t
  while (tPointer < t.length) {
    // initial both element
    const sEle = s[sPointer];
    const tEle = t[tPointer];

    // if same we will increase our s pointer
    if (sEle === tEle) {
      sPointer++;
    }

    // increase t pointer on each iteration
    tPointer++;
  }
  // if we went thru all s it means the pointer will be same as length
  return sPointer === s.length;
};
