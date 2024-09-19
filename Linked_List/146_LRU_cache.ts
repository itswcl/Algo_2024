/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  // if we dont find the pair we return -1
  if (!this.map.has(key)) return -1;

  // by we adding this key and value we indicate it's latest pair we added
  let val = this.map.get(key);
  this.map.delete(key);
  this.map.set(key, val);
  return this.map.get(key);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // we will check if we currently have this pair
  if (this.map.has(key)) this.map.delete(key);

  // set the pair
  this.map.set(key, value);

  // for over cap case
  if (this.map.size > this.capacity)
    // .next() will get us the oldest pair in the map
    // .value will get the key we are look for and remove it
    this.map.delete(this.map.keys().next().value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
