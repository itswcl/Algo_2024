/**
 * Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 */

function reverseVowels(s: string): string {
  // get the set of vowels including upper case
  const vowels = new Set("aeiouAEIOU".split(""));
  // get arrary of letter for easy swap
  let letters = s.split("");
  // set right and left pointer
  let leftIdx = 0;
  let rightIdx = letters.length - 1;

  // looping until pointers meet
  while (leftIdx < rightIdx) {
    const leftEle = letters[leftIdx];
    const rightEle = letters[rightIdx];

    // if left pointer not vowels we contiue left pointer
    if (!vowels.has(leftEle)) {
      leftIdx++;
      continue;
    }

    // when left pointer meet we will check right pointer
    if (!vowels.has(rightEle)) {
      rightIdx--;
      continue;
    }

    // til both meet vowels we will swap and move both pointer
    if (vowels.has(leftEle) && vowels.has(rightEle)) {
      letters[leftIdx] = rightEle;
      letters[rightIdx] = leftEle;
      leftIdx++;
      rightIdx--;
    }
  }
  // since it's array we need to join to be string
  return letters.join("");
}
