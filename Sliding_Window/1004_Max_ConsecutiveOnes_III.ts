/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  // let flips = k;
  // let tempCount = 0;
  // let maxCount = 0;
  // let head = 0;

  // for (let i = 0; i < nums.length; i++) {
  //     const num = nums[i];

  //     if (num) {
  //         tempCount++;
  //     } else if (!num && flips) {
  //         tempCount++;
  //         flips--;
  //     } else {
  //         i = head;
  //         head++
  //         tempCount = 0;
  //         flips = k;
  //     }
  //     maxCount = Math.max(maxCount, tempCount);
  // }
  // return maxCount;

  // initial left and right idx
  let rightIdx = 0,
    leftIdx = 0;

  // iterate thru nums with right pointer
  while (rightIdx < nums.length) {
    const rightEle = nums[rightIdx];
    const leftEle = nums[leftIdx];

    // "0" we flip and decrease k
    if (rightEle === 0) k--;

    // we need to check if we flip while we have flip extra
    if (k < 0) {
      // to check if we current element is 0 then we add extra flip
      // meaning we flip here before now we adding it back
      if (leftEle === 0) k++;

      // when we have over flip we moving leftIdx
      leftIdx++;
    }

    // we will always increase right until end - nums.length
    rightIdx++;
  }

  // the difference of end from right to left
  return rightIdx - leftIdx;
};
