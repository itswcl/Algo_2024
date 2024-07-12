/**
 * Example 1:


Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
Example 2:

Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
Example 3:

Input: grid = [[0,2]]
Output: 0
Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  // initial our rows and col size
  const rows = grid.length;
  const cols = grid[0].length;
  // initial direction and queue
  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const queue = [];
  // find fresh and time
  let freshOranges = 0;
  let timeElapsed = 0;

  // go thru each point to find 2 thins
  // 1. fresh oranges total
  // 2. bad orange location with initial time elapsed '0'
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const curOrange = grid[r][c];
      if (curOrange === 1) {
        freshOranges++;
      }

      if (curOrange === 2) {
        queue.push([r, c, timeElapsed]);
      }
    }
  }

  // after check we dont find any fresh meaning it's all bad no time to go bad
  if (freshOranges === 0) return timeElapsed;

  // iterate the queue
  while (queue.length) {
    // find our current row and col
    const [curRow, curCol, curTime] = queue.shift();

    // iterate the directions
    for (const [row, col] of dirs) {
      const nextRow = curRow + row;
      const nextCol = curCol + col;

      // check our next move is within the grid and it's good orange
      const isWithinGrid =
        nextRow >= 0 && nextRow < rows && nextCol >= 0 && nextCol < cols;
      if (isWithinGrid && grid[nextRow][nextCol] === 1) {
        // if it's good the it goes bad
        grid[nextRow][nextCol] = 2;
        freshOranges--;
        timeElapsed = curTime + 1;

        // and we move to next point by push to our queue
        queue.push([nextRow, nextCol, timeElapsed]);
      }
    }
  }

  // after queue we dont have any fresh left we return the time we used
  // if we still have fresh one it's failed
  return freshOranges === 0 ? timeElapsed : -1;
};
