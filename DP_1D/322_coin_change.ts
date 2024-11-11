/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // initial the counts for each amount minitumn
  let counts = new Array(amount + 1).fill(Infinity);
  // set 0 to zero since 0 amount require 0 coint
  counts[0] = 0;
  // iterate the amount from index 1 (1 dollar)
  for (let i = 1; i <= amount; i++) {
    // in each amount we will iterate the provided coin
    for (let coin of coins) {
      // if the amount is greater equal than coin we update counts
      if (i >= coin) {
        // we find the find between current element and i-coin element + 1
        counts[i] = Math.min(counts[i], counts[i - coin] + 1);
      }
    }
  }

  // check fi the count for amount still in Infinity meaning we can't find min combo
  return counts[amount] === Infinity ? -1 : counts[amount];
};


/**
 * O(amount * coins length)
 * O(n) for the array instance
 */