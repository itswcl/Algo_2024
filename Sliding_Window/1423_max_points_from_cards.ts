/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  // the idea is the total minus the minimum sum of arr within the window

  // we initial total, window, windowSum, and minSubarray
  let total = 0;
  let windowSize = cardPoints.length - k;
  let windowSum = 0;
  let minSubArrSum = 0;

  // we will iterate each point
  for (let i = 0; i < cardPoints.length; i++) {
    // we will culculate our total
    const point = cardPoints[i];
    total += point;

    // when the i is before the windowSize
    // we will build our initial windowSum and minArrSum
    if (i < windowSize) {
      windowSum += point;
      minSubArrSum += point;
    }

    // once we reach the window size
    // we can start moving the window and update our minSubArrSum
    if (i >= windowSize) {
      windowSum += point - cardPoints[i - windowSize];
      minSubArrSum = Math.min(minSubArrSum, windowSum);
    }
  }

  // in the end we use total and subtract min
  return total - minSubArrSum;
};

/**
 * O(n) points length
 * O(1) few vabialbe
 */
