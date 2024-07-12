/**
 * Example 1:


Input: maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], entrance = [1,2]
Output: 1
Explanation: There are 3 exits in this maze at [1,0], [0,2], and [2,3].
Initially, you are at the entrance cell [1,2].
- You can reach [1,0] by moving 2 steps left.
- You can reach [0,2] by moving 1 step up.
It is impossible to reach [2,3] from the entrance.
Thus, the nearest exit is [0,2], which is 1 step away.
Example 2:


Input: maze = [["+","+","+"],[".",".","."],["+","+","+"]], entrance = [1,0]
Output: 2
Explanation: There is 1 exit in this maze at [1,2].
[1,0] does not count as an exit since it is the entrance cell.
Initially, you are at the entrance cell [1,0].
- You can reach [1,2] by moving 2 steps right.
Thus, the nearest exit is [1,2], which is 2 steps away.
Example 3:


Input: maze = [[".","+"]], entrance = [0,0]
Output: -1
Explanation: There are no exits in this maze.
 */

/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
  // find our max height and width (prevent new point over the limit)
  const mazeHeight = maze.length;
  const mazeWidth = maze[0].length;
  // show our entrance point
  const [startRow, startCol] = entrance;
  // set our direction each iterate we will check up down left right
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  // start queue from starting point and step 0 initial point
  const queue = [[startRow, startCol, 0]];

  while (queue.length) {
    // we get our initial point from queue
    const [curRow, curCol, steps] = queue.shift();

    // go thru the direction meaning we are trying next step and see if valid
    for (const [row, col] of directions) {
      const nextRow = curRow + row;
      const nextCol = curCol + col;

      // after our step, check if we are in the Maze by
      // 1. row still positive and within the height
      // 2. col still positive and within the width
      // 3. if it's '.' meaning it's not wall
      const isWithinMaze =
        nextRow >= 0 &&
        nextRow < mazeHeight &&
        nextCol >= 0 &&
        nextCol < mazeWidth;
      const isPath = isWithinMaze && maze[nextRow][nextCol] === ".";
      if (isPath) {
        // check if the are in the edge and not entrance
        // 1. row 0 meaning top of boundry / height - 1 meaning buttom of boundry
        // 2. col 0 meaning left of boundry / width - 1 meaning right of boundry
        // 3. row = startRow, col = startCol to prevent we in the entrance
        const isNewInMaze =
          nextRow === 0 ||
          nextRow === mazeHeight - 1 ||
          nextCol === 0 ||
          nextCol === mazeWidth - 1;
        const isNotEntrance = !(nextRow === startRow && nextCol === startCol);
        const isExit = isNewInMaze && isNotEntrance;
        // if so we find our edge point and next step it will be out
        const nextStep = steps + 1;
        if (isExit) return nextStep;

        // if not we continue our queue and mark this point as wall '+'
        maze[nextRow][nextCol] = "+";
        queue.push([nextRow, nextCol, nextStep]);
      }
    }
  }

  // if we dont find exit we return -1
  return -1;
};
