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
var closeStrings = function (word1: string, word2: string): boolean {
  if (word1.length !== word2.length) return false;

  let word1Map = new Map();
  let word2Map = new Map();

  for (let i = 0; i < word1.length; i++) {
    const letter1 = word1[i];
    const letter2 = word2[i];
    word1Map.set(letter1, (word1Map.get(letter1) || 0) + 1);
    word2Map.set(letter2, (word2Map.get(letter2) || 0) + 1);
  }

  for (let [key, value] of word1Map) {
    if (!word2Map.has(key)) return false;
  }

  let sort1 = [...word1Map.values()].sort((a, b) => a - b);
  let sort2 = [...word2Map.values()].sort((a, b) => a - b);

  for (let i = 0; i < sort1.length; i++) {
    if (sort1[i] !== sort2[i]) return false;
  }

  return true;
};
