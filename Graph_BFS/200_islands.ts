/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // initial counter for islands
  let islands = 0;
  // initial directions for top right bottom left
  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  // helper with x y point
  const helper = (i, j) => {
    // once we get in we will update the current to 0 (visited)
    grid[i][j] = "0";

    // initial queue to hold current i and j
    // we use queue to visit each related point which is '1'
    let queue = [[i, j]];

    // contiuesly to go thru the queue which we will add next '1' in until no more
    while (queue.length) {
      const [x, y] = queue.shift();
      for (let [dx, dy] of dirs) {
        const newX = x + dx;
        const newY = y + dy;
        // check if we fall into boundary and it's 1 we will mark to visited and push to q
        if (
          newX >= 0 &&
          newX < grid.length &&
          newY >= 0 &&
          newY < grid[0].length &&
          grid[newX][newY] == "1"
        ) {
          queue.push([newX, newY]);
          grid[newX][newY] = "0";
        }
      }
    }
  };

  // iterate each point in the grid with helper
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == "1") {
        // if we visited and it's 1 we add to count
        islands++;
        helper(i, j);
      }
    }
  }

  // get count
  return islands;
};
