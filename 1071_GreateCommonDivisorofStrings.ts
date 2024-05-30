/**
 * Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
 */

function gcdOfStrings(str1: string, str2: string): string {
  let result = str1;
  if (str1.indexOf(str2) === -1) return "";
  result = result.replace(str2, "");

  return result;
}
