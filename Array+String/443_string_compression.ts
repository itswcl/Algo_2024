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
  // initial our write and read idx
  let writeIdx = 0;
  let readIdx = 0;

  // iterate thru chars
  while (readIdx < chars.length) {
    // initial our current char and count
    let currentChar = chars[readIdx];
    let count = 0;

    // while readIdx within chars length and the char is same
    while (readIdx < chars.length && currentChar === chars[readIdx]) {
      // increase our reading and increase count
      readIdx++;
      count++;
    }
    // once we find not match char
    // we will set our current writeIdx to our char
    // increase writeIdx since the current writeIdx updated
    chars[writeIdx] = currentChar;
    writeIdx++;

    // we check if we have more than 1 same char
    if (count > 1) {
      // transform to string for iterate
      const countStr = count.toString();
      // go thru our count string
      for (let i = 0; i < countStr.length; i++) {
        // we will update the current writeIdx
        // and increase our writeIdx since we write our new wrieIdx with count
        chars[writeIdx] = countStr[i];
        writeIdx++;
      }
    }
  }
  // finally we return our current length of updated length
  return writeIdx;
};
