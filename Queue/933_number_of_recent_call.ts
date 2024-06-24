/**
 * Example 1:

Input
["RecentCounter", "ping", "ping", "ping", "ping"]
[[], [1], [100], [3001], [3002]]
Output
[null, 1, 2, 3, 3]

Explanation
RecentCounter recentCounter = new RecentCounter();
recentCounter.ping(1);     // requests = [1], range is [-2999,1], return 1
recentCounter.ping(100);   // requests = [1, 100], range is [-2900,100], return 2
recentCounter.ping(3001);  // requests = [1, 100, 3001], range is [1,3001], return 3
recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002], range is [2,3002], return 3

 */

var RecentCounter = function () {
  this.pings = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.pings.push(t);
  // find 3000 ms diff
  const diff = t - 3000;

  // we will continuely loop until the differ greate the first element
  // [1,100,3001, 3002] -> 3002 - 3000 -> 2 > 1 -> [100,3001,3002]
  while (this.pings[0] < diff) {
    this.pings.shift();
  }
  // find what's left in queue
  return this.pings.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
