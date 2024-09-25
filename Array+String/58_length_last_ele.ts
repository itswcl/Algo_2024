/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // find our length and iniital count
  let n = s.length;
  let count = 0;

  // loop thru the char
  while (n > 0) {
    // start we will -1 because it start from n - 1 for last char
    n--;
    const char = s[n];
    // if it's not empty space we will add count
    if (char !== " ") {
      count++;
      // we use count > 0 to check if we have start count our string
      // by the mean it will skip first few space becase the count is 0
    } else if (count > 0) {
      return count;
    }
    // if we see empty char ' ' meaning we at right point
  }

  // in the end we get our count
  return count;
};
