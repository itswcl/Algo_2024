/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  // intial total
  let total = 0;

  const count = (idx, xor) => {
    // in the helper we check if we meet lastidx+1
    if (idx === nums.length) {
      // if so we will get total and current xor and stop
      total += xor;
      return;
    }

    // in each callback we will check 2 thing
    // 1 is idx+1 and current xor with the current num
    // 2 is idx+1 and current xor
    count(idx + 1, xor ^ nums[idx]);
    count(idx + 1, xor);
  };

  // now we start from 0,0 meaning idx=0 and xor=0
  count(0, 0);

  // result total
  return total;
};


/**
 * O(2^n) becase we nums and visit all the 2n subset
 * O(n) recursive call to hold n (depth of cb)
 */