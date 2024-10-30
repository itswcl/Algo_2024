/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
  // get uniq word
  const newWords = words.map((word) => {
    return [...new Set(word.split(""))].sort().join("");
  });

  // count the word same
  const count = {};
  for (let word of newWords) {
    count[word] = (count[word] || 0) + 1;
  }

  // count the pairs
  let pairs = 0;
  // the idea is basicall is when 1 it's zero pair when 2 consider 1 pair
  // let say 3 consider 3 pair
  // 4 consider 6 pair
  // r * (r - 1) / 2
  for (let pair of Object.values(count)) {
    pairs += (pair * (pair - 1)) / 2;
  }

  // get pairs
  return pairs;
};


