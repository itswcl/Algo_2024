/**
 * Example 1:

Input
["SmallestInfiniteSet", "addBack", "popSmallest", "popSmallest", "popSmallest", "addBack", "popSmallest", "popSmallest", "popSmallest"]
[[], [2], [], [], [], [1], [], [], []]
Output
[null, null, 1, 2, 3, null, 1, 4, 5]

Explanation
SmallestInfiniteSet smallestInfiniteSet = new SmallestInfiniteSet();
smallestInfiniteSet.addBack(2);    // 2 is already in the set, so no change is made.
smallestInfiniteSet.popSmallest(); // return 1, since 1 is the smallest number, and remove it from the set.
smallestInfiniteSet.popSmallest(); // return 2, and remove it from the set.
smallestInfiniteSet.popSmallest(); // return 3, and remove it from the set.
smallestInfiniteSet.addBack(1);    // 1 is added back to the set.
smallestInfiniteSet.popSmallest(); // return 1, since 1 was added back to the set and
                                   // is the smallest number, and remove it from the set.
smallestInfiniteSet.popSmallest(); // return 4, and remove it from the set.
smallestInfiniteSet.popSmallest(); // return 5, and remove it from the set.
 */

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

  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }
  getLeftIdx(idx) {
    return 2 * idx + 1;
  }
  getRightIdx(idx) {
    return 2 * idx + 2;
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

  heapifyUp(idx) {
    while (idx > 0 && this.heap[this.getParentIdx(idx)] > this.heap[idx]) {
      this.swap(this.getParentIdx(idx), idx);
      idx = this.getParentIdx(idx);
    }
  }
  heapifyDown(idx) {
    let smallest = idx;
    const leftIdx = this.getLeftIdx(idx);
    const rightIdx = this.getRightIdx(idx);
    const leftHeap = this.heap[leftIdx];
    const rightHeap = this.heap[rightIdx];
    const size = this.size();

    if (leftIdx < size && leftHeap < this.heap[smallest]) smallest = leftIdx;
    if (rightIdx < size && rightHeap < this.heap[smallest]) smallest = rightIdx;
    if (smallest !== idx) {
      this.swap(smallest, idx);
      this.heapifyDown(smallest);
    }
  }
}

var SmallestInfiniteSet = function () {
  // initial minHeap and set
  this.current = 1;
  this.minHeap = new MinHeap();
  this.addedBackSet = new Set();
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
    // we we need to ensure we have at least 1 node to remove
  if (this.minHeap.size() > 0) {
    const smallest = this.minHeap.remove();
    this.addedBackSet.delete(smallest);
    return smallest;
  }

  // if no remove we increase our current
  return this.current++;
};

/**
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
    // 1. check num is lesser than current meaning we haven't get to the point
    // 2. set doesnt have our num
  if (num < this.current && !this.addedBackSet.has(num)) {
    this.minHeap.insert(num);
    this.addedBackSet.add(num);
  }
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
