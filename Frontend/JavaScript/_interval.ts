/**
 * @param {Function} func
 * @param {number} delay
 * @param {number} period
 * @return {number}
 */
function mySetInterval(func, delay, period) {
  // initial object to hold the id
  let obj = {};

  // initial helper for func and delay
  function build(count) {
    obj.id = setTimeout(() => {
      // call back start after the delay
      func();
      build(count + 1);
    }, delay + period * count);
  }

  // initial start with count 0
  build(0);
  return obj;
}

/**
 * @param { number } id
 */
function myClearInterval(obj) {
  clearTimeout(obj.id);
}
