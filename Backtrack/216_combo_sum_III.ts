/**
 * Example 1:

Input: k = 3, n = 7
Output: [[1,2,4]]
Explanation:
1 + 2 + 4 = 7
There are no other valid combinations.
Example 2:

Input: k = 3, n = 9
Output: [[1,2,6],[1,3,5],[2,3,4]]
Explanation:
1 + 2 + 6 = 9
1 + 3 + 5 = 9
2 + 3 + 4 = 9
There are no other valid combinations.
Example 3:

Input: k = 4, n = 1
Output: []
Explanation: There are no valid combinations.
Using 4 different numbers in the range [1,9], the smallest sum we can get is 1+2+3+4 = 10 and since 10 > 1, there are no valid combination.
 */

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (allowNums, targetSum) {
  const result = [];

  const backtrack = (start, combination, sum) => {
    // when we find the allow length and target sum we push into result
    if (combination.length === allowNums && sum === targetSum) {
      result.push([...combination]);
    } else {
      // else we will iterate thru "start" to 9
      for (let i = start; i <= 9; i++) {
        const curSum = sum + i;
        // if our currentSum is less than target
        if (curSum <= targetSum) {
          // the current i is one of valid we add to our combo
          combination.push(i);
          // and recursive call backtrack with our new start, combo, currentSum
          backtrack(i + 1, combination, curSum);
          // remove the last element we just added to run next loop
          combination.pop();
        }
      }
    }
  };

  // call backtrack with start point, combination, start sum
  backtrack(1, [], 0);
  return result;
};
