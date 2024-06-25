/**
 * Example 1:

Input: s = "3[a]2[bc]"
Output: "aaabcbc"
Example 2:

Input: s = "3[a2[c]]"
Output: "accaccacc"
Example 3:

Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"

 */

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s: string): string {
  let stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const ele = s[i];

    if (ele !== "]") {
      stack.push(ele);
    } else {
      // strings
      let strings = "";
      while (stack.length && stack[stack.length - 1] !== "[") {
        strings = stack.pop() + strings;
      }
      stack.pop();
      // digits
      let digits = "";
      while (stack.length && !isNaN(parseInt(stack[stack.length - 1]))) {
        digits = stack.pop() + digits;
      }
      const times = parseInt(digits);
      stack.push(strings.repeat(times));
    }
  }

  return stack.join("");
};
