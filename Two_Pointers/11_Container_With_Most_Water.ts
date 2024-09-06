/**
 * Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // initial our start and end idx
  let start = 0;
  let end = height.length - 1;
  let maxArea = 0;

  // we will move our start and end idx so we iterate while end greater than start
  while (start < end) {
      // in each iteration we will check the current num in both index
      const startNum = height[start];
      const endNum = height[end];
      // current width to math the area
      const curWidth = end - start;
      // we get the min as our current height
      const curHeight = Math.min(startNum, endNum);
      const curArea = curHeight * curWidth;
      // update our max
      maxArea = Math.max(curArea, maxArea);

      // now we moving the idx based on the numbers
      
      if (startNum < endNum) {
          start++;
      } else if (startNum > endNum) {
          end--;
      } else {
          start++
          end--
      }
  }

  // while (start < height.length) {
  //     const startNum = height[start];
  //     const endNum = height[end];
  //     const minHeight = Math.min(startNum, endNum);
  //     const width = end - start
  //     const curArea = minHeight * width;
  //     maxArea = curArea > maxArea ? curArea : maxArea;
  //     end++;

  //     if (end >= height.length) {
  //         start++;
  //         end = start + 1;
  //     }
  // }
  return maxArea
};