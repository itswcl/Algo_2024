/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
  // initial 2D board with empty string
  let board = [];
  let players = { X: "A", O: "B" };
  for (let i = 0; i < 3; i++) {
    board.push([]);
    for (let j = 0; j < 3; j++) {
      board[i].push("");
    }
  }

  // iterate moves and make the mark with the move
  for (let i = 0; i < moves.length; i++) {
    const mark = i % 2 === 0 ? "X" : "O";
    const [row, col] = moves[i];
    board[row][col] = mark;
    // after move 5 (idx 4) we will start to check winner with helper function
    if (i >= 4 && isWinner(board, mark)) return players[mark];
  }
  return moves.length === 9 ? "Draw" : "Pending";
};

// in helper function it will take the board and current mark
const isWinner = (board, mark) => {
  // we will iterate 3 time from idx 0 to idx 2 which means 3 step
  for (let i = 0; i < 3; i++) {
    // in the check we need to check row, column, and X
    // for example [0,0] + [0, 1] + [0, 2] / [0,0] +[1,0] +[2,0]
    if (
      (board[i][0] === board[i][1] &&
        board[i][1] === board[i][2] &&
        board[i][0] === mark) ||
      (board[0][i] === board[1][i] &&
        board[1][i] === board[2][i] &&
        board[0][i] === mark) ||
      (board[0][0] === board[1][1] &&
        board[1][1] === board[2][2] &&
        board[0][0] === mark) ||
      (board[0][2] === board[1][1] &&
        board[1][1] === board[2][0] &&
        board[0][2] === mark)
    )
      return true;
  }
  return false;
};
