/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  if (intervals.length === 0) return 0;

  // sort our interval [1,2][2,3][3,4]
  intervals.sort((a, b) => a[1] - b[1]);
  let count = 0;
  let end = intervals[0][1];

  // start from index 1
  for (let i = 1; i < intervals.length; i++) {
    // compare current start and end
    const start = intervals[i][0];
    if (start < end) {
      // if our end greater than current start
      // meaning we need to remove overlap
      count++;
    } else {
      // if not we move to next end
      end = intervals[i][1];
    }
  }
  return count;
};
