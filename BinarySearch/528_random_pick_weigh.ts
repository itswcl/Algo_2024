/**
 * @param {number[]} w
 */
var Solution = function (ws) {
  // initial our total weigh
  this.total = 0;
  // iniital prefix for weigh
  this.prefixs = [];
  // iterate thru w
  for (let w of ws) {
    this.total += w;
    this.prefixs.push(this.total);
  }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  // find our random target with total
  const target = Math.floor(Math.random() * this.total) + 1;
  // initial left and right pointer
  let left = 0,
    right = this.prefixs.length - 1;
  // iterate thru the prefixs
  while (left < right) {
    // find the mid
    const mid = Math.floor((right + left) / 2);
    // compare mid and target
    // if mid < target we move left to mid+1
    if (this.prefixs[mid] < target) {
      left = mid + 1;
    } else {
      // else right = mid
      right = mid;
    }
  }
  // return left
  return left;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */


/**
 * time for both function O(n) and O(log n)
 * space is O(n) for storing array
 */