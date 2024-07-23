/**
 * Example 1:

Input: n = 4
Output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
Example 2:

Input: n = 25
Output: 1389537
 */

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  if (n === 0) return 0;
  // if (n === 1 || n === 2) return 1;
  // const arr = new Array(n + 1);
  // arr[0] = 0;
  // arr[1] = 1;
  // arr[2] = 1;
  // for (let i = 3; i <= n; i++) {
  //     arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
  // }
  // return dp[n]

  let t0 = 0,
    t1 = 1,
    t2 = 1;
  for (let i = 3; i <= n; i++) {
    let tn = t0 + t1 + t2;
    t0 = t1;
    t1 = t2;
    t2 = tn;
  }
  return t2;
};
