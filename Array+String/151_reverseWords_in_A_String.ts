/**
 * Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 */

function reverseWords(s: string): string {
  let letters = s.split(" ");
  let resultArr: string[] = [];

  for (let i = letters.length - 1; i >= 0; i--) {
    const currentEle = letters[i];
    if (currentEle.length === 0) {
      continue;
    }

    resultArr.push(currentEle + " ");
  }
  return resultArr.join("").trim();
}

var reverseWords1 = function (s) {
  // intial our string arr
  const arr = s.split(" ");
  // intial left and right pointer
  let left = 0;
  let right = arr.length - 1;

  // iterate thru left and right pointer
  while (left < right) {
    const leftEle = arr[left];
    const rightEle = arr[right];
    // switch left and right element
    [arr[left], arr[right]] = [rightEle, leftEle];
    left++;
    right--;
  }

  // filter our '' element and join with space
  return arr.filter((ele) => ele.length !== 0).join(" ");
};

function reverseWords2(s: string): string {
  // Split the string into words, handling multiple spaces
  let words = s.trim().split(/\s+/);
  // Reverse the array of words
  words.reverse();
  // Join the words back into a string with a single space separator
  return words.join(" ");
}
