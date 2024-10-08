var RandomizedSet = function () {
  // we will use map to track ele and idx
  this.map = new Map();
  // and list for return random
  this.list = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  // we will check if we had it before
  if (this.map.has(val)) return false;
  // then we add this current val and it's idx
  this.map.set(val, this.list.length);
  // get idx by checking the length of list
  this.list.push(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  // check if exist
  if (!this.map.has(val)) return false;
  // we get our latest element and the target index
  const index = this.map.get(val);
  // this is to swap and pop the latest element
  const lastEle = this.list[this.list.length - 1];

  // to update the element
  this.list[index] = lastEle;
  this.map.set(lastEle, index);

  // to remove extra element
  this.list.pop();
  this.map.delete(val);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  // math random to get the idx
  const index = Math.floor(Math.random() * this.list.length);
  // get val in the list
  return this.list[index];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
