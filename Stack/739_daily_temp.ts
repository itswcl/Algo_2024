/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const n = temperatures.length;
  const result = new Array(n).fill(0);
  // stack to track latest idx
  const stack = [];

  for (let i = 0; i < n; i++) {
    const temp = temperatures[i];

    while (stack && temp > temperatures[stack[stack.length - 1]]) {
      const prevDay = stack.pop();
      result[prevDay] = i - prevDay;
    }

    stack.push(i);
  }
  return result;
};
