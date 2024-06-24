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

    // until we meet ']' we will contiue to stack
    if (ele !== "]") {
      stack.push(ele);
    } else {
      // first case we iterate back on stack
      // 1. we have stack 2. it's not '['
      // if so we continue to add pop + subStr
      let subStr = "";
      while (stack.length && stack[stack.length - 1] !== "[") {
        subStr = stack.pop() + subStr;
      }
      // when we find '[' we will pop it out
      stack.pop();

      //  and start to find our digits
      let digits = "";
      // we will continue our check until we meet isNaN
      while (stack.length && !isNaN(parseInt(stack[stack.length - 1])) {
        // what we pop will be in first then perv 'pop + current'
        digits = stack.pop() + digits;
      }

      // after we find our next char we will push what we have
      // subStr we find and digit we found
      stack.push(subStr.repeat(parseInt(digits)));
    }
  }
  // finally we will add them up
  return stack.join("");
};
