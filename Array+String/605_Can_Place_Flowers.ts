/**
 * Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
 */

var canPlaceFlowers = function (flowerbed, n) {
  // we multa our input ideally we should copy and use it as new ref
  // iterate the length of bed
  for (let i = 0; i < flowerbed.length; i++) {
    if (n === 0) break;

    // we need to compare the prev, cur, next
    const cur = flowerbed[i];
    const perv = flowerbed[i - 1];
    const next = flowerbed[i + 1];

    // perv and next empty and current is empty
    if (cur === 0 && perv !== 1 && next !== 1) {
      // when we flower one we will decrease the leftover flower
      flowerbed[i] = 1;
      n--;
    }
  }
  // finally we check we used up all flower
  return n === 0;
};
