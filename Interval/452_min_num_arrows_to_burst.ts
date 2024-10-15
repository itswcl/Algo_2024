/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  if (points.length == 0) return 0;
  // sort points by end
  points.sort((a, b) => a[1] - b[1]);

  // initial count and start 'end'
  let count = 1;
  let currentEnd = points[0][1];

  // iterate thru points from index 1
  for (let i = 1; i < points.length; i++) {
    const [nextStart, nextEnd] = points[i];
    // check if current start greater than end
    if (nextStart > currentEnd) {
      count++;
      // end with new ned
      currentEnd = nextEnd;
    }
  }
  // get count
  return count;
};
