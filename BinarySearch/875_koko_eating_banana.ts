/**
 * Example 1:

Input: piles = [3,6,7,11], h = 8
Output: 4
Example 2:

Input: piles = [30,11,23,4,20], h = 5
Output: 30
Example 3:

Input: piles = [30,11,23,4,20], h = 6
Output: 23
 */

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  // initial from 1 to max (from piles)
  // 1 becase eat at least 1 in hour
  let left = 1;
  let right = Math.max(...piles);

  // helper to check hours of eating
  const canEatAll = (hour) => {
    let hours = 0;
    for (const pile of piles) {
      // each round we check the pile eatting how many hours
      // add the hours up
      hours += Math.ceil(pile / hour);
    }
    // check if it goes over "h" our target
    return hours <= h;
  };

  while (left < right) {
    // mid resent the hour
    const mid = Math.floor((right - left) / 2) + left;
    // if it eats all our right is the mid
    if (canEatAll(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
