/**
 * Example 1:


Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
Output: 1
Explanation: There is 1 equal row and column pair:
- (Row 2, Column 1): [2,7,7]
Example 2:


Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
Output: 3
Explanation: There are 3 equal row and column pairs:
- (Row 0, Column 0): [3,1,2,2]
- (Row 2, Column 2): [2,4,2,2]
- (Row 3, Column 2): [2,4,2,2]
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  let map = new Map();
  let sum = 0;

  // iterate as "row"
  for (let item of grid) {
    // join with comma because arrary is with , as default
    // [1,2,3] => '123'
    const row = item.join(",");
    // we set base the string and count
    map.set(row, (map.get(row) | 0) + 1);
  }

  // iterate as "col"
  for (let i = 0; i < grid.length; i++) {
    // we need to find each element of idx element
    // join with , as array default
    const col = grid.map((row) => row[i]).join(",");
    // finally we add the count if we found in the map
    sum += map.get(col) | 0;
  }
  return sum;
};
