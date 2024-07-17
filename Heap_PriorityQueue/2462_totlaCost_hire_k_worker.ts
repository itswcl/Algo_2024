/**
 * Example 1:

Input: costs = [17,12,10,2,7,2,11,20,8], k = 3, candidates = 4
Output: 11
Explanation: We hire 3 workers in total. The total cost is initially 0.
- In the first hiring round we choose the worker from [17,12,10,2,7,2,11,20,8]. The lowest cost is 2, and we break the tie by the smallest index, which is 3. The total cost = 0 + 2 = 2.
- In the second hiring round we choose the worker from [17,12,10,7,2,11,20,8]. The lowest cost is 2 (index 4). The total cost = 2 + 2 = 4.
- In the third hiring round we choose the worker from [17,12,10,7,11,20,8]. The lowest cost is 7 (index 3). The total cost = 4 + 7 = 11. Notice that the worker with index 3 was common in the first and last four workers.
The total hiring cost is 11.
Example 2:

Input: costs = [1,2,4,1], k = 3, candidates = 3
Output: 4
Explanation: We hire 3 workers in total. The total cost is initially 0.
- In the first hiring round we choose the worker from [1,2,4,1]. The lowest cost is 1, and we break the tie by the smallest index, which is 0. The total cost = 0 + 1 = 1. Notice that workers with index 1 and 2 are common in the first and last 3 workers.
- In the second hiring round we choose the worker from [2,4,1]. The lowest cost is 1 (index 2). The total cost = 1 + 1 = 2.
- In the third hiring round there are less than three candidates. We choose the worker from the remaining workers [2,4]. The lowest cost is 2 (index 0). The total cost = 2 + 2 = 4.
The total hiring cost is 4.
 */

/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function (costs, k, candidates) {
  // initial our left and right queue
  const leftQueue = new MinPriorityQueue();
  const rightQueue = new MinPriorityQueue();
  // initial right and left idx
  let left = 0;
  let right = costs.length - 1;
  let totalCost = 0;

  // building up our left and right queue
  // while 1. under candidate and leftIdx less equal rightIdx
  for (let i = 0; i < candidates && left <= right; i++) {
    leftQueue.enqueue(costs[left]);
    left++;
    if (left <= right) {
      rightQueue.enqueue(costs[right]);
      right--;
    }
  }

  // go thru target k
  for (let i = 0; i < k; i++) {
    // check either we go with left queue or right queue
    // 1. left queue not empty
    // 2. right is empty or left ele < right ele
    if (
      !leftQueue.isEmpty() &&
      (rightQueue.isEmpty() ||
        leftQueue.front().element <= rightQueue.front().element)
    ) {
      // while going left queue we "dequeue" and add to our total
      totalCost += leftQueue.dequeue().element;
      // check current leftIdx still less than right
      if (left <= right) {
        // if so we add "cost" left to left queue
        leftQueue.enqueue(costs[left]);
        // increase left
        left++;
      }
    } else {
      // while going thru right queue
      // we add the right element to total
      totalCost += rightQueue.dequeue().element;
      // check current left still less than right
      if (left <= right) {
        // add our cost from right idx
        rightQueue.enqueue(costs[right]);
        // lower our rightidx
        right--;
      }
    }
  }
  return totalCost;
};
