/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  // initial our total, and current cost. and starting point;
  let total = 0;
  let current = 0;
  let starting = 0;

  // iterate thru gas and count total and current
  for (let i = 0; i < gas.length; i++) {
    total += gas[i] - cost[i];
    current += gas[i] - cost[i];
    // each time we will check if current less than zero
    if (current < 0) {
      // meaning we dont have enought so we need to reset current
      current = 0;
      // and starting is current index + 1
      starting = i + 1;
    }
  }

  // in end we will check if total still positive then we return starting else -1
  return total >= 0 ? starting : -1;
};
