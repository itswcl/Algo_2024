/**
 * Examples

const john = {
  age: 42,
  getAge: function () {
    return this.age;
  },
};

const unboundGetAge = john.getAge;
console.log(unboundGetAge()); // undefined

const boundGetAge = john.getAge.myBind(john);
console.log(boundGetAge()); // 42
 */

/**
 * @param {any} thisArg
 * @param {...*} argArray
 * @return {Function}
 */
Function.prototype.myBind = function (thisArg, ...argArray) {
  // get the original (this)
  const original = this;
  // return our following function
  return function (...args) {
    // now we apply each args
    return original.apply(thisArg, [...argArray, ...args])
    // return Reflect.apply(original, thisArg, [...argArray, ...args]);
  };
};
