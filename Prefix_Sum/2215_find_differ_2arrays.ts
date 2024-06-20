/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1: number[], nums2: number[]): number[][] {
  let newOnes: number[] = [];
  let newTwos: number[] = [];

  for (let i = 0; i < nums1.length; i++) {
    const num = nums1[i];
    const haveNumInNum2 = nums2.includes(num);
    const haveNumInNewOnes = newOnes.includes(num);
    const isUniqNum = !haveNumInNum2 && !haveNumInNewOnes;
    if (isUniqNum) newOnes.push(num);
  }

  for (let i = 0; i < nums2.length; i++) {
    const num = nums2[i];
    const haveNumInNum1 = nums1.includes(num);
    const haveNumInNewTwos = newTwos.includes(num);
    const isUniqNum = !haveNumInNum1 && !haveNumInNewTwos;
    if (isUniqNum) newTwos.push(num);
  }
  return [newOnes, newTwos];
  // let firstSet = new Set(nums1);
  // let secondSet = new Set(nums2);

  // const firstDiff = [...firstSet].filter((ele) =>  !secondSet.has(ele))
  // const secondDiff = [...secondSet].filter((ele) =>  !firstSet.has(ele))

  // return [firstDiff, secondDiff]
  // let firstSet = new Set([...nums1]);
  // let secondSet = new Set([...nums2]);
  // let firstDiff = [];
  // let secondDiff = [];

  // for (let num of firstSet) {
  //     const hasNumInSecond = secondSet.has(num);
  //     if (!hasNumInSecond) firstDiff.push(num);
  // }

  // for (let num of secondSet) {
  //     const hasNumInFirst = firstSet.has(num);
  //     if (!hasNumInFirst) secondDiff.push(num);
  // }

  // return [firstDiff, secondDiff]
};
