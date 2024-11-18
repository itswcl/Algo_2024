/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  // we initial helper to track the sub problem
  const helper = (s, start, end, k) => {
    // first we will build the freq map
    const freq = new Map();
    for (let i = start; i < end; i++) {
      freq.set(s[i], (freq.get(s[i]) || 0) + 1);
    }

    // now we start check the charactor
    for (let i = start; i < end; i++) {
      const ele = s[i];
      // when we find the charctor has lesser than required 'k'
      // we split into small subset to check the left and right
      if (freq.get(ele) < k) {
        const left = helper(s, start, i, k);
        const right = helper(s, i + 1, end, k);
        // we will get the max from either side
        return Math.max(left, right);
      }
    }

    // if we never gets to smaller set we know we have entire repeat chars
    return end - start;
  };

  // initially we will pass our start and end index to keep track
  return helper(s, 0, s.length, k);
};

/**
 * O(n^2) buidling freqency map and recursive depth of dividing into sub string
 * O(n) recursive call stack
 */