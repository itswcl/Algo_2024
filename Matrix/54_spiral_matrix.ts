/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  // initial result arr and the boundaries
  let result = [];
  let top = 0;
  let left = 0;
  let bottom = matrix.length - 1;
  let right = matrix[0].length - 1;

  // while loop when it's in the scope
  while (top <= bottom && left <= right) {
    // first loop to get thru top element
    for (let i = left; i <= right; i++) {
      // add to result
      result.push(matrix[top][i]);
    }
    // increase top
    top++;

    // second loop to get thru right element
    for (let i = top; i <= bottom; i++) {
      // add to result
      result.push(matrix[i][right]);
    }
    // decrease right
    right--;

    // before doing 3rd and 4th loop we need to check if still in the boundaries
    // check if top is less equal to bototm
    if (top <= bottom) {
      // third loop to get through the bottom row
      for (let i = right; i >= left; i--) {
        // add to result
        result.push(matrix[bottom][i]);
      }
      // decrease bottom
      bottom--;
    }

    // check if left is less qual to right
    if (left <= right) {
      // forht loop to get thru next top
      for (let i = bottom; i >= top; i--) {
        // add to result
        result.push(matrix[i][left]);
      }
      // increase left
      left++;
    }
  }
  // get result
  return result;
};
