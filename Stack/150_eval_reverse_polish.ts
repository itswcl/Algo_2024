/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  // initial a stack to include the nums from tokens
  let stack = [];

  // iterate thru token
  for (let token of tokens) {
    const isNumber = !isNaN(token);

    // check if it's number we add to stack
    if (isNumber) {
      stack.push(Number(token));
    } else {
      // else when we see the operator we will pop from stack
      // first item pop will consider second element
      let b = stack.pop();
      // second pop consider first element
      let a = stack.pop();

      // with swtich statement to do the calculation for each item
      switch (token) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          stack.push(Math.trunc(a / b));
          break;
      }
    }
  }
  // in the end it will have only one number left
  return stack[0];
};
