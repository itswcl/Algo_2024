/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  // initial map and total
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;

  // while iterate thru string
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const nextChar = s[i + 1];
    // we wil compare the value in the map
    if (map[char] < map[nextChar]) {
      // if next is greater than current we will - current.
      // eg, I = 1, V = 5 -> IV = 5 - 1 = 4
      total -= map[char];
    } else {
      // else V = 5, I = 1 -> I = 1
      total += map[char];
    }
  }

  // const map = {
  //     I: 1,
  //     V: 5,
  //     X: 10,
  //     L: 50,
  //     C: 100,
  //     D: 500,
  //     M: 1000,
  //     IV: 4,
  //     IX: 9,
  //     XL: 40,
  //     XC: 90,
  //     CD: 400,
  //     CM: 900,
  // }

  // for (let i = 0; i < s.length; i++) {
  //     const char = s[i];

  //     if (map[char + s[i + 1]]) {
  //         total += map[char + s[i + 1]];
  //         i++
  //     } else {
  //         total += map[char];
  //     }
  //     console.log(total)
  // }
  return total;
};
