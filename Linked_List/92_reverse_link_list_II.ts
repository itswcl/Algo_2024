/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  // early return
  if (!head || left == right) return head;

  // initial dummy and prev pointer
  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;
  // move our pointer to 1 before left;
  for (let i = 1; i < left; i++) {
    prev = prev.next;
  }

  // initial current and next pointer
  let current = prev.next;
  let next = null;
  // swap our nodes
  for (let i = 0; i < right - left; i++) {
    // next will be temp to hold current next
    next = current.next;
    // now current next will pointer to next next
    current.next = next.next;
    // next next will point to prev next
    next.next = prev.next;
    // prev next will point back to next
    prev.next = next;
  }
  // get dummy next
  return dummy.next;
};
