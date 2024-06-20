/**
 * Example 1:

Input: s = "leet**cod*e"
Output: "lecoe"
Explanation: Performing the removals from left to right:
- The closest character to the 1st star is 't' in "leet**cod*e". s becomes "lee*cod*e".
- The closest character to the 2nd star is 'e' in "lee*cod*e". s becomes "lecod*e".
- The closest character to the 3rd star is 'd' in "lecod*e". s becomes "lecoe".
There are no more stars, so we return "lecoe".
Example 2:

Input: s = "erase*****"
Output: ""
Explanation: The entire string is removed, so we return an empty string.
 */

/**
 * @param {string} s
 * @return {string}
 */

const SPECIAL = "*";

var removeStars = function (s: string | any[]) {
  let result: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === SPECIAL) {
      result.pop();
    } else {
      result.push(char);
    }
  }

  return result.join("");
};
