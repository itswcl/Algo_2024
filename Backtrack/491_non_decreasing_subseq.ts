/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  // initial result arr
  let result = [];

  const backtrack = (start, path) => {
    // while running we will check if the path has more than 2 element
    // we add to result only if path has more than 1 element
    if (path.length > 1) result.push([...path]);

    // initial a set to check visited element
    let set = new Set();

    // iterate thru num with start idx in each backtrack we will iterate til end of nums
    for (let i = start; i < nums.length; i++) {
      const num = nums[i];
      // if current is visited we skip
      if (set.has(num)) continue;

      // if first time visited or the num greater latest num
      if (path.length === 0 || num >= path[path.length - 1]) {
        // we add num to visited
        set.add(num);
        // we add the num to current path
        path.push(num);
        // now each element need to run it's self of backtrack
        backtrack(i + 1, path);
        // we need to pop latest because we need to check next+next element with current
        path.pop();
      }
    }
  };

  // backtrack to track start with idx 0 and empty array
  backtrack(0, []);
  // result
  return result;
};
