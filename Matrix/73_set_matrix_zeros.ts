/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  // initial rows and cols with zero flags for first row and col
  const rows = matrix.length;
  const cols = matrix[0].length;
  let firstRowZero = false;
  let firstColZero = false;

  // go thru first row if has zero
  for (let col = 0; col < cols; col++) {
    if (matrix[0][col] === 0) firstRowZero = true;
  }

  // go thru first col if has zero
  for (let row = 0; row < rows; row++) {
    if (matrix[row][0] === 0) firstColZero = true;
  }

  // update top and left element if current zero
  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      if (matrix[row][col] === 0) {
        matrix[0][col] = 0;
        matrix[row][0] = 0;
      }
    }
  }

  // update current with top and left zeros
  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      if (matrix[0][col] === 0 || matrix[row][0] === 0) {
        matrix[row][col] = 0;
      }
    }
  }

  // check the row flag is true we update to zeros for first row
  if (firstRowZero) {
    for (let col = 0; col < cols; col++) {
      matrix[0][col] = 0;
    }
  }

  // check col flag is true we update the zeros for the first col
  if (firstColZero) {
    for (let row = 0; row < rows; row++) {
      matrix[row][0] = 0;
    }
  }
};
