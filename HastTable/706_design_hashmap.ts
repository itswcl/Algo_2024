var MyHashMap = function () {
  this.buckts = Array.from({ length: 199997 }, () => []);
};

MyHashMap.prototype.hash = function (key) {
  return key % this.buckts.length;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  const index = this.hash(key);
  for (let pair of this.buckts[index]) {
    if (pair[0] === key) {
      pair[1] = value;
      return;
    }
  }
  this.buckts[index].push([key, value]);
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const index = this.hash(key);
  for (let pair of this.buckts[index]) {
    if (pair[0] == key) return pair[1];
  }
  return -1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  const index = this.hash(key);
  this.buckts[index] = this.buckts[index].filter((pair) => {
    pair[0] != key;
  });
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
