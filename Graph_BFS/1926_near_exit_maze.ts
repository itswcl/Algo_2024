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

var nearestExit = function (maze, entrance) {
  // find our max height and width (prevent new point over the limit)
  const mazeHeight = maze.length;
  const mazeWidth = maze[0].length;
  // set our direction each iterate we will check up down left right
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  // show our entrance point
  const [startRow, startCol] = entrance;
  // start queue from starting point and step 0
  const queue = [[startRow, startCol, 0]];

  while (queue.length) {
    const [curRow, curCol, steps] = queue.shift();

    // go thru the direction to check each new point
    for (const [row, col] of directions) {
      const newRow = row + curRow;
      const newCol = col + curCol;

      // check if new point in the Maze and open
      const isWithinMaze =
        newRow >= 0 && newRow < mazeHeight && newCol >= 0 && newCol < mazeWidth;
      const isPath = isWithinMaze && maze[newRow][newCol] === ".";
      if (isPath) {
        // check if we are in edge point AND not entrance point
        const isNewInMaze =
          newRow === 0 ||
          newRow === mazeHeight - 1 ||
          newCol === 0 ||
          newCol === mazeWidth - 1;
        const isNotEntrance = !(newRow === startRow && newCol === startCol);
        const isExit = isNewInMaze && isNotEntrance;
        // if so we find our existing point and step + 1 is out
        if (isExit) return steps + 1;

        // if not we continue our queue and mark this point as wall '+'
        maze[newRow][newCol] = "+";
        queue.push([newRow, newCol, steps + 1]);
      }
    }
  }

  return -1;
};
