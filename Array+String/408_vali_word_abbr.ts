/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function (word, abbr) {
  // initial both i and j to travel word and abbr
  let i = 0;
  let j = 0;

  // as long i and j length valid for both str
  while (i < word.length && j < abbr.length) {
    // if both same we increase both pointer and skip
    if (word[i] === abbr[j]) {
      i++;
      j++;
      continue;
    }
    // if abbr is char or zero we gets false
    if (isNaN(abbr[j]) || abbr[j] === "0") return false;

    // initial num to starting moving j in abbr
    let num = 0;
    // while it's number and j is within scope
    while (j < abbr.length && !isNaN(abbr[j])) {
      // update number with num * 10 + current
      num = num * 10 + parseInt(abbr[j]);
      j++;
    }

    // moving i with number of moving in j
    i += num;
  }

  // after while loop if i and j is same length of input it's true
  return i === word.length && j === abbr.length;
};

/**
 * time is O(n) we need to go thr all char
 * space is O(1) because we only using 2 pointer
 */