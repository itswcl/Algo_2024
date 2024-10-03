/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // intial a map
  let map = new Map();

  // iterate the strs
  for (let str of strs) {
    // create our key
    const sortedStr = str.split("").sort().join("");

    // check the value for the sortedStr key
    if (map.has(sortedStr)) {
      map.get(sortedStr).push(str);
    } else {
      map.set(sortedStr, [str]);
    }
  }

  // get all the values from the key make an rresult array
  return Array.from(map.values());
};
