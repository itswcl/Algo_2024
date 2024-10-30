/**
 * @param {number} x
 * @param {number} y
 * @param {number} target
 * @return {boolean}
 */
var canMeasureWater = function (x, y, target) {
  // default
  if (target > x + y) return false;

  // set visited set to prevent revisit
  let visited = new Set();
  const dfs = (jX, jY) => {
    // if we found target already then it's true
    if (jX === target || jY === target || jX + jY === target) return true;
    // we start to add visited state
    const state = `${jX},${jY}`;
    if (visited.has(state)) return false;
    visited.add(state);

    // now we need to check each action both empty, both fill, move x to jY, move y to jX
    return (
      // check fill either one
      dfs(x, jY) ||
      dfs(jX, y) ||
      // empty either jug
      dfs(0, jY) ||
      dfs(jX, 0) ||
      // now we try to move x to y
      dfs(Math.max(0, jX - (y - jY)), Math.min(y, jX + jY)) ||
      // we try to move y to X
      dfs(Math.min(x, jX + jY), Math.max(0, jY - (x - jX)))
    );
  };

  return dfs(0, 0);

  // we create the gcd helpr to continuesly find the reminder
  // const gcd = (a, b) => { b === 0 ? a : gcd(b, a % b) }

  // check the reminder of target if meet 0
  // return target % gcd(x, y) === 0
};

/**
 * time O(x*y) because max number of state is possible for water level of jug
 * space O(x*y) visited and callstack
 */
