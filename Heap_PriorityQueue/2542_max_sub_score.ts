/**
 * Example 1:

Input: nums1 = [1,3,3,2], nums2 = [2,1,3,4], k = 3
Output: 12
Explanation: 
The four possible subsequence scores are:
- We choose the indices 0, 1, and 2 with score = (1+3+3) * min(2,1,3) = 7.
- We choose the indices 0, 1, and 3 with score = (1+3+2) * min(2,1,4) = 6. 
- We choose the indices 0, 2, and 3 with score = (1+3+2) * min(2,3,4) = 12. 
- We choose the indices 1, 2, and 3 with score = (3+3+2) * min(1,3,4) = 8.
Therefore, we return the max score, which is 12.
Example 2:

Input: nums1 = [4,2,3,1,1], nums2 = [7,5,10,9,6], k = 1
Output: 30
Explanation: 
Choosing index 2 is optimal: nums1[2] * nums2[2] = 3 * 10 = 30 is the maximum possible score.

 */

// minHeap

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function (nums1, nums2, k) {
  // [4,2,3], [3,4,6] -> [ [3,4], [4,2], [6,3] ]
  const pairs = nums1.map((n, idx) => [nums2[idx], n]);
  // [[6,3], [4,2], [3,4]]
  pairs.sort((a, b) => b[0] - a[0]);

  // initial our sum (n1 count)
  let sum = 0;
  let result = 0;
  const minHeap = new MinHeap();

  // iterate our sorted pairs by n2
  for (const [n2, n1] of pairs) {
    // get our key n1 and count sum
    minHeap.insert(n1);
    sum += n1;

    // if we go over k we remove
    if (minHeap.size() > k) sum -= minHeap.remove();
    // if we find our k size we will check our new result with sum * n2
    if (minHeap.size() === k) result = Math.max(result, sum * n2);
  }
  return result;
};

class MinHeap {
  constructor() {
    this.heap = [];
  }
  size() {
    return this.heap.length;
  }
  top() {
    return this.heap[0] ?? null;
  }

  getParentIdx(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeftIdx(i) {
    return i * 2 + 1;
  }
  getRightIdx(i) {
    return i * 2 + 2;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.size() - 1);
  }
  remove() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop();
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return root;
  }

  heapifyUp(i) {
    while (i > 0 && this.heap[this.getParentIdx(i)] > this.heap[i]) {
      this.swap(this.getParentIdx(i), i);
      i = this.getParentIdx(i);
    }
  }
  heapifyDown(i) {
    let smallest = i;
    const leftIdx = this.getLeftIdx(i);
    const rightIdx = this.getRightIdx(i);
    const leftHeap = this.heap[leftIdx];
    const rightHeap = this.heap[rightIdx];
    const size = this.size();

    if (leftIdx < size && leftHeap < this.heap[smallest]) smallest = leftIdx;
    if (rightIdx < size && rightHeap < this.heap[smallest]) smallest = rightIdx;
    if (smallest !== i) {
      this.swap(smallest, i);
      this.heapifyDown(smallest);
    }
  }
}

// minPriorityQueue()

var maxScore = function (nums1, nums2, k) {
  // first we get a sorted pairs [n2, n1]
  const pairs = nums1.map((num, idx) => [nums2[idx], num]);
  pairs.sort((a, b) => b[0] - a[0]);

  const queue = new MinPriorityQueue();
  // sum consider as num1 set
  let sum = 0;
  let result = 0;

  // iterate our sorted pairs
  for (const [num2, num1] of pairs) {
    // each we calculate our n1 sum
    queue.enqueue(num1);
    sum += num1;

    // if we went over k we decrease our sum with dequeue element
    if (queue.size() > k) sum -= queue.dequeue().element;
    // each round we count our result
    // compare our current sum * num2 and current result
    if (queue.size() === k) result = Math.max(result, sum * num2);
  }
  return result;
};
