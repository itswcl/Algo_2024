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
  // initial our height, width, starting point, directions, queue
  let mazeHeight = maze.length;
  let mazeWidth = maze[0].length;
  let [startRow, startCol] = entrance;
  let directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let q = [[startRow, startCol, 0]];

  // iterate our q
  while (q.length) {
    const [curRow, curCol, step] = q.shift();

    // in each step we check the drections
    for (let [row, col] of directions) {
      const newRow = curRow + row;
      const newCol = curCol + col;
      // in each step we will check it's valid path
      const isPath =
        newRow >= 0 &&
        newRow < mazeHeight &&
        newCol >= 0 &&
        newCol < mazeWidth &&
        maze[newRow][newCol] === ".";
      if (isPath) {
        // if it's valid path we will check if it's our exit by
        // 1. edge point 0 or end length either row or col
        const isEdge =
          newRow === 0 ||
          newRow === mazeHeight - 1 ||
          newCol === 0 ||
          newCol === mazeWidth - 1;
        // 2. ensure we are not in the entrance point
        const isEntrance = newRow === startRow && newCol === startCol;
        // 3. either we find our step we initial our new step
        const newStep = step + 1;
        if (isEdge && !isEntrance) return newStep;

        // if not exit we will set a block to prevent dupication check
        maze[newRow][newCol] = "+";
        // add our new point to the q meaning we move 1 spot
        q.push([newRow, newCol, newStep]);
      }
    }
  }

  return -1;
};
