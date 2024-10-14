/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  // initial our rows, cols, reference board, directions
  const rows = board.length;
  const cols = board[0].length;
  const refBoard = board.map((row) => [...row]);
  const dirs = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  // iterate thru each element
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // add a temp counter for alives
      let alives = 0;

      // in each element we will go thru our directions (8 paths)
      for (let [x, y] of dirs) {
        const newRow = row + x;
        const newCol = col + y;
        // if it's within boundary and reference board is 1 we increase alives

        if (
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols &&
          refBoard[newRow][newCol] === 1
        )
          alives++;
      }

      // after direction loop
      // we check if current element is one
      if (refBoard[row][col] === 1) {
        // if one we check it's under or over population
        if (alives < 2 || alives > 3) {
          board[row][col] = 0;
        }
      } else {
        // we chekc if it's right population - 3
        if (alives === 3) {
          board[row][col] = 1;
        }
      }
    }
  }
};
