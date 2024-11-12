/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  // initial distance and visited array to keep track min and point we visited
  // we using infinity to ensure we swap each time
  const dist = new Array(points.length).fill(Infinity);
  const visited = new Array(points.length).fill(false);
  // initial total to keep the distance we updated
  let total = 0;
  // starting point
  dist[0] = 0;

  // iterate thru points
  for (let i = 0; i < points.length; i++) {
    // first we need to find the min
    // initial inifnity and -1 for easy swap
    let min = Infinity;
    let minIdx = -1;

    for (let j = 0; j < points.length; j++) {
      // check not visited and able swap min idx
      if (!visited[j] && min > dist[j]) {
        min = dist[j];
        minIdx = j;
      }
    }
    // after loop updating current min and minIdx we will swap and update after
    visited[minIdx] = true;
    total += min;

    // second we update the distance with rest of points with current minPoint
    for (let i = 0; i < points.length; i++) {
      // we only update unviisted one
      if (!visited[i]) {
        // find the current distance
        const [prevX, prevY] = points[minIdx];
        const [curX, curY] = points[i];
        const distance = Math.abs(prevX - curX) + Math.abs(prevY - curY);
        // and update with current
        dist[i] = Math.min(dist[i], distance);
      }
    }
  }

  // get our total
  return total;
};

/**
 * O(N^2) we walk thru each point and points
 * O(N) because the distance and visit array
 */