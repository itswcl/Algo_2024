/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  intervals.push(newInterval);
  intervals.sort((a, b) => a[0] - b[0]);
  let merge = [intervals[0]];
  let curInterval = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const [curStart, curEnd] = curInterval;
    const [nextStart, nextEnd] = intervals[i];

    if (curEnd >= nextStart) {
      curInterval[1] = Math.max(curEnd, nextEnd);
    } else {
      curInterval = intervals[i];
      merge.push(curInterval);
    }
  }
  return merge;
};
