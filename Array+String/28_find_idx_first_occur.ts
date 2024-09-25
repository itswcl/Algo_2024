/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // we will find the length of needle with minium run we need on haystack
  let m = haystack.length;
  let n = needle.length;
  let diff = m - n;

  for (let i = 0; i <= diff; i++) {
    // once we know how long we need to iterate we can check needle length
    // also we asusmen it's valid after we finish iterate needle still valid we found
    let found = true;
    for (let j = 0; j < n; j++) {
      // so we compare the current element from haystack and needle
      if (haystack[i + j] !== needle[j]) {
        // if it's mismatch we update our found and stop
        found = false;
        break;
      }
    }
    // if foudn still true after iterate needle then we find our idx
    if (found) return i;
  }
  return -1;
};
