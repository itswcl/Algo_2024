/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  const findLong = (s, start, end, k) => {
    // if end - start less k we dont have our repeat char
    if (end - start < k) return 0;

    // build our freq map to have char frequcy from start to end char
    const freq = new Map();
    for (let i = start; i < end; i++) {
      freq.set(s[i], (freq.get(s[i]) || 0) + 1);
    }

    // we will iterate from start to end
    for (let mid = start; mid < end; mid++) {
      // if current mid is not enought to meet k
      if (freq.get(s[mid]) < k) {
        // we will continue to find until see a valid char
        let midNext = mid + 1;
        while (midNext < end && freq.get(s[midNext]) < k) {
          midNext++;
        }

        // once we find our valid char we will check the max repeating char on each site
        // left site is start to mid
        // right site is midNext to end
        return Math.max(
          findLong(s, start, mid, k),
          findLong(s, midNext, end, k)
        );
      }
    }

    // if we continues to find valid char in earlier loop we just need to find end - start as our repat chars
    return end - start;
  };

  // starting point from 0 to str length
  return findLong(s, 0, s.length, k);
};

/**
 * O(nlogn ) because we continuesly loop into string and split to each site
 * O(n) for space because recrusive callback
 */
