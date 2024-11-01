/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function (arr1, arr2) {
  // initial set to contains all the substring from arr1
  const set = new Set();

  // iterate the array 1 with each element and iterate each one of substring adding to set
  arr1.forEach((element) => {
    const str = element.toString();
    for (let i = 0; i < str.length; i++) {
      const subStr = str.slice(0, i + 1);
      set.add(subStr);
    }
  });
  // initial our maxLength
  let maxLength = 0;
  // iterate array 2 with each element and itertaet each substring if it's in set we check maxlength
  arr2.forEach((element) => {
    const str = element.toString();
    for (let i = 0; i < str.length; i++) {
      const subStr = str.slice(0, i + 1);
      if (set.has(subStr)) {
        maxLength = Math.max(maxLength, subStr.length);
      }
    }
  });

  // return maxlength
  return maxLength;
};

/**
 * O((N+K)*M);
 * O(N)
 */
