/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  // we need to helpe to check the palindrome
  const helper = (left, right) => {
    // iterate thru with param
    while (left < right) {
      if (s[left] != s[right]) return false;
      left++;
      right--;
    }
    // if pass all it's true
    return true;
  };
  // initial 2 pointer both left and right
  let left = 0;
  let right = s.length - 1;

  // iterate thru until pointer meet
  while (left < right) {
    // if the char not same we will check with helper both left and right
    // either one true we will return true;
    if (s[left] != s[right])
      return helper(left + 1, right) || helper(left, right - 1);
    // if same we dont need to do anything just moving pointer
    left++;
    right--;
  }

  // if we pass all we will get true
  return true;
};

/**
 * time is O(n) because the worse is visting each char
 * and if check we only went once which is O(n)
 * space is O(1) because we dont use extra input and the output is consistant value true/false
 */
