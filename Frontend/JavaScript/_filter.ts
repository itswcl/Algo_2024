/**
 * Examples

[1, 2, 3, 4].myFilter((value) => value % 2 == 0); // [2, 4]
[1, 2, 3, 4].myFilter((value) => value < 3); // [1, 2]
Notes

The filter callback function takes in more than just the element! There's also a second parameter for Array.prototype.filter as well. You are recommended to read the specification for Array.prototype.filter on MDN Docs before attempting.
 */

/**
 * @template T
 * @param { (value: T, index: number, array: Array<T>) => boolean } callbackFn
 * @param {any} [thisArg]
 * @return {Array<T>}
 */
Array.prototype.myFilter = function (callbackFn, thisArg) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    const val = this[i];
    if (callbackFn.call(thisArg, val, i, this)) {
      result.push(val);
    }
  }

  return result;
};
