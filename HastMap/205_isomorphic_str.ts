/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  // initial 2 map for both s and t
  let mapS = new Map();
  let mapT = new Map();

  // iterate thru the length
  for (let i = 0; i < s.length; i++) {
    const eleS = s[i];
    const eleT = t[i];

    // first we will set our mapS
    // if the value of key is different from current T then it's false
    if (mapS.get(eleS) && mapS.get(eleS) !== eleT) {
      return false;
    } else {
      mapS.set(eleS, eleT);
    }

    // same step for mapT
    if (mapT.get(eleT) && mapT.get(eleT) !== eleS) {
      return false;
    } else {
      mapT.set(eleT, eleS);
    }
  }
  return true;
};
