/**
 * Examples

[1, 2, 3].myReduce((prev, curr) => prev + curr, 0); // 6
[1, 2, 3].myReduce((prev, curr) => prev + curr, 4); // 10
 */

/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {Array<U>}
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
  const noInitial = initialValue === undefined;

  if (noInitial && this.length === 0) throw new TypeError("no arg");

  let acc = noInitial ? this[0] : initialValue;
  let startIdx = noInitial ? 1 : 0;

  for (let i = startIdx; i < this.length; i++) {
    if (Object.hasOwn(this, i)) {
      acc = callbackFn(acc, this[i], i, this);
    }
  }
  return acc;
};
