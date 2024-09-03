/**
 * Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 */

var reverseVowels = function (s) {
  // we have vowels set
  const vowels = new Set('aeiouAEIOU'.split(''));
  // split in to array for easiness
  const strings = s.split('');
  // set our left and right pointer
  let left = 0;
  let right = s.length - 1;

  // continuely iterate while left less than right
  while (left < right) {
      const leftEle = strings[left];
      const rightEle = strings[right];
      
      // check our current element both left and right
      if (!vowels.has(leftEle)) left++;
      if (!vowels.has(rightEle)) right--;
      // when we find both vowels we update our element
      // increase left pointer and decrease right pointer
      if (vowels.has(leftEle) && vowels.has(rightEle)) {
          strings[left] = rightEle;
          strings[right] = leftEle;
          left++;
          right--;
      }
  }
  // in the end we return our result and join back to string
  return strings.join('')
};
