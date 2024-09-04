/**
 * Example 1:

Input: chars = ["a","a","b","b","c","c","c"]
Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
Example 2:

Input: chars = ["a"]
Output: Return 1, and the first character of the input array should be: ["a"]
Explanation: The only group is "a", which remains uncompressed since it's a single character.
Example 3:

Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".
 */

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  // initial write and read idx
  let writeIdx = 0;
  let readIdx = 0;

  // iterate thru readIdx
  while (readIdx < chars.length) {
    // initial count and current char
    const curChar = chars[readIdx];
    let count = 0;

    // continue to increase curChar is same as iteratation
    while (curChar === chars[readIdx]) {
      count++;
      readIdx++;
    }

    // once it's done we update our writeIdx with current char
    chars[writeIdx] = curChar;
    // increase our writeIdx and we ready for next writeIdx
    writeIdx++;

    // we have our count we need to iterate and update our writeIdx
    // only if the count greater than 1 (per ask)
    if (count > 1) {
      const countStr = count.toString();
      for (let i = 0; i < countStr.length; i++) {
        chars[writeIdx] = countStr[i];
        writeIdx++;
      }
    }
  }
  return writeIdx;
};
