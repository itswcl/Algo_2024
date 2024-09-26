/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // initial memo to hold the value we saw earlier
  let memo = new Array(n + 1).fill(0);

  // we will need helper from 0 to n with memo
  return climb_help(0, n, memo);
};

const climb_help = (i, n, memo) => {
  // default case
  // 1. when 0 > current n we find zero combination
  if (i > n) return 0;
  // 2. when 1 === 1 we find one step
  if (i === n) return 1;
  // 3. when we have in the memo we will get value from memo
  if (memo[i] > 0) return memo[i];

  // memo will be from i+1 to n and i+2 to n meaning 1 step or 2 step
  memo[i] = climb_help(i + 1, n, memo) + climb_help(i + 2, n, memo);

  // end will get the current i value
  return memo[i];
};
