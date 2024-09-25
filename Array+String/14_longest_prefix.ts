/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // we will find our shortest str
  let heigh = Infinity;
  for (let str of strs) {
    if (str.length < heigh) heigh = str.length;
  }

  // if it's 0 then we stopped
  if (!heigh) return "";

  // we use h and l to iterate thr each possiblity
  let low = 1;
  let result = "";

  // low less equal to heigh because the last possible will be 1
  while (low <= heigh) {
    // each time we will use mid to find current prefix
    const mid = Math.floor((heigh + low) / 2);
    const prefix = strs[0].substring(0, mid);

    // assument the prefix will be valid for each str
    let allValid = true;

    // now we check each str in the array
    for (let str of strs) {
      // if 1 str doesnt meet prefix we stopped
      if (!str.startsWith(prefix)) {
        allValid = false;
        break;
      }
    }

    // if all valid we will contiue to our next char prefix
    // fl -> flo (x)
    if (allValid) {
      result = prefix;
      low++;
      // if one no valid we will decrase our high to check pervious prefix
      // fl -> f
    } else {
      heigh--;
    }
  }
  return result;
};
