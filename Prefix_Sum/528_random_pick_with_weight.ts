/**
 * @param {number[]} w
 */
var Solution = function (w) {
  // initial our total with nums
  this.total = 0;
  this.nums = [];
  // iterate the num from 'w' and total up and add to nums
  for (let num of w) {
    this.total += num;
    this.nums.push(this.total);
  }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  // find our target
  const target = Math.floor(Math.random() * this.total) + 1;

  // we can do left right pointer to check nums arr
  let left = 0,
    right = this.nums.length - 1;
  while (left < right) {
    const mid = Math.floor((right + left) / 2);
    if (this.nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */


/**
 * O(n) for solution building weights 
 * O(log n) for pick random
 * O(1) variable for target
 */