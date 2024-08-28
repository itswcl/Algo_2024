/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  if (points.length === 0) return 0;

  points.sort((a, b) => a[1] - b[1]);
  // at lease 1 burst happen
  let count = 1;
  // initial our end from first interval
  let end = points[0][1];

  // start from index 1
  for (let i = 1; i < points.length; i++) {
    const start = points[i][0];
    // if our current start greater than intiial end we increase our burst
    // update our newly end
    if (start > end) {
      count++;
      end = points[i][1];
    }
  }
  return count;
};
