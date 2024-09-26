/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // order of sample matter,
  const OPEN = "({[";
  const CLOSE = ")}]";
  let stack = [];

  // iterate the tag in string
  for (let char of s) {
    // push the open tag right away
    if (OPEN.includes(char)) {
      stack.push(char);
    } else {
      // if it's close tag we will check if the idx is same idx in the open tags
      const closeIdx = CLOSE.indexOf(char);

      // latest element should be the OPEN bracket for the close idx.
      // if not it's false
      if (OPEN[closeIdx] !== stack[stack.length - 1]) return false;

      // if it is we pop the latest open tag
      stack.pop();
    }
  }

  // finally if the length 0 meaning we pop all open tag with close tag
  return stack.length === 0;
};
