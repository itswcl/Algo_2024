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
var maxArea = function (height: number[]): number {
  // const length = height.length;
  // let nextIdx = 1;
  // let currentArea = 0;

  // for (let currentIdx = 0; currentIdx < length; currentIdx++) {
  //     const currnetHeight = height[currentIdx]
  //     let currentWidth = 0;

  //     while (nextIdx < length) {
  //         const minIdx = Math.min(currnetHeight, height[nextIdx])
  //         currentWidth = nextIdx - currentIdx;
  //         currentArea = Math.max(minIdx * currentWidth, currentArea)
  //         nextIdx++;
  //     }
  //     nextIdx = 1;
  // }
  // return currentArea
  let maxArea = 0;
  let leftIdx = 0;
  let rightIdx = height.length - 1;

  while (leftIdx < rightIdx) {
    const leftHeight = height[leftIdx];
    const rightHeight = height[rightIdx];
    const minHeight = Math.min(leftHeight, rightHeight);
    const distance = rightIdx - leftIdx;
    const currentArea = minHeight * distance;
    maxArea = Math.max(maxArea, currentArea);

    if (leftHeight < rightHeight) {
      leftIdx++;
    } else if (leftHeight > rightHeight) {
      rightIdx--;
    } else {
      leftIdx++;
      rightIdx--;
    }
  }
  return maxArea;
};
