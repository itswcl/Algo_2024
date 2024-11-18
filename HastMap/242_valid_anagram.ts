/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) return false;
  let map = new Map();

  for (let char of s) {
    map.set(char, map.get(char) + 1 || 1);
  }

  for (let char of t) {
    map.set(char, map.get(char) - 1 || 0);
  }

  return Math.max(...map.values()) ? false : true;
};
