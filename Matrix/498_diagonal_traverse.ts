/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  if (!mat.length || !mat[0].length) return [];
  let result = [];
  let rows = mat.length;
  let cols = mat[0].length;
  let row = 0;
  let col = 0;
  let dirUp = true;

  while (result.length < rows * cols) {
    result.push(mat[row][col]);

    if (dirUp) {
      // while going up if we hitting end and cols is null
      // we moving 'down' by increasing row
      if (col === cols - 1) {
        row++;
        dirUp = false;
      } else if (row === 0) {
        // while going up if we hitting end and rows is null
        // we moving 'right' by increasing col
        col++;
        dirUp = false;
      } else {
        // continuesly moving top right
        row--;
        col++;
      }
    } else {
      // while moving down if we hit rows null
      // we moving 'right' by increase col
      if (row === rows - 1) {
        col++;
        dirUp = true;
        // while moving down if we hit cols null
        // we moving 'down' row
      } else if (col === 0) {
        row++;
        dirUp = true;
      } else {
        // continue moving left bottom
        row++;
        col--;
      }
    }
  }
  return result;
};

/**
 * time O(rows x cols);
 * space O(rows x cols);
 */