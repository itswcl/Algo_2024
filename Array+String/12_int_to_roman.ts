/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  // initial our list from big to small number
  const list = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  let result = "";

  // iterate thru the set
  for (let [letter, number] of list) {
    // each time we will consistan to decrease the number until the num is less than our current number
    while (num >= number) {
      result += letter;
      num -= number;
    }
  }
  return result;
};
