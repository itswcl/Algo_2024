/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // sort intervals by [0]
  intervals.sort((a, b) => a[0] - b[0]);
  // initial mergeResult with item[0];
  let merge = [intervals[0]];
  // initial currentInterval (start)
  let curInterval = intervals[0];

  // iterate thru index 1 because we have 0 used
  for (let i = 1; i < intervals.length; i++) {
    // compare the current end and nextStart
    const [curStart, curEnd] = curInterval;
    const [nextStart, nextEnd] = intervals[i];

    if (curEnd >= nextStart) {
      // update end -> current[1]
      curInterval[1] = Math.max(curEnd, nextEnd);
    } else {
      // update current
      curInterval = intervals[i];
      // push current to merge result
      merge.push(curInterval);
    }
  }

  // return merge
  return merge;
};
