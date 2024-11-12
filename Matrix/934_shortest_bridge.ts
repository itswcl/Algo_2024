/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function (grid) {
  // rows, cols, dirs, found first island point, flips, queues to add connected
  const rows = grid.length,
    cols = grid[0].length;
  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let foundStarting = false;
  let q = [];
  let flips = 0;

  // we use dfs to find our connected island_1
  const dfs = (r, c) => {
    // we have basd case when the point isn't valid
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] !== 1) return;
    // mark it as visited
    grid[r][c] = 2;
    q.push([r, c]);
    // iterate all 4 path to see if it's connected
    for (let [x, y] of dirs) {
      dfs(r + x, c + y);
    }
  };

  // iterate the grid until we find our first island with dfs
  for (let i = 0; i < rows; i++) {
    if (foundStarting) break;
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        dfs(i, j);
        foundStarting = true;
        break;
      }
    }
  }

  // now running bfs to check pervious island and gap with next island
  while (q.length) {
    // we want to keep this level node and run
    const size = q.length;
    for (let i = 0; i < size; i++) {
      const [r, c] = q.shift();
      for (let [x, y] of dirs) {
        const newR = r + x;
        const newC = c + y;
        // first to check if within the boundary
        if (newR >= 0 && newR < rows && newC >= 0 && newC < cols) {
          // then we check 2 case
          // if point is 1 meaning we find our island_2
          if (grid[newR][newC] === 1) return flips;
          // if point is 0
          if (grid[newR][newC] === 0) {
            // we will need to add back to queue and mark visited
            grid[newR][newC] = 2;
            q.push([newR, newC]);
          }
        }
      }
    }
    // after finish the current layer we will increase flips
    flips++;
  }
  // if we dont find second we get -1
  return -1;
};

/**
 * o(n+m) each node on grid, we vist each at once
 * O(n+m) we have dfs stack, bfs queue, array directions
 */
