/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  // we will have set to store the number we check before
  let visited = new Set();

  // if new we iterate
  while (!visited.has(n)) {
    // add to set
    visited.add(n);

    // set our n to next number
    n = getNextNum(n);
  }

  // in the end we check if it's 1
  return n === 1;
};

const getNextNum = (n) => {
  let total = 0;

  // as long as n not 0 we will continue because we need to check 2 digit
  while (n) {
    // first will calculate second digit
    const digit = n % 10;
    total += digit * digit;
    // then we set our n to new first digit until our floor is 0 (ex, 9)
    n = Math.floor(n / 10);
  }

  // finally we get to total
  return total;
};
