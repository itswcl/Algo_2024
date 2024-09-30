/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let map = new Map();
  let count = 0;

  for (let char of ransomNote) {
    map.set(char, map.get(char) + 1 || 1);
    count++;
  }

  for (let char of magazine) {
    if (map.get(char)) {
      map.set(char, map.get(char) - 1);
      count--;
    }
  }

  return count == 0;
};
