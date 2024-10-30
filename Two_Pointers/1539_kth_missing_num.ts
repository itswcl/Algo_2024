/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  // initial 2 pointer left and right
  let left = 0;
  let right = arr.length - 1;

  // iterate thru arr with pointer
  while (left <= right) {
    // find the mid
    const mid = Math.floor((right + left) / 2);
    // find the missing gap with mid
    const gap = arr[mid] - (mid + 1);

    // moving pointer
    // missing < k moving left
    if (gap < k) {
      left = mid + 1;
      // missing > k moving right
    } else {
      right = mid - 1;
    }

    // left as our missing before and adding k
  }
  return left + k;
};

/**
 * O(log n) because we only search half way
 * O(1) because 2 pointer
 */