/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  // let alts = [0];
  // let max = alts[0];

  // for (let i = 0; i < gain.length; i++) {
  //     const num = gain[i];
  //     const nextAlt = alts[i] + num;
  //     alts.push(nextAlt);
  //     max = Math.max(max, nextAlt)
  // }
  // return max;
  let currentAlt = 0;
  let maxAlt = currentAlt;

  for (let i = 0; i < gain.length; i++) {
    const num = gain[i];
    currentAlt += num;
    maxAlt = Math.max(maxAlt, currentAlt);
  }
  return maxAlt;
};
