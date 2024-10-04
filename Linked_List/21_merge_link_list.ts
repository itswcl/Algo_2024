/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // initial dummy and current point to dummy
  let dummy = new ListNode(0);
  let current = dummy;

  // we will continue loop list1 and 2
  while (list1 && list2) {
    // if val1 < list2 we append list1 and move list 1 to next
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;

      // if list2 val less we move list2
    } else {
      current.next = list2;
      list2 = list2.next;
    }

    // current will continue move to next when the current assigned
    current = current.next;
  }

  // in the end if any left from 1 or 2 we append to current because at this point current is the end
  if (list1) current.next = list1;
  if (list2) current.next = list2;

  // we return dummy next because that's where the start pointed
  return dummy.next;
};
