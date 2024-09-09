/**
 * Example 1:

Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"
Example 2:

Input: word1 = "a", word2 = "aa"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
Example 3:

Input: word1 = "cabbba", word2 = "abbccc"
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc"
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  // first check if length different
  if (word1.length !== word2.length) return false;

  // we build both map
  let map1 = new Map();
  let map2 = new Map();

  for (let i = 0; i < word1.length; i++) {
    const wordOne = word1[i];
    const wordTwo = word2[i];

    map1.set(wordOne, (map1.get(wordOne) || 0) + 1);
    map2.set(wordTwo, (map2.get(wordTwo) || 0) + 1);
  }

  // we check the values difference
  let set1Values = [...map1.values()].sort((a, b) => a - b);
  let set2Values = [...map2.values()].sort((a, b) => a - b);

  for (let i = 0; i < set1Values.length; i++) {
    if (set1Values[i] !== set2Values[i]) return false;
  }

  // we check the key difference
  for (let [key] of map1) {
    if (!map2.has(key)) return false;
  }

  // after pass all the check we give the true
  return true;
};
