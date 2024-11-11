/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  // initial our high and width
  const rows = board.length;
  const cols = board[0].length;

  // initial dfs which take x, y and index
  const dfs = (row, col, index) => {
    // if the index meet the length we found
    if (index === word.length) return true;

    // check the boarder if still within the board
    // check the board charactor still meet the current index char
    if (
      row >= 0 &&
      row < rows &&
      col >= 0 &&
      col < cols &&
      board[row][col] === word[index]
    ) {
      // if we in the path we will mark the visited charactor
      const temp = board[row][col];
      board[row][col] = "#";

      // and check next direction if still valid
      const found =
        dfs(row + 1, col, index + 1) ||
        dfs(row - 1, col, index + 1) ||
        dfs(row, col + 1, index + 1) ||
        dfs(row, col - 1, index + 1);

      // backtrack the pervious charactor reset back to temp
      board[row][col] = temp;
      // give it back if the right track
      return found;
    }

    // if we out of boarder we can return false;
    return false;
  };

  // iterate each point when meet the requirment
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === word[0]) {
        if (dfs(i, j, 0)) return true;
      }
    }
  }

  // default
  return false;
};

/**
 * O(each point * each possible path) O(points * length of 3 path) -> O(N*L^3)
 * O(recursive stack call) -> O(n)
 */
