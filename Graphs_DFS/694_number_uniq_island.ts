/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands = function (grid) {
  // initial our rows cols
  const rows = grid.length;
  const cols = grid[0].length;
  // initial the set we check if viisted and uniq path
  let visited = new Set();
  let distPath = new Set();
  // initial the directions
  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  // dfs we need take current x y and starting point
  const dfs = (r, c, path, startR, startC) => {
    // each new dfs we consider visited and add the path
    visited.add(`${r},${c}`);
    path.push(`${r - startR},${c - startC}`);

    // with each point we will check the directions
    for (let [dx, dy] of dirs) {
      const newR = r + dx;
      const newC = c + dy;
      // if the new point is qulified 1. within boarder 2. not visited
      // we will run dfs with new point
      if (
        newR >= 0 &&
        newR < rows &&
        newC >= 0 &&
        newC < cols &&
        grid[newR][newC] === 1 &&
        !visited.has(`${newR},${newC}`)
      ) {
        dfs(newR, newC, path, startR, startC);
      }
    }
  };

  // iterate each point
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // when we see it's 1 and not visited yet
      if (grid[i][j] === 1 && !visited.has(`${i},${j}`)) {
        // start our dfs with empty path
        let path = [];
        dfs(i, j, path, i, j);
        // add to distPath after dfs
        distPath.add(path.toString());
      }
    }
  }
  return distPath.size;
};
