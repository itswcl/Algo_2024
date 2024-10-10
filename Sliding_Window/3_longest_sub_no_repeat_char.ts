/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // initial max leftpointer and map to check we meet earlier
  let maxLength = 0;
  let left = 0;
  let map = new Map();

  // iterate thru s
  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    // if it's exist, and index is greater equal to left
    // we move our left pointer
    if (map.has(char) && map.get(char) >= left) {
      left = map.get(char) + 1;
    }

    // we set our char, index in our map
    map.set(char, right);
    // update maxlength
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};
