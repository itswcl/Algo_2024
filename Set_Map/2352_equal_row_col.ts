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
var equalPairs = function (grid: number[][]): number {
  const length = grid.length;
  // initial our map and count
  let map = new Map();
  let sum = 0;

  // first iterate the row to find each key:value
  for (let i = 0; i < length; i++) {
    const row = grid[i].join(",");
    map.set(row, (map.get(row) || 0) + 1);
  }

  // iterate the col to find the key:value if first time seeing combination we don't add count
  for (let j = 0; j < length; j++) {
    const col = grid.map((row) => row[j]).join(",");
    sum += map.get(col) || 0;
  }
  return sum;
};
