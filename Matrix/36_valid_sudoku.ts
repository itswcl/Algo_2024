/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // initial rows, cols, and boxes with set
  let rows = new Array(9).fill(null).map(() => new Set());
  let cols = new Array(9).fill(null).map(() => new Set());
  let boxes = new Array(9).fill(null).map(() => new Set());

  // iterate from 0 to 9 for row
  for (let r = 0; r < 9; r++) {
    // iterate 0 to 9 for col under each row
    for (let c = 0; c < 9; c++) {
      const val = board[r][c];
      // we skip if it's dot '.'
      if (val == ".") continue;
      // find box index
      const boxIdx = Math.floor(r / 3) * 3 + Math.floor(c / 3);

      // check if the val is in rows, cols, boxes already
      // if so it's NOT board
      if (rows[r].has(val) || cols[c].has(val) || boxes[boxIdx].has(val))
        return false;

      // add the val to row, col, boxes
      rows[r].add(val);
      cols[c].add(val);
      boxes[boxIdx].add(val);
    }
  }

  // in the end it's board we look for
  return true;
};
