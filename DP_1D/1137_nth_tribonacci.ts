/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  // 0 1 1 2 3 5.......
  let n0 = 0,
    n1 = 1,
    n2 = 1;
  if (!n) return n0;

  // we start from 3 because we have initial our 0,1,2 value
  // we stop at 'n'
  for (let i = 3; i <= n; i++) {
    // in each iteration we update our n0,n1,n2
    // based on our new number 0+1+1 = 2 (next num)
    const newN = n0 + n1 + n2;
    n0 = n1;
    n1 = n2;
    n2 = newN;
  }

  // finally our n2 will be the latest fi number
  return n2;
};
