/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  // initial 2 dummy 1 for before and 1 for after
  let beforeHead = new ListNode(0);
  let afterHead = new ListNode(0);
  // set the pointer for both
  let before = beforeHead;
  let after = afterHead;

  // iterate thru head
  while (head) {
    // compare head val and x
    // head < x
    if (head.val < x) {
      // add to before
      before.next = head;
      before = before.next;
      // head >= x
    } else {
      // add to after
      after.next = head;
      after = after.next;
    }
    // move head to nextx
    head = head.next;
  }
  // after all we will update after next to null
  after.next = null;
  // before next link to afterHead
  before.next = afterHead.next;

  // return before next because we have dummy zero
  return beforeHead.next;
};
