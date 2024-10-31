/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  const n = points.length;
  // initial dist and visited array
  const dist = new Array(n).fill(Infinity);
  const visited = new Array(n).fill(false);
  // initial total
  let total = 0;
  // set first dist is [0, 0]
  dist[0] = 0;

  for (let i = 0; i < n; i++) {
    // initial our base min and minIdx for swap
    let min = Infinity;
    let minIdx = -1;

    // iterate to update current min and minIdx when not visited
    for (let j = 0; j < n; j++) {
      if (!visited[j] && dist[j] < min) {
        min = dist[j];
        minIdx = j;
      }
    }

    // now we mark the minIdx we visited and update total
    visited[minIdx] = true;
    total += min;

    // iterate n again to update current min for each route and check current is min
    for (let k = 0; k < n; k++) {
      if (!visited[k]) {
        const distance =
          Math.abs(points[minIdx][0] - points[k][0]) +
          Math.abs(points[minIdx][1] - points[k][1]);
        dist[k] = Math.min(distance, dist[k]);
      }
    }
  }
  return total;
};
