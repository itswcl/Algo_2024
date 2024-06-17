/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s: string, k: number): number {
  // initial our vowels and count variable
  const vowels = "aeiouAEIOU".split("");
  let tempCount = 0;
  let maxCount = 0;

  // initial our first k element count
  for (let i = 0; i < k; i++) {
    const ele = s[i];
    if (vowels.includes(ele)) {
      tempCount++;
    }
  }
  // now our current max is first k count total
  maxCount = tempCount;

  //  iterate from k to end because we had iterate first k element besides k
  for (let i = k; i < s.length; i++) {
    if (maxCount === k) return k;
    // now we will find our tail and head Ele
    // eg. [a,b,c] k = 2
    // s[2] -> c / s[2 - 2] -> s[0] -> a
    // i - k represent the rage
    const tailEle = s[i];
    const headEle = s[i - k];

    // when we find our tail is vowel we increase count
    if (vowels.includes(tailEle)) tempCount++;

    // and head is vowel we will decrease 1 because it's no longer in k length
    if (vowels.includes(headEle)) tempCount--;

    // update our maxCount
    maxCount = Math.max(maxCount, tempCount);
  }
  return maxCount;
};
