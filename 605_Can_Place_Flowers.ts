/**
 * Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
 */

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  // have var both n and new bed
  let leftFlowers = n;
  let newFlowerbed = flowerbed;

  // iterate thru bed if pervious and next is 0 we plant it and decrease leftover
  for (let i = 0; i < flowerbed.length; i++) {
    if (leftFlowers === 0) break;

    const currentBed = newFlowerbed[i];
    const isPerviousEmpty = isEmptyPlent(newFlowerbed[i - 1]);
    const isNextEmpty = isEmptyPlent(newFlowerbed[i + 1]);

    if (isPerviousEmpty && isNextEmpty && currentBed === 0) {
      newFlowerbed[i] = 1;
      leftFlowers--;
    }
  }

  // if leftover is 0 it means we plent without adjacnet
  return leftFlowers === 0;
}

function isEmptyPlent(bed) {
  if (bed == null) return true;
  return bed === 0;
}
