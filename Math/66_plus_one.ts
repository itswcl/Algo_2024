/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // iterate back of digits,
  for (let i = digits.length - 1; i >= 0; i--) {
    // if less than 9 we add and return
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    // otherwise set to 0
    digits[i] = 0;
  }

  // in the end we will add 1 to front since we continue to find 0 in the loop
  digits.unshift(1);
  return digits;
};
