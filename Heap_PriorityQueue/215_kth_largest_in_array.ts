/**
 * Example 1:

Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
Example 2:

Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // initial Heap
  const heap = new MinHeap();

  // go thru num
  for (const num of nums) {
    // insert each
    heap.insert(num);
    // and keep the Heap as target
    if (heap.size() > k) heap.remove();
  }
  // return top as our min in the Heap with k size
  return heap.top();
};

class MinHeap {
  // initial our heap
  constructor() {
    this.heap = [];
  }
  size() {
    return this.heap.length;
  }

  // method to get parent / left / right Idx
  getParentIdx(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeftIdx(i) {
    return 2 * i + 1;
  }
  getRightIdx(i) {
    return 2 * i + 2;
  }

  // swap nodes
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // insert our new val
  insert(val) {
    this.heap.push(val);
    // while insert[........ <val>] we will do heapifyUp from last idx
    this.heapifyUp(this.size() - 1);
  }

  // remove node
  remove() {
    if (this.size() === 0) return null;
    // to keep our root to return (usage for other problem)
    const root = this.heap[0];
    // swap our idx 0 and last idx
    this.heap[0] = this.heap.pop();
    // heapify down from idx 0
    this.heapifyDown(0);
    return root;
  }

  heapifyUp(idx) {
    // we will continue loop until top
    // when parent greater current we will move up
    while (idx > 0 && this.heap[this.getParentIdx(idx)] > this.heap[idx]) {
      this.swap(idx, this.getParentIdx(idx));
      // current idx will be parent like moving up
      idx = this.getParentIdx(idx);
    }
  }

  heapifyDown(idx) {
    // initial our smallest Idx from idx
    // compare left and right
    let smallestIdx = idx;
    const leftIdx = this.getLeftIdx(smallestIdx);
    const rightIdx = this.getRightIdx(smallestIdx);
    const heapLeft = this.heap[leftIdx];
    const heapRight = this.heap[rightIdx];
    const size = this.size();

    // we start from left since left is smaller
    // check left and right within the size
    // check left and right element smaller than currentIdx then we update smallestIdx
    if (leftIdx < size && heapLeft < this.heap[smallestIdx])
      smallestIdx = leftIdx;
    if (rightIdx < size && heapRight < this.heap[smallestIdx])
      smallestIdx = rightIdx;

    // if update happen we swap our current idx and smallest idx
    // and recursively heapifyDown with new small idx
    if (smallestIdx !== idx) {
      this.swap(idx, smallestIdx);
      this.heapifyDown(smallestIdx);
    }
  }

  // find our head
  top() {
    return this.size() > 0 ? this.heap[0] : null;
  }
}
