/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // we will go thru from lastest idx for
  // m - one length, n two length, m+n-1 total length;
  let one = m - 1;
  let two = n - 1;
  let latest = m + n - 1;

  // iterate thru nums1 and keep track of 3 pointers
  while (one >= 0 && two >= 0) {
    if (nums1[one] > nums2[two]) {
      nums1[latest] = nums1[one];
      one--;
    } else {
      nums1[latest] = nums2[two];
      two--;
    }
    latest--;
  }

  // in the end if nums2 left we will continue
  while (two >= 0) {
    nums1[latest] = nums2[two];
    latest--;
    two--;
  }
};
