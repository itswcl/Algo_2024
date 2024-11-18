/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let sArr = s.split(" ");
  if (sArr.length != pattern.length) return false;

  let mapP = new Map();
  let mapS = new Map();

  for (let i = 0; i < pattern.length; i++) {
    let eleP = pattern[i];
    let eleS = sArr[i];

    if (mapP.get(eleP) && mapP.get(eleP) != eleS) {
      return false;
    } else {
      mapP.set(eleP, eleS);
    }

    if (mapS.get(eleS) && mapS.get(eleS) != eleP) {
      return false;
    } else {
      mapS.set(eleS, eleP);
    }
  }

  return true;
};
