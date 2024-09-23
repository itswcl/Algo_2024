/**
 * @param {number} n
 */
var TicTacToe = function (n) {
  this.n = n;
  // we will build our array to keep row and col counting
  this.rows = new Array(n).fill(0);
  this.cols = new Array(n).fill(0);
  // also count the diagonal and anti
  this.diagonal = 0;
  this.antidiagonal = 0;
};

/**
 * @param {number} row
 * @param {number} col
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function (row, col, player) {
  const step = player === 1 ? 1 : -1;
  // now we count toward each mark player makes.
  this.rows[row] += step;
  this.cols[col] += step;

  // row and col same meaning it's diagonal
  if (row === col) this.diagonal += step;

  // row + col is equal to n - 1 then it's diagonal
  if (row + col === this.n - 1) this.antidiagonal += step;

  // after we add up current count for rows, cols, diagonal, antidiagonal we need to check if we meet the goal
  const n = this.n;
  if (
    n === Math.abs(this.rows[row]) ||
    n === Math.abs(this.cols[col]) ||
    n === Math.abs(this.diagonal) ||
    n === Math.abs(this.antidiagonal)
  )
    return player;
  return 0;
};

/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */
