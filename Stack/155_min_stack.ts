var MinStack = function () {
  // we will initial stack and minStack
  this.stack = [];
  this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  // push to stack
  this.stack.push(val);
  // check val less than getMin
  if (!this.minStack.length || this.getMin() >= val) {
    // add to minStack
    this.minStack.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  // we will pop stack first
  const val = this.stack.pop();
  // check popped one is in the minStack
  if (val === this.getMin()) {
    // pop from minStack
    this.minStack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  // get latest from stack
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  // get latest from minStack
  return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
