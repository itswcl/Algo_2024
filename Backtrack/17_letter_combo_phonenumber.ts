/**
 * Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  // initial our empty, result, map
  if (digits.length === 0) return [];
  const result = [];
  const phoneMap = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  };

  // in backtracking we pass our current combo and "next digit"
  const backtracking = (combination, digits) => {
    // if no more digits then we push our combo
    if (digits.length === 0) {
      result.push(combination);
    } else {
      // in each recursion
      // we check our current digit and find our strings
      const digit = digits[0];
      const letters = phoneMap[digit];

      // we iterate the string
      for (const letter of letters) {
        // our next combo is current combo + letter
        const newCombination = combination + letter;

        // in each letter we recursive call backtracking
        // with our next
        const nextDigit = digits.substring(1);
        backtracking(newCombination, nextDigit);
      }
    }
  };

  // call our backtracking with initial state
  // empty string with the digits
  backtracking("", digits);

  // result
  return result;
};
