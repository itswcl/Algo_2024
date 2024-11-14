/**
 * @param {number[]} data
 * @return {number}
 */
var minSwaps = function (data) {
  // first find all the 1s to see the the window size
  // for exampe we have 4 1s then window size is 4
  const countOnes = data.reduce((sum, num) => sum + num, 0);

  // we can stop if not valid to swap
  if (countOnes === 0 || countOnes === 1 || countOnes === data.length) return 0;

  // now we will counting our first window element
  let countZeros = 0;
  for (let i = 0; i < countOnes; i++) {
    if (data[i] === 0) countZeros++;
  }

  // we will initial our first swaps count
  // how many zeros in the window we will flips
  let minSwaps = countZeros;

  // we start moving our windows in the array
  for (let i = countOnes; i < data.length; i++) {
    const head = data[i - countOnes];
    const tail = data[i];
    if (head === 0) countZeros--;
    if (tail === 0) countZeros++;
    // each window moving we will check if the have less zeros to flip
    minSwaps = Math.min(minSwaps, countZeros);
  }

  return minSwaps;
};

/**
 * O(n) we iterate the loops
 * O(1) we have few variable 
 */