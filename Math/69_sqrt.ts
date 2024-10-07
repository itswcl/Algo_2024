/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) return x;

  let left = 0;
  let right = x;

  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    const midSqrt = mid * mid;

    if (midSqrt === x) return mid;
    if (midSqrt < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
};
