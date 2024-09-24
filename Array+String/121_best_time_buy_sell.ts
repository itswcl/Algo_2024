/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // initial our min with Infinity meaning it will swap in first run
  let min = Infinity;
  // intial our profit
  let profit = 0;

  // iterate thru price and contiunely update profit and min
  for (let price of prices) {
    profit = Math.max(profit, price - min);
    min = Math.min(min, price);
  }

  // we will get the maxProfit
  return profit;
};
