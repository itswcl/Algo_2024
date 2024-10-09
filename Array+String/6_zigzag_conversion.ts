/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  // if s length no enougth to create zigZag or only has 1 row we can return s
  if (s.length <= numRows || numRows == 1) return s;

  // initial our rows array, current row, goingDown switch
  let result = new Array(numRows).fill("");
  let curRow = 0;
  let goingDown = false;

  // iterate s
  for (let char of s) {
    // add char to each row
    result[curRow] += char;
    // check if it's 0 or last idx layer
    if (curRow === 0 || curRow == numRows - 1) {
      // switch direction
      goingDown = !goingDown;
    }
    // update current row
    curRow += goingDown ? 1 : -1;
  }

  // join our result array
  return result.join("");
};
