/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  // initial dirs we only need 4 path
  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  // call bfs while checking boarders
  const bfs = (i, j) => {
    const q = [[i, j]];
    board[i][j] = "T";

    while (q.length) {
      const [x, y] = q.shift();
      for (let [dx, dy] of dirs) {
        const newX = x + dx;
        const newY = y + dy;

        if (
          newX >= 0 &&
          newX < board.length &&
          newY >= 0 &&
          newY < board[0].length &&
          board[newX][newY] == "O"
        ) {
          board[newX][newY] = "T";
          q.push([newX, newY]);
        }
      }
    }
  };

  // for loop to check left and right boarder
  for (let i = 0; i < board.length; i++) {
    if (board[i][0] == "O") bfs(i, 0);
    if (board[i][board[0].length - 1] == "O") bfs(i, board[0].length - 1);
  }
  // for loop to check top and bottom boarder
  for (let i = 0; i < board[0].length; i++) {
    if (board[0][i] == "O") bfs(0, i);
    if (board[board.length - 1][i] == "O") bfs(board.length - 1, i);
  }

  // nest for loop to flip based the current
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == "O") {
        board[i][j] = "X";
      }

      if (board[i][j] == "T") {
        board[i][j] = "O";
      }
    }
  }

  return board;
};
