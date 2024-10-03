/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (!nums.length) return [];
  let result = [];

  // set our intial start point
  let start = nums[0];
  let end = nums[0];

  // start from 1 and iterate thru
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    // if our current is "ending" + 1 we will continue to update end number
    if (num == end + 1) {
      end = num;
    } else {
      // if not +1 we will check if same
      if (start === end) {
        // same we find no start end
        result.push(`${start}`);
      } else {
        // if not we find our start to end
        result.push(`${start}->${end}`);
      }

      // we will also update inital to current
      start = num;
      end = num;
    }
  }

  // after iterate we need to check again to see if start end different
  if (start === end) {
    result.push(`${start}`);
  } else {
    result.push(`${start}->${end}`);
  }

  // get our result
  return result;
};
