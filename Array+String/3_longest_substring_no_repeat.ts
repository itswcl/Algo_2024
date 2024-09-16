/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // initial map and 2 pointer and max vairable
  let map = new Map();
  let fast = 0;
  let slow = 0;
  let max = 0;

  // iterate while fast pointer within the length;
  while (fast < s.length) {
    const slowChar = s[slow];
    const fastChar = s[fast];

    // in each run we check if map has current char of fast
    if (map.has(fastChar)) {
      // if so we will remove our slow char and increase slow pointer
      // it's like sliding head char
      map.delete(slowChar);
      slow++;
    } else {
      // if it's new char we will add to map
      map.set(fastChar, fast);
      // check the max value from fast - slow + 1 (idx 0, 5 = 5 - 0 + 1 = 6)
      max = Math.max(max, fast - slow + 1);
      // move up fast pointer
      fast++;
    }
  }
  // result
  return max;
};
