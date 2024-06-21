/**
 * Example 1:

Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
Example 2:

Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.
Example 3:

Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
 */

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids: number[]): number[] {
  let stack: number[] = [];

  for (let i = 0; i < asteroids.length; i++) {
    let currentAst: number = asteroids[i];

    // so we start stack when we have our first element in
    // if current (start from idx 1) is negative [-1] meaning moving left <<
    // and stack latest element is positive [2] meaning moving right >>
    // now collision happens
    while (stack.length && currentAst < 0 && stack[stack.length - 1] > 0) {
      const latestAstPop = stack.pop() as number;
      const lastSum = latestAstPop + currentAst;

      // if sum is 0 meaning we find our collision [-1, 1]
      // we update our current to 0 so it wont get push in
      if (lastSum === 0) {
        currentAst = 0;
      }

      // else we check if latest sum is greater than 0
      // meaning we have bigger positive [2, -1] -> 2
      // otherwise we keep same current
      currentAst = lastSum > 0 ? latestAstPop : currentAst;
    }

    if (currentAst) stack.push(currentAst);
  }
  return stack;
};
