/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function (n, index, maxSum) {
  let left = 1,
    right = maxSum;

  const getSum = (mid) => {
    // while checking sum of array we will check both left and right sum
    // 1. find the sub arr size
    // left, index / mid - 1 <> right, n - index - 1 / mid - 1
    // 2. find the sum both side
    // size * (mid - 1) - (size * (size - 1)) / 2
    // 3. if any remining array after we will add 1 to end
    const leftSize = Math.min(index, mid - 1);
    let leftSum = leftSize * (mid - 1) - (leftSize * (leftSize - 1)) / 2;
    if (index >= mid) {
      // index - mid + 1 is the space remaining to fullfil with 1
      leftSum += index - mid + 1;
    }

    const rightSize = Math.min(n - index - 1, mid - 1);
    let rightSum = rightSize * (mid - 1) - (rightSize * (rightSize - 1)) / 2;
    if (n - index - 1 >= mid) {
      // n - index - mid is the space remaining to fullfill with 1
      rightSum += n - index - mid;
    }
    return leftSum + rightSum + mid;
  };

  // so we use binary search to go thru right and left with current mid
  while (left < right) {
    let mid = Math.floor((left + right + 1) / 2);
    // if the sum is under maxSum we will continue to check left
    if (getSum(mid) <= maxSum) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }
  return left;
};
