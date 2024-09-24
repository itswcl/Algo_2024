/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // initial our key and counter
  let maxKey;
  let count = 0;

  // iterate thru num
  for (let num of nums) {
    // if we see count is 0 we will update key and increase count
    if (count === 0) {
      maxKey = num;
      count++;
      // when we see same num we increase count
    } else if (maxKey === num) {
      count++;
      // different num we drecase count
    } else {
      count--;
    }
  }
  return maxKey;

  // // initial our map and max key, value
  // let map = new Map();
  // let maxKey;
  // let maxValue = 0;

  // // iterate the nums and find current key and value
  // for (let i = 0; i < nums.length; i++) {
  //     const curKey = nums[i];
  //     const curValue = map.get(curKey) + 1 || 1;

  //     // add our current entry to the map
  //     map.set(curKey, curValue);

  //     // if current value is bigger we update our maxKey and maxValue
  //     if (curValue > maxValue) {
  //         maxKey = curKey;
  //         maxValue = curValue
  //     }
  // }
  // return maxKey
};
