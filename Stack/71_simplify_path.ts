/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  // spilt out the element
  let paths = path.split("/");
  // array to contain the result
  let result = [];

  // iterate thru all the element
  for (let i = 0; i < paths.length; i++) {
    const char = paths[i];

    // if it's empty or dot we can skip
    if (char == "" || char == ".") continue;

    // if 2 dots we will try to remove pervious added element if any
    if (char == "..") {
      if (result.length) {
        result.pop();
      }
      // add the elemetn to result
    } else {
      result.push(char);
    }
  }
  // format the result
  return "/" + result.join("/");
};
