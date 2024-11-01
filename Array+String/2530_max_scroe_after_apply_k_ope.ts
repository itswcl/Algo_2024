/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function (nums, k) {
  // nums.sort((a, b) => b - a)
  // let total = 0
  // for (let i = 0; i < k; i++) {
  //     total += nums[0];
  //     nums[0] = Math.ceil(nums[0] / 3);
  //     nums.sort((a, b) => b - a)
  // }
  // return total;

  // initial priorty queue
  const heap = new MaxPriorityQueue();
  let total = 0;

  // enqueue the elements
  for (let num of nums) heap.enqueue(num);

  // itearte k times
  for (let i = 0; i < k; i++) {
    // dequeue (always biggest in queue)
    const num = heap.dequeue().element;
    // add to total
    total += num;
    // add back to queue with num / 3
    heap.enqueue(Math.ceil(num / 3));
  }
  return total;
};
