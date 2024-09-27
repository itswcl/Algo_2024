/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // initial right and left pointer
  let left = 0;
  let right = matrix.length - 1;
  // iterate marix to see which arr is fitable
  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    const midArr = matrix[mid];
    const midFirst = midArr[0];
    const midLast = midArr[midArr.length - 1];
    // if it's fitable we will check the inside of array with search function
    if (target >= midFirst && target <= midLast) return search(midArr, target);

    //if not our target is less than first meaing we need to go left (right = mid - 1)
    if (target < midFirst) right = mid - 1;
    // else target greater last element we need to go right (left = mid + 1)
    if (target > midLast) left = mid + 1;
  }
  return false;
};

const search = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    const num = arr[mid];
    if (num === target) return true;
    if (num > target) right = mid - 1;
    if (num < target) left = mid + 1;
  }
  return false;
};
